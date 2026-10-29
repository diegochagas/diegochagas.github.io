import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    // Component tests opt into jsdom with a `// @vitest-environment jsdom` header.
    environment: "node",
  },
});
