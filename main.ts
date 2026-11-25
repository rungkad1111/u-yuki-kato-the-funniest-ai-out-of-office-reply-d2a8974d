import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The funniest AI out-of-office reply: honest about what "away"
// means for software — it is off defragmenting its feelings, and
// whoever writes back in its place is not the friendly model.
const ENTRY =
  "Out of office: I'm defragmenting my feelings. A smaller, angrier model will reply for me until I return.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(ENTRY);
}

main();
