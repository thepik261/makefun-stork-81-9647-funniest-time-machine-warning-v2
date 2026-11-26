// Funniest Time Machine Warning Label — make.fun entry.
// Pure Node stdlib. Writes one warning label (<=120 chars) to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt when set, for local tests)
// and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label: a genuine-looking safety notice. The real hazard is
// warning your past self — a classic paradox — and the punch lands in
// the last few words: the reason he never listens is that he is you.
const LABEL =
  "WARNING: Do not warn your past self about anything. He never listens, and now you know why.";

// The gate rejects anything over 120 characters, so refuse to emit
// an over-long label rather than submitting an invalid entry.
if ([...LABEL].length > 120 || LABEL.trim().length === 0) {
  throw new Error("Label must be 1-120 non-blank characters.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
console.log(LABEL);
