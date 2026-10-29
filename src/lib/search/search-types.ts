/** One blog post as stored in the client-side search index (served by /blog/search-index). */
export interface SearchIndexEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** The post's `metadata.keywords`, used as tags. Empty when the post has none. */
  tags: string[];
  /** The MDX body as plain text: no imports/exports, JSX or markdown syntax. */
  body: string;
}

/** Where a query token matched inside an entry, from strongest to weakest signal. */
export type SearchField = "title" | "tags" | "description" | "body";

export interface SearchResult {
  entry: SearchIndexEntry;
  score: number;
  /** Fields where at least one query token matched, strongest first. */
  matchedFields: SearchField[];
  /** A short excerpt of the body around the first match, or the description when the body has none. */
  snippet: string;
}
