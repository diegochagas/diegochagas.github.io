import type { SearchIndexEntry } from "@/lib/search/search-types";

export const SEARCH_INDEX_URL = "/blog/search-index";

/** Loads the static search index built at `next build`. Thrown errors carry the HTTP status. */
export async function fetchSearchIndex(): Promise<SearchIndexEntry[]> {
  const response = await fetch(SEARCH_INDEX_URL);
  if (!response.ok) {
    throw new Error(`search index request failed with status ${response.status}: expected 200 from ${SEARCH_INDEX_URL}`);
  }
  return (await response.json()) as SearchIndexEntry[];
}
