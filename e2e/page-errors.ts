import type { Page } from "@playwright/test";

/** Collects console errors, page errors and failed requests so a test can assert none happened. */
export function collectPageErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("requestfailed", (request) => errors.push(`${request.url()} ${request.failure()?.errorText}`));
  return errors;
}
