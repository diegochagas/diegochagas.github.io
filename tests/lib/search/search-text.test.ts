import { describe, expect, it } from "vitest";
import { normalizeSearchText, tokenizeQuery, wordPrefixPattern } from "@/lib/search/search-text";

describe("search text helpers", () => {
  it("normalises case and accents", () => {
    expect(normalizeSearchText("Configuração FFmpeg")).toBe("configuracao ffmpeg");
  });

  it("tokenises on anything that is not a letter or digit", () => {
    expect(tokenizeQuery("  Mint, Linux! 3D&T ")).toEqual(["mint", "linux", "3d", "t"]);
    expect(tokenizeQuery("   ")).toEqual([]);
  });

  it("matches a token only at the start of a word and escapes regex characters", () => {
    expect(wordPrefixPattern("ffm").test("run ffmpeg")).toBe(true);
    expect(wordPrefixPattern("mpeg").test("run ffmpeg")).toBe(false);
    expect(wordPrefixPattern("c++").test("in c++ and")).toBe(true);
  });
});
