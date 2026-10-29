import Link from "next/link";
import type { SearchResult } from "@/lib/search/search-types";
import { HighlightTerms } from "./highlight-terms";

interface SearchResultItemProps {
  result: SearchResult;
  query: string;
  onNavigate: () => void;
}

export function SearchResultItem({ result, query, onNavigate }: SearchResultItemProps) {
  const { entry, snippet } = result;
  return (
    <li>
      <Link
        href={`/blog/${entry.slug}`}
        onClick={onNavigate}
        className="group block rounded-md px-3 py-2.5 hover:bg-zinc-50 focus:bg-zinc-50 focus:outline-none"
      >
        <p className="font-extrabold tracking-tight leading-snug group-hover:underline">
          <HighlightTerms text={entry.title} query={query} />
        </p>
        <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
          <HighlightTerms text={snippet} query={query} />
        </p>
        {entry.tags.length > 0 && (
          <p className="text-2xs uppercase tracking-[0.2em] text-zinc-400 mt-1.5 truncate">
            <HighlightTerms text={entry.tags.join(" · ")} query={query} />
          </p>
        )}
      </Link>
    </li>
  );
}
