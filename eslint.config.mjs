import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import cleanCode from "./eslint-clean-code.mjs";

// Flat config: ESLint 10 dropped .eslintrc and Next 16 dropped `next lint`, so `eslint .` is the lint command.
const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts", "playwright-report/**", "test-results/**"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  cleanCode,
  {
    files: ["**/*.{ts,tsx}"],
    rules: { "@typescript-eslint/no-explicit-any": "error" },
  },
];

export default eslintConfig;
