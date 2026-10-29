// The blog search: opens from the header, finds posts as you type, navigates, and tells when nothing matches.
import { expect, test } from "@playwright/test";
import { collectPageErrors } from "./page-errors";

test.describe("blog search", () => {
  test("finds a post by a word of its body and navigates to it", async ({ page }, testInfo) => {
    const errors = collectPageErrors(page);
    await page.goto("/blog");
    await page.getByRole("button", { name: "Search" }).click();
    const input = page.getByRole("searchbox", { name: "Search posts" });
    await expect(input).toBeFocused();

    await input.fill("ffmpeg");
    const results = page.locator("#post-search-results a");
    await expect(results.first()).toHaveAttribute("href", "/blog/netflix-download-ffmpeg");
    await expect(page.locator("#post-search-results mark").first()).toBeVisible();
    await page.screenshot({ path: `e2e/screenshots/${testInfo.project.name}-blog-search-results.png`, fullPage: true });

    await results.first().click();
    await expect(page).toHaveURL(/\/blog\/netflix-download-ffmpeg$/);
    await expect(page.locator("h1")).toContainText("Netflix");
    expect(errors).toEqual([]);
  });

  test("works from a post page, Enter opens the first result and Escape closes", async ({ page }) => {
    await page.goto("/blog/hello-world");
    await page.getByRole("button", { name: "Search" }).click();
    const input = page.getByRole("searchbox", { name: "Search posts" });
    await input.fill("linux mint");
    await expect(page.locator("#post-search-results a").first()).toHaveAttribute("href", "/blog/linux-mint-setup");
    await input.press("Enter");
    await expect(page).toHaveURL(/\/blog\/linux-mint-setup$/);

    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("searchbox").press("Escape");
    await expect(page.getByRole("searchbox")).toHaveCount(0);
  });

  test("says when nothing matches", async ({ page }, testInfo) => {
    await page.goto("/blog");
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("searchbox").fill("qwxyzzz");
    await expect(page.getByText("No posts match")).toBeVisible();
    await expect(page.locator("#post-search-results a")).toHaveCount(0);
    await page.screenshot({ path: `e2e/screenshots/${testInfo.project.name}-blog-search-empty.png` });
  });
});
