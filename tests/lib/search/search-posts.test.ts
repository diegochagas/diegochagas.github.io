import { describe, expect, it } from "vitest";
import { searchPosts } from "@/lib/search/search-posts";
import { SAMPLE_INDEX, entry } from "./fixtures";

const slugs = (query: string, limit?: number) => searchPosts(SAMPLE_INDEX, query, limit).map((r) => r.entry.slug);

describe("searchPosts", () => {
  it("returns nothing for an empty or whitespace query", () => {
    expect(searchPosts(SAMPLE_INDEX, "")).toEqual([]);
    expect(searchPosts(SAMPLE_INDEX, "   ")).toEqual([]);
  });

  it("finds posts by title, tag and body text, title matches first", () => {
    expect(slugs("ffmpeg")).toEqual(["netflix-download-ffmpeg", "linux-mint-setup"]);
    expect(slugs("arch")).toEqual(["linux-mint-setup"]);
    expect(slugs("kdenlive")).toEqual(["linux-mint-setup"]);
  });

  it("requires every word of the query to match somewhere", () => {
    expect(slugs("ffmpeg mint")).toEqual(["linux-mint-setup"]);
    expect(slugs("ffmpeg nothing-here")).toEqual([]);
  });

  it("ignores case and accents in both the query and the posts", () => {
    expect(slugs("CONFIGURACAO")).toEqual(["linux-mint-setup"]);
    expect(slugs("configuração")).toEqual(["linux-mint-setup"]);
  });

  it("matches word prefixes while typing", () => {
    expect(slugs("netf")).toEqual(["netflix-download-ffmpeg"]);
    expect(slugs("etflix")).toEqual([]);
  });

  it("reports the matched fields strongest first", () => {
    const [result] = searchPosts(SAMPLE_INDEX, "ffmpeg");
    expect(result.matchedFields).toEqual(["title", "tags", "description", "body"]);
    expect(searchPosts(SAMPLE_INDEX, "kdenlive")[0].matchedFields).toEqual(["body"]);
  });

  it("caps repeated body hits so a long post cannot outrank a title match", () => {
    const [first] = searchPosts(SAMPLE_INDEX, "gimp");
    expect(first.entry.slug).toBe("gimp-setup");
    expect(first.score).toBe(10 + 3 + 5);
  });

  it("breaks score ties by newest post first and honours the limit", () => {
    const tied = [
      entry({ slug: "old", title: "Docker", date: "2024-01-01" }),
      entry({ slug: "new", title: "Docker", date: "2025-01-01" }),
      entry({ slug: "newest", title: "Docker", date: "2026-01-01" }),
    ];
    expect(searchPosts(tied, "docker").map((r) => r.entry.slug)).toEqual(["newest", "new", "old"]);
    expect(searchPosts(tied, "docker", 2)).toHaveLength(2);
  });

  it("gives each result a snippet around the body match, or the description otherwise", () => {
    expect(searchPosts(SAMPLE_INDEX, "kdenlive")[0].snippet).toContain("Kdenlive");
    expect(searchPosts(SAMPLE_INDEX, "arch")[0].snippet).toBe(SAMPLE_INDEX[1].description);
  });
});
