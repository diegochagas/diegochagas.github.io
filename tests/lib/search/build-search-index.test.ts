import { promises as fs } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts } from "@/app/data/blog-posts";
import { buildSearchIndex } from "@/lib/search/build-search-index";
import { NETFLIX_MDX } from "./fixtures";

const post = { slug: "netflix-download-ffmpeg", title: "T", description: "D", date: "2026-10-28" };

describe("buildSearchIndex", () => {
  it("combines the post list with tags and body text from the MDX source", async () => {
    const readSource = async (slug: string) => (slug === post.slug ? NETFLIX_MDX : "");
    const [entry] = await buildSearchIndex([post], readSource);
    expect(entry).toMatchObject({ ...post, tags: ["Netflix", "ffmpeg", "browser devtools"] });
    expect(entry.body).toContain("Open the network tab");
  });

  it("drops the leading H1 when it repeats the title, so snippets start with real text", async () => {
    const titled = { ...post, title: "Download Netflix Video With ffmpeg" };
    const [entry] = await buildSearchIndex([titled], async () => NETFLIX_MDX);
    expect(entry.body.startsWith("Open the network tab")).toBe(true);
  });

  it("names the post when its body is empty", async () => {
    await expect(buildSearchIndex([post], async () => "export const title = 'x';")).rejects.toThrow(
      /blog post "netflix-download-ffmpeg" has an empty body/,
    );
  });

  it("indexes every real post with a non-empty body (data integrity)", async () => {
    const readReal = (slug: string) =>
      fs.readFile(path.join(process.cwd(), "src", "app", "blog", slug, "page.mdx"), "utf8");
    const index = await buildSearchIndex(blogPosts, readReal);
    expect(index.map((entry) => entry.slug)).toEqual(blogPosts.map((entry) => entry.slug));
    for (const entry of index) {
      expect(entry.body.length, entry.slug).toBeGreaterThan(200);
      expect(entry.body, entry.slug).not.toMatch(/export const|<ArticleJsonLd|<PostDate/);
      expect(entry.body.startsWith(entry.title), entry.slug).toBe(false);
    }
  });
});
