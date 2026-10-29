import { KeyboardEvent, RefObject } from "react";
import type { PostSearchState } from "./use-post-search";
import { SearchResultItem } from "./search-result-item";

interface SearchPanelProps {
  search: PostSearchState;
  inputRef: RefObject<HTMLInputElement | null>;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onNavigate: () => void;
}

export function SearchPanel({ search, inputRef, onKeyDown, onNavigate }: SearchPanelProps) {
  const { query, setQuery, results, status } = search;
  return (
    <div
      id="post-search-panel"
      role="search"
      className="absolute left-0 right-0 top-full mt-3 z-50 rounded-lg border border-zinc-200 bg-white shadow-xl p-2"
    >
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search posts by title, tag or text"
        aria-label="Search posts"
        aria-controls="post-search-results"
        autoComplete="off"
        className="w-full rounded-md border border-zinc-200 px-3 py-2.5 text-base outline-none focus:border-gray-900"
      />
      <p className="px-3 pt-2 text-xs uppercase tracking-[0.2em] text-zinc-500" aria-live="polite">
        {statusLine(status, query, results.length)}
      </p>
      <ul id="post-search-results" className="mt-1 max-h-[60vh] overflow-y-auto">
        {results.map((result) => (
          <SearchResultItem key={result.entry.slug} result={result} query={query} onNavigate={onNavigate} />
        ))}
      </ul>
    </div>
  );
}

function statusLine(status: PostSearchState["status"], query: string, count: number): string {
  if (status === "loading") return "Loading posts…";
  if (status === "error") return "Search is unavailable right now";
  if (!query.trim()) return "Type to search";
  if (count === 0) return "No posts match";
  return count === 1 ? "1 post" : `${count} posts`;
}
