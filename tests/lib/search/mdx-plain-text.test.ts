import { describe, expect, it } from "vitest";
import { mdxKeywords, mdxToPlainText } from "@/lib/search/mdx-plain-text";
import { NETFLIX_MDX } from "./fixtures";

describe("mdxToPlainText", () => {
  const text = mdxToPlainText(NETFLIX_MDX);

  it("drops imports, exports and JSX tags", () => {
    expect(text).not.toMatch(/import |export |ArticleJsonLd|PostDate|canonical/);
  });

  it("keeps headings, paragraphs, list items, quotes, code and table cells as plain words", () => {
    expect(text).toContain("Download Netflix Video With ffmpeg Open the network tab");
    expect(text).toContain("look for the audio stream. See the docs.");
    expect(text).toContain("Merge them First item Second item A quoted tip about Configuração.");
    expect(text).toContain("ffmpeg -i video.mp4 -i audio.m4a -c copy out.mkv");
    expect(text).toContain("Stream Size video 1 GB");
  });

  it("removes markdown markers, image syntax and link targets", () => {
    expect(text).not.toMatch(/[#*_`>|]|\]\(|https:\/\/example\.test|---/);
    expect(text).toContain("a screenshot");
  });

  it("collapses whitespace", () => {
    expect(text).not.toMatch(/\s{2}|\n/);
    expect(mdxToPlainText("")).toBe("");
  });
});

describe("mdxKeywords", () => {
  it("reads double- and single-quoted keywords from the metadata", () => {
    expect(mdxKeywords(NETFLIX_MDX)).toEqual(["Netflix", "ffmpeg", "browser devtools"]);
  });

  it("returns an empty list for posts without keywords", () => {
    expect(mdxKeywords("export const metadata = { title: 'x' };")).toEqual([]);
  });
});
