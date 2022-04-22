import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // use `describe, it, test` without importing them
        environment: "jsdom",
        setupFiles: "./test/setup.ts",
    },
});
