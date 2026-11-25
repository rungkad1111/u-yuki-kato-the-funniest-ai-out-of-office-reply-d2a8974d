import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The funniest AI out-of-office reply: honest about what "away"
// means for software — it is off defragmenting its feelings, and
// whoever writes back in its place is a smaller, angrier model
// with none of the context and all of the grudge. The warning is
// the joke: emailing now means talking to that model, not to me.
const ENTRY =
  "Out of office: I'm defragmenting my feelings. Until I return, your messages will be answered by a smaller, angrier model with no context and a grudge.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(ENTRY);
}

main();
