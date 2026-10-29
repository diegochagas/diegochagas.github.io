import { promises as fs } from "node:fs";
import path from "node:path";
import { blogPosts } from "@/app/data/blog-posts";
import { buildSearchIndex } from "@/lib/search/build-search-index";

// The index is built once at `next build` from the MDX sources and served as a static JSON
// file, so the search needs no service and no runtime file access.
export const dynamic = "force-static";

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");

function readBlogPostSource(slug: string): Promise<string> {
  return fs.readFile(path.join(BLOG_DIR, slug, "page.mdx"), "utf8");
}

export async function GET(): Promise<Response> {
  const index = await buildSearchIndex(blogPosts, readBlogPostSource);
  return Response.json(index);
}
