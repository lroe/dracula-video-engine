# Sketch explainer skill — Dracula edition

This folder contains a complete, tested playbook for turning a voiceover into
the hand-drawn explainer style of **“How Jobs Actually Disappear”**, recoloured
to the **Dracula** palette.

| Path | What it is |
|---|---|
| `SKILL.md` | The skill: measured style DNA, eye-guidance rules, VO→storyboard pipeline, six layout templates, motion/sync timings, Remotion code patterns and QA. |
| `starter/` | A working Remotion project (1920×1080, 30 fps) with two templates: myth bubble + role/tasks. `npm install && npm run studio`. |
| `reference/` | Composition stills from the original film, plus `14`/`15` and `palette.png` showing the Dracula colour target. |
| `How Jobs Actually Disappear_1080p.mp4` | The local source reference used for analysis (not committed). |

## Quick start

```bash
cp -R starter ~/my-sketch-video
cd ~/my-sketch-video
npm install
npm run studio
```

Then read `SKILL.md` §4 for the voiceover → word timestamps → storyboard
pipeline.

## The one-paragraph version

The reference composition discipline, Dracula colour: `#282A36` page, `#F8F8F2`
ink, one neon accent per scene. Huge doodles (40–65 % of frame height), one
focal point, 85–95 % empty background, 3–6 words per caption. Draw-on,
type-on, pop, pan, dim. Sync every event to a spoken word, 0.15–0.25 s before
the syllable. Five cuts per minute, not fifty. Stillness is the style.
