import { useEffect, useMemo, useRef, useState } from "react";
import { searchPosts } from "@/lib/search/search-posts";
import type { SearchIndexEntry, SearchResult } from "@/lib/search/search-types";

export type SearchIndexStatus = "idle" | "loading" | "ready" | "error";

export interface PostSearchState {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  status: SearchIndexStatus;
}

/**
 * Query state plus ranked results. The index is fetched once, the first time `enabled` is true
 * (when the search panel opens), so the blog pages never pay for it unless search is used.
 *
 * Example: `const { query, setQuery, results } = usePostSearch(isOpen, fetchSearchIndex)`
 */
export function usePostSearch(enabled: boolean, loadIndex: () => Promise<SearchIndexEntry[]>): PostSearchState {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchIndexEntry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const requested = useRef(false);

  useEffect(() => {
    if (!enabled || requested.current) return;
    requested.current = true;
    loadIndex()
      .then(setIndex)
      .catch(() => setFailed(true));
  }, [enabled, loadIndex]);

  const results = useMemo(() => (index ? searchPosts(index, query) : []), [index, query]);
  return { query, setQuery, results, status: indexStatus(enabled, index, failed) };
}

function indexStatus(enabled: boolean, index: SearchIndexEntry[] | null, failed: boolean): SearchIndexStatus {
  if (index) return "ready";
  if (failed) return "error";
  return enabled ? "loading" : "idle";
}
