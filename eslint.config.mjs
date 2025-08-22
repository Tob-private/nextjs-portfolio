import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Convert all warnings to errors
eslintConfig.forEach((config) => {
  if (config.rules) {
    for (const [rule, setting] of Object.entries(config.rules)) {
      if (setting === "warn" || setting === 1) {
        config.rules[rule] = "error";
      } else if (Array.isArray(setting) && (setting[0] === "warn" || setting[0] === 1)) {
        config.rules[rule][0] = "error";
      }
    }
  }
});

export default eslintConfig;
