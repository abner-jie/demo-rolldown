import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: "src/main.ts",
    output: {
      format: "esm",
    },
  },
  {
    input: "src/main.ts",
    output: {
      format: "iife",
      dir: "dist/worker",
    },
  },
]);
