import { Fragment } from "react";
import { tokenizeQuery } from "@/lib/search/search-text";

const REGEX_SPECIALS = /[.*+?^${}()|[\]\\]/g;

/** `text` with every query word wrapped in <mark>, case-insensitive. */
export function HighlightTerms({ text, query }: { text: string; query: string }) {
  const tokens = tokenizeQuery(query);
  if (!tokens.length) return <>{text}</>;
  const pattern = new RegExp(`(${tokens.map((token) => token.replace(REGEX_SPECIALS, "\\$&")).join("|")})`, "giu");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
