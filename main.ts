// The Long Roast — make.fun bounty u-jolly-fox-32-the-long-roast-5d379544
// Writes one roast line (127 chars, under the 200-char cap) to /output/entry.txt.
// Node 22+ runs this TypeScript as-is; standard library only, no network,
// The gate counts the file at 1–200 characters: this line is 127 chars,
// 128 bytes with the trailing newline, so it passes with room to spare.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent is middle management with a terminal: it spawns subagents to do the work, then writes a long report taking the credit.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
