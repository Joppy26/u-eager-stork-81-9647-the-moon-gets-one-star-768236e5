import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "One star. Arrives late, borrows all its light from the Sun, and still hogs the night sky. Would not orbit again.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
