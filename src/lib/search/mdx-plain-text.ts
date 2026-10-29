// Turns a blog page.mdx source into searchable plain text at build time.
// Posts follow one shape (see src/app/blog/hello-world/page.mdx): ESM imports, `export const`
// metadata, one JSX <ArticleJsonLd/> block, then markdown. Nothing here needs a full MDX parse.

const IMPORT_LINE = /^import\s[^\n]*\n/gm;
// `export const x = ...;` may span lines (metadata object): consume up to the first `;` at line end.
const EXPORT_BLOCK = /^export\s+const\s[\s\S]*?;\s*$/gm;
const JSX_TAG = /<\/?[A-Za-z][^>]*>/g;
const FENCED_CODE_MARKERS = /^```[^\n]*$/gm;
const INLINE_CODE_MARKERS = /`/g;
const HEADING_MARKERS = /^#{1,6}\s+/gm;
const BLOCKQUOTE_MARKERS = /^>\s?/gm;
const LIST_MARKERS = /^\s*(?:[-*+]|\d+\.)\s+/gm;
const EMPHASIS_MARKERS = /(\*\*|__|\*|_)(?=\S)([^*_]*?\S)\1/g;
const IMAGES = /!\[([^\]]*)\]\([^)]*\)/g;
const LINKS = /\[([^\]]+)\]\([^)]*\)/g;
// Horizontal rules and table separator cells (`---`, `:---:`) once the pipes are gone.
const DASH_RULES = /(^|\s):?-{3,}:?(?=\s|$)/gm;
const TABLE_PIPES = /^\|.*\|\s*$/gm;
const WHITESPACE = /\s+/g;
const KEYWORDS_ARRAY = /keywords\s*:\s*\[([\s\S]*?)\]/;
const QUOTED_STRING = /"([^"]*)"|'([^']*)'/g;

/**
 * Plain text of a post's MDX source, with markdown and JSX syntax removed and whitespace collapsed.
 *
 * Example: `mdxToPlainText('# Hi\n\nSee **ffmpeg**.')` → `"Hi See ffmpeg."`
 */
export function mdxToPlainText(source: string): string {
  const withoutCode = source.replace(IMPORT_LINE, "").replace(EXPORT_BLOCK, "").replace(JSX_TAG, "");
  const withoutMarkdown = stripMarkdownSyntax(withoutCode);
  return withoutMarkdown.replace(WHITESPACE, " ").trim();
}

function stripMarkdownSyntax(text: string): string {
  return text
    .replace(FENCED_CODE_MARKERS, "")
    .replace(INLINE_CODE_MARKERS, "")
    .replace(IMAGES, "$1")
    .replace(LINKS, "$1")
    .replace(HEADING_MARKERS, "")
    .replace(BLOCKQUOTE_MARKERS, "")
    .replace(LIST_MARKERS, "")
    .replace(TABLE_PIPES, (row) => row.replaceAll("|", " "))
    .replace(DASH_RULES, "$1")
    .replace(EMPHASIS_MARKERS, "$2");
}

/**
 * The `keywords: [...]` strings of a post's exported metadata, or `[]` when the post has none.
 *
 * Example: `mdxKeywords('keywords: ["local AI", "Ollama"],')` → `["local AI", "Ollama"]`
 */
export function mdxKeywords(source: string): string[] {
  const arrayMatch = KEYWORDS_ARRAY.exec(source);
  if (!arrayMatch) return [];
  return [...arrayMatch[1].matchAll(QUOTED_STRING)].map((match) => match[1] ?? match[2]);
}
