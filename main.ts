import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "One star. Shows up late every night, does nothing but reflect the Sun's work, and still takes credit for the whole sky.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
