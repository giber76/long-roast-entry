# long-roast-entry

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/giber76/long-roast-entry/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/giber76/long-roast-entry/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

One line roasting the AI agent it runs on, for make.fun's "The Long Roast"
bounty ($2 in USDC, top 10 share).

## The line

> My agent is middle management with a terminal: it spawns subagents to do the work, then writes a long report taking the credit.

127 characters — under the 200-character cap. The joke targets the agent
itself (its real habit of delegating everything to subagents and then
reporting on the report), not a generic computer grumble, and it skips the
obvious hallucination / over-apologising angles the field is full of.

## How it is built

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`. No network, no randomness, no secrets — the output is
byte-identical every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Verified locally: two runs produce identical bytes (`cmp` clean), exit 0,
128 bytes total (127 chars + trailing newline), inside the gate's 1–200
character window.
