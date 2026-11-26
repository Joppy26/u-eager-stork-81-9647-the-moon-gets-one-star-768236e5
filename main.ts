import { mkdirSync, writeFileSync } from "node:fs";
// Filed under: celestial objects with no manners.
const LINE = "One star. A night light that never pays its own electric bill and still expects applause.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
