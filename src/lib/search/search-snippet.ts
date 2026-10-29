import { wordPrefixPattern } from "./search-text";

const SNIPPET_RADIUS = 70;
const ELLIPSIS = "…";
const COMBINING_MARKS = /[̀-ͯ]/g;

/**
 * A short excerpt of `body` around the first token that occurs in it, cut at word boundaries.
 * Falls back to `fallback` (the post description) when no token occurs in the body.
 *
 * Example: `bodySnippet("one two ffmpeg three", ["ffmpeg"], "desc")` → `"one two ffmpeg three"`
 */
export function bodySnippet(body: string, tokens: string[], fallback: string): string {
  const position = firstTokenPosition(body, tokens);
  if (position < 0) return fallback;
  const start = Math.max(0, position - SNIPPET_RADIUS);
  const end = Math.min(body.length, position + SNIPPET_RADIUS);
  return addEllipses(body, trimToWords(body, start, end));
}

// Matching runs on the normalised body (accents stripped, so it is shorter than the original);
// the offset map turns a normalised index back into an index of the original text.
function firstTokenPosition(body: string, tokens: string[]): number {
  const { normalized, originalOffsets } = normalizedWithOffsets(body);
  const positions = tokens
    .map((token) => ({ token, match: wordPrefixPattern(token).exec(normalized) }))
    .filter((hit): hit is { token: string; match: RegExpExecArray } => hit.match !== null)
    .map(({ token, match }) => originalOffsets[match.index + match[0].length - token.length]);
  return positions.length ? Math.min(...positions) : -1;
}

function normalizedWithOffsets(body: string): { normalized: string; originalOffsets: number[] } {
  let normalized = "";
  const originalOffsets: number[] = [];
  for (let index = 0; index < body.length; index += 1) {
    const normalizedChar = body[index].normalize("NFD").replace(COMBINING_MARKS, "").toLowerCase();
    normalized += normalizedChar;
    for (let unit = 0; unit < normalizedChar.length; unit += 1) originalOffsets.push(index);
  }
  return { normalized, originalOffsets };
}

function trimToWords(body: string, start: number, end: number): [number, number] {
  const wordStart = start === 0 ? 0 : body.indexOf(" ", start) + 1;
  const lastSpace = end === body.length ? end : body.lastIndexOf(" ", end);
  return [wordStart, lastSpace > wordStart ? lastSpace : end];
}

function addEllipses(body: string, [start, end]: [number, number]): string {
  const prefix = start > 0 ? ELLIPSIS : "";
  const suffix = end < body.length ? ELLIPSIS : "";
  return `${prefix}${body.slice(start, end).trim()}${suffix}`;
}
