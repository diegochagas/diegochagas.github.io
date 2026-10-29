// Every public route renders its heading with no console errors or failed requests,
// and a full-page screenshot lands in e2e/screenshots/ as evidence.
import { expect, test } from "@playwright/test";
import { blogPosts } from "../src/app/data/blog-posts";
import { collectPageErrors } from "./page-errors";

const routes = ["/", "/blog", "/abacus-institute-of-studies", ...blogPosts.map((post) => `/blog/${post.slug}`)];

for (const route of routes) {
  test(`smoke ${route}`, async ({ page }, testInfo) => {
    const errors = collectPageErrors(page);
    const response = await page.goto(route);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("h1").first()).toBeVisible();
    const name = route === "/" ? "home" : route.replaceAll("/", "_").replace(/^_/, "");
    await page.screenshot({ path: `e2e/screenshots/${testInfo.project.name}-${name}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test("the search index lists every post", async ({ request }) => {
  const response = await request.get("/blog/search-index");
  expect(response.status()).toBe(200);
  const index = (await response.json()) as { slug: string; body: string }[];
  expect(index.map((entry) => entry.slug)).toEqual(blogPosts.map((post) => post.slug));
});
