import { bodySnippet } from "./search-snippet";
import { normalizeSearchText, tokenizeQuery, wordPrefixPattern } from "./search-text";
import type { SearchField, SearchIndexEntry, SearchResult } from "./search-types";

// Weight of one token matching in each field; body hits count once per occurrence, capped.
const FIELD_WEIGHT: Record<SearchField, number> = { title: 10, tags: 6, description: 3, body: 1 };
const FIELD_ORDER: SearchField[] = ["title", "tags", "description", "body"];
const BODY_HITS_CAP = 5;
const DEFAULT_LIMIT = 8;

/**
 * Ranks `entries` against a free-text query. Every query word must match (as a word prefix,
 * case- and accent-insensitive) in at least one field; titles weigh more than tags, tags more
 * than descriptions, descriptions more than body text. Ties fall back to newest first.
 *
 * Example: `searchPosts(index, "ffmpeg netflix")[0].entry.slug` → `"netflix-download-ffmpeg"`
 */
export function searchPosts(entries: SearchIndexEntry[], query: string, limit = DEFAULT_LIMIT): SearchResult[] {
  const tokens = tokenizeQuery(query);
  if (!tokens.length) return [];
  return entries
    .map((entry) => scoreEntry(entry, tokens))
    .filter((result): result is SearchResult => result !== null)
    .sort(byScoreThenDate)
    .slice(0, limit);
}

function scoreEntry(entry: SearchIndexEntry, tokens: string[]): SearchResult | null {
  const fieldText = normalizedFields(entry);
  let score = 0;
  const matchedFields = new Set<SearchField>();
  for (const token of tokens) {
    const tokenScore = scoreToken(token, fieldText, matchedFields);
    if (tokenScore === 0) return null;
    score += tokenScore;
  }
  const snippet = bodySnippet(entry.body, tokens, entry.description);
  return { entry, score, matchedFields: FIELD_ORDER.filter((field) => matchedFields.has(field)), snippet };
}

function scoreToken(token: string, fieldText: Record<SearchField, string>, matchedFields: Set<SearchField>): number {
  let tokenScore = 0;
  for (const field of FIELD_ORDER) {
    const hits = countWordPrefixHits(fieldText[field], token);
    if (hits === 0) continue;
    matchedFields.add(field);
    tokenScore += FIELD_WEIGHT[field] * (field === "body" ? Math.min(hits, BODY_HITS_CAP) : 1);
  }
  return tokenScore;
}

function countWordPrefixHits(text: string, token: string): number {
  return text.match(wordPrefixPattern(token, "gu"))?.length ?? 0;
}

function normalizedFields(entry: SearchIndexEntry): Record<SearchField, string> {
  return {
    title: normalizeSearchText(entry.title),
    tags: normalizeSearchText(entry.tags.join(" ")),
    description: normalizeSearchText(entry.description),
    body: normalizeSearchText(entry.body),
  };
}

function byScoreThenDate(a: SearchResult, b: SearchResult): number {
  return b.score - a.score || b.entry.date.localeCompare(a.entry.date);
}
