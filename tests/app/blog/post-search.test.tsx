// @vitest-environment jsdom
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { PostSearch } from "@/app/blog/search/post-search";
import { SAMPLE_INDEX } from "../../lib/search/fixtures";

const push = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));

const loadSampleIndex = async () => SAMPLE_INDEX;

async function openSearch(loadIndex = loadSampleIndex) {
  const user = userEvent.setup();
  render(<PostSearch loadIndex={loadIndex} />);
  await user.click(screen.getByRole("button", { name: /search/i }));
  return user;
}

afterEach(() => {
  cleanup();
  push.mockReset();
});

describe("PostSearch", () => {
  it("opens a focused input and loads the index only after opening", async () => {
    const loadIndex = vi.fn(loadSampleIndex);
    render(<PostSearch loadIndex={loadIndex} />);
    expect(loadIndex).not.toHaveBeenCalled();
    expect(screen.queryByRole("search")).toBeNull();

    await userEvent.setup().click(screen.getByRole("button", { name: /search/i }));
    expect(document.activeElement).toBe(screen.getByRole("searchbox", { name: "Search posts" }));
    await waitFor(() => expect(loadIndex).toHaveBeenCalledTimes(1));
    expect(screen.getByText("Type to search")).toBeTruthy();
  });

  it("shows ranked results as you type, with highlighted terms and a snippet", async () => {
    const user = await openSearch();
    await user.type(screen.getByRole("searchbox"), "ffmpeg");

    const links = await screen.findAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/blog/netflix-download-ffmpeg",
      "/blog/linux-mint-setup",
    ]);
    expect(screen.getByText("2 posts")).toBeTruthy();
    expect(screen.getAllByText("ffmpeg", { selector: "mark" }).length).toBeGreaterThan(0);
    expect(links[1].textContent).toContain("installs ffmpeg, GIMP and Kdenlive");
  });

  it("tells when nothing matches", async () => {
    const user = await openSearch();
    await user.type(screen.getByRole("searchbox"), "zzzz");
    expect(await screen.findByText("No posts match")).toBeTruthy();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("navigates to the first result on Enter and closes on Escape", async () => {
    const user = await openSearch();
    await user.type(screen.getByRole("searchbox"), "mint{Enter}");
    expect(push).toHaveBeenCalledWith("/blog/linux-mint-setup");
    expect(screen.queryByRole("search")).toBeNull();

    await user.click(screen.getByRole("button", { name: /search/i }));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("search")).toBeNull();
  });

  it("closes on a click outside the panel", async () => {
    const user = await openSearch();
    await user.click(document.body);
    expect(screen.queryByRole("search")).toBeNull();
  });

  it("reports when the index cannot be loaded", async () => {
    await openSearch(async () => {
      throw new Error("offline");
    });
    expect(await screen.findByText("Search is unavailable right now")).toBeTruthy();
  });
});
