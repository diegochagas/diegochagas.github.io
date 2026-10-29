import { mdxKeywords, mdxToPlainText } from "./mdx-plain-text";
import type { SearchIndexEntry } from "./search-types";

/** The list entry a post already has in src/app/data/blog-posts.ts. */
export interface IndexedPostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
}

/** Reads the raw page.mdx source of one post; injected so tests pass fixtures instead of files. */
export type ReadPostSource = (slug: string) => Promise<string>;

/**
 * Builds the search index from the post list plus each post's MDX source.
 * Titles, descriptions and dates come from the list (the same source the /blog page renders),
 * tags and body text from the MDX file.
 *
 * Example: `await buildSearchIndex(blogPosts, (slug) => fs.readFile(...))`
 */
export async function buildSearchIndex(
  posts: IndexedPostSummary[],
  readPostSource: ReadPostSource,
): Promise<SearchIndexEntry[]> {
  return Promise.all(posts.map((post) => indexOnePost(post, readPostSource)));
}

async function indexOnePost(post: IndexedPostSummary, readPostSource: ReadPostSource): Promise<SearchIndexEntry> {
  const source = await readPostSource(post.slug);
  const body = withoutLeadingTitle(mdxToPlainText(source), post.title);
  if (!body) {
    throw new Error(`blog post "${post.slug}" has an empty body: expected markdown text in its page.mdx`);
  }
  return { ...post, tags: mdxKeywords(source), body };
}

// Posts open with an H1 equal to the title; dropping it keeps snippets from repeating the title.
function withoutLeadingTitle(body: string, title: string): string {
  return body.startsWith(title) ? body.slice(title.length).trim() : body;
}
