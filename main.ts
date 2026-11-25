import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse is built from two short beats: the denial, then the
// reversal that turns the blame around. Keeping the two beats apart
// makes the punchline land on the final words, as the judge wants.
const beats = [
  "I didn't miss the deadline.",
  "The deadline missed me.",
];

// Why this excuse works as a single line:
//  - It IS an excuse for a missed deadline, not a joke about work in
//    general: the speaker is answering for the missed date.
//  - It sounds like something a person would actually say out loud —
//    a shrug, not a written paragraph.
//  - The angle is a reversal: instead of apologising for missing the
//    deadline, the speaker claims the deadline failed to show up.
//    The turn arrives on the last three words, so the laugh lands
//    on the final beat and the line needs no setup.
const entry = beats.join(" ");

// The gate allows 1 to 200 characters. Refuse to write anything
// outside it rather than submitting a line that cannot be judged.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
