# Sketch explainer starter (Remotion)

A tested, minimal implementation of the visual language in `SKILL.md`:
huge hand-drawn doodles, a **Dracula** dark page (`#282A36`), off-white ink,
neon accents, sparse typewritten captions and word-level motion.

## Run

```bash
npm install
npm run studio          # preview
npm run render          # 12s 1920×1080 demo → out/video.mp4
npm run still           # a 3s still → out/still.jpg
```

## What is in the demo

- `src/scenes/MythBubble.tsx` — person + huge thought cloud, robot replaces a
  worker, `BANG!`, caption. 6 s.
- `src/scenes/RoleTasks.tsx` — “a bank teller” + desk + brace + task pills. 6 s.

## Files worth knowing

- `storyboard.example.json` — the reference film's 6-scene beat map with
  absolute times, ready to adapt.
- `src/words.example.json` — the word-timestamp format used by `lib/words.ts`.
- `src/theme.ts` — every Dracula token. Change colours here, nowhere else.
- `reference/` (one level up) — composition stills and the Dracula palette.

## Make it your video

1. Put your voiceover at `public/vo.wav` (or `.mp3`).
2. Generate `words.json` (see `SKILL.md` §4.1) and put it in `src/`.
3. Replace the two `<Sequence>` blocks in `src/Video.tsx` with your scene list.
4. Add `<Audio src={staticFile('vo.wav')} />` inside the composition.
5. Set `durationInFrames` in `src/Root.tsx` to `Math.ceil(duration * fps)`.

The fonts are bundled in `public/fonts`; no network is needed at render time.
Everything is flat SVG/HTML on Dracula `#282A36` — no images, no gradients, no
shadows except the soft ground shadow. The palette lives in `src/theme.ts`.
