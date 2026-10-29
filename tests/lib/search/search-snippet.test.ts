import { describe, expect, it } from "vitest";
import { bodySnippet } from "@/lib/search/search-snippet";

const words = (count: number, prefix = "w") => Array.from({ length: count }, (_, i) => `${prefix}${i}`).join(" ");

describe("bodySnippet", () => {
  it("returns the fallback when no token occurs in the body", () => {
    expect(bodySnippet("nothing to see", ["ffmpeg"], "the description")).toBe("the description");
  });

  it("returns the whole body when it is short", () => {
    expect(bodySnippet("one two ffmpeg three", ["ffmpeg"], "x")).toBe("one two ffmpeg three");
  });

  it("cuts a window around the first match at word boundaries with ellipses", () => {
    const body = `${words(40)} ffmpeg ${words(40, "z")}`;
    const snippet = bodySnippet(body, ["ffmpeg"], "x");
    expect(snippet).toMatch(/^…w\d+ .* ffmpeg .*z\d+…$/);
    expect(snippet.length).toBeLessThan(160);
  });

  it("uses the earliest match of any token", () => {
    const body = `${words(40)} second ${words(10, "m")} first ${words(40, "z")}`;
    expect(bodySnippet(body, ["first", "second"], "x")).toContain(" second ");
  });

  it("keeps accents in the excerpt when the query has none", () => {
    const body = `${words(40)} a Configuração do Ubuntu ${words(40, "z")}`;
    const snippet = bodySnippet(body, ["configuracao"], "x");
    expect(snippet).toContain("Configuração do Ubuntu");
  });

  it("matches at the very start and very end without ellipses on that side", () => {
    expect(bodySnippet(`ffmpeg ${words(40)}`, ["ffmpeg"], "x")).toMatch(/^ffmpeg .*…$/);
    expect(bodySnippet(`${words(40)} ffmpeg`, ["ffmpeg"], "x")).toMatch(/^….* ffmpeg$/);
  });
});
