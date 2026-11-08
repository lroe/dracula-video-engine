---
name: sketch-explainer
description: Turn a voiceover into a 16:9 hand-drawn explainer in Remotion, in the exact composition and motion language of "How Jobs Actually Disappear" but recoloured to the Dracula palette — dark #282A36 pages, off-white ink, neon accents, huge doodles, sparse handwritten captions, word-level sync, and calm eye guidance. Use when the user supplies a VO/script and asks for a doodle, sketch, whiteboard, or hand-drawn explainer, or asks to recreate this reference style in Dracula colours.
---

# Sketch Explainer — the Dracula Remotion playbook

> **Composition reference:** `How Jobs Actually Disappear_1080p.mp4` — 60.0 s,
> 1920×1080, 60 fps, VP9/AAC.
>
> **Palette:** Dracula (official). Dark pages, off-white ink, neon accents.
>
> **What this skill produces:** a 45–90 s, 16:9 explainer where hand-drawn
> doodles, a few handwritten words, and a voiceover do all the work. Every
> visual event lands on a spoken word.

> **Colour note:** stills `01`–`13` and `ref-contact.jpg` come from the
> original white-palette film. Read them for **composition, scale, timing and
> eye-guidance only**; do **not** copy their colours. Every colour instruction
> here is Dracula. `reference/14-dracula-look.jpg`,
> `reference/15-dracula-myth.jpg` and `reference/palette.png` are the colour
> target.

Read §1–§3 once. Then follow §4–§9 in order. Copy `starter/` to start coding.
Reference stills and the Dracula palette are in `reference/`.

---

## 1. Output contract

| Item | Default |
|---|---|
| Canvas | 1920×1080, 16:9 |
| Frame rate | 30 fps (60 fps only if the brief demands it) |
| Length | VO length + 0.5–1.0 s tail |
| Scenes | 6–8 per 60 s; one idea per scene |
| Empty space | Flat `#282A36` background on 85–95 % of every frame |
| On-screen words | ~25–35 per 60 s (not counting 4–6 task pills) |
| Colours | Dracula `#282A36` background + `#F8F8F2` ink + **one** neon accent per scene (max 3 hues) |
| Type | 2 fonts only: Caveat Brush + Patrick Hand |
| Motion | draw-on, type-on, pop, pan, dim — nothing loops |
| Audio | VO is the master clock; optional music bed at −24 LUFS under it |
| No | logos, intro cards, gradients, textures, drop shadows, stock icons |

The reference has **no intro and no outro**. Frame 0 is already a drawing.
The first spoken idea starts within ~5 s. The last frame holds the final
example, then cuts to the background.

---

## 2. The style DNA, measured

### 2.1 Density (this is the secret)

Ink/colour coverage of the reference frames:

| Frame | Coverage | What is on screen |
|---|---:|---|
| Bank teller | **3.4 %** | character + desk + brace + 5 pills |
| Three-panel strip | **8.5 %** | 3 panels + 2 captions |
| Iceberg | **13.8 %** | full-width horizon + 3 labels |
| Job definition | **6.2 %** | one word, one box |

So a normal frame is **86–97 % flat background**. In Dracula that background
is `#282A36`, so the drawing floats in a dark field. If a frame looks
“designed”, it is too full. Delete a prop before shrinking the type.

Content bounding boxes (1920×1080):

| Frame | x-range | y-range | Note |
|---|---|---|---|
| Bank | 215–1520 | 160–948 | 400 px of air on the right |
| Strip | 88–1831 | 152–898 | the only near-full-width layout |
| Job | 739–1180 | 175–740 | only 23 % of the width |
| Iceberg | 95–1824 | 125–939 | horizon touches both edges |

The layouts are **not grid-perfect**. They are intentionally left- or
right-weighted, with a large empty area on the opposite side.

### 2.2 Palette — Dracula

Use the official Dracula colours. Do not invent pastels. The trick to keeping
the calm look with a high-contrast palette is: **fills stay dark, outlines are
off-white, and only the one active idea gets a full-strength neon accent.**

| Token | Hex | Use |
|---|---|---|
| Background | `#282A36` | page, skin, negative space |
| Surface (derived) | `#343746` | raised cards, desk fronts, pill interiors |
| Surface 2 / Current Line | `#44475A` | box fills, robot screens, water mass |
| Ink | `#F8F8F2` | every outline, most text |
| Comment | `#6272A4` | secondary text (“quietly”, “so easy to miss”), brace, hair, robot body |
| Ground | `#44475A` | floor lines |
| Green | `#50FA7B` | people, task pills, positive definitions |
| Red | `#FF5555` | alarm words, “10,000 LAYOFFS” |
| Pink | `#FF79C6` | BANG! burst outline/text, secondary accent |
| Cyan | `#8BE9FD` | waterline, robot screen detail, tech |
| Purple | `#BD93F9` | primary character, active definition |
| Orange | `#FFB86C` | small wood/parcel accents only (large surfaces stay dark) |
| Yellow | `#F1FA8C` | lit windows, highlights |

Colour semantics:

- **Green** = people, tasks, the positive/definition side.
- **Red** = alarm, bad news, “BANG!”-adjacent emphasis.
- **Comment blue** = hush, secondary, de-emphasised, brace.
- **Cyan** = water, technology, the “system” layer.
- **Purple / Pink** = the character and the emotional accent.
- **Orange / Yellow** = physical props, windows, warmth.

At most **one full-strength neon accent** and **two dark fills** per scene.
If the green pills and the purple hero are both full-strength, the frame has
two equal accents; dim one or make it a dark surface. Never use more than
three hues total, including the background.

**Recolour map for the original stills.** The reference uses a white page and
muted fills; translate it like this:

| Reference role | Reference colour | Dracula token |
|---|---|---|
| page + skin | `#FFFFFF` | `#282A36` background |
| ink outline | `#221C18` | `#F8F8F2` |
| secondary text | `#8B8B8B` | `#6272A4` |
| people / tasks | `#2E9E6A` | `#50FA7B` |
| alarm / news | `#E2231F` | `#FF5555` |
| BANG fill | `#F5D2CE` | `#44475A` fill + `#FF79C6` outline |
| water / screen | `#D9EBF7` | `#44475A` fill + `#8BE9FD` line |
| character shirt | `#8D63AF` | `#BD93F9` |
| wood accents / parcels | `#C08A5E` | `#FFB86C` for small areas; `#44475A` for large desk surfaces |
| hair | `#473426` | `#6272A4` |
| robot body | `#D6E1E6` | `#6272A4` |

Do not preserve the reference’s pastel fills. On a dark page they turn into
glowing slabs. Keep fills at `#343746`/`#44475A` and let the off-white ink and
one neon outline define the object. Neon is a spotlight, not a paint bucket:
use it on the active edge, the active pill, the one word — not on every fill.

### 2.3 Line and fill

| Property | Value at 1080p |
|---|---|
| Ink outline | 4–5 px `#F8F8F2` |
| Panel/box outline | 5 px `#F8F8F2` |
| Tick marks / arrows / brace | 3 px |
| Pills border | 3 px `#50FA7B` |
| Ground line | 3 px `#44475A` |
| Wobble | Rough.js `roughness 1.1–1.2`, `bowing 1.0–1.2` |
| Fills | flat, solid, no gradient, no shading |
| Shadows | one soft ellipse under standing objects, black 18–22 %, blur 6 px |
| Corner ticks | 8–11 px crosshairs at the four corners of rectangles/cards/panels/boxes |

**Corner ticks are a signature.** Every big rectangle (panel, job box, desk,
building, newspaper card) has a tiny `+` at each corner. Pills and the cloud
do not. Use `CornerTicks` from the starter.

The line style is **neon marker on a dark page**, not pencil: confident,
smooth, slightly wobbly, round caps, no hatching, no double outlines. Avoid
glow effects; the neon comes from the colour, not from a blur.

### 2.4 Typography

Two fonts only:

| Role | Font | Size @1080p | Colour | Notes |
|---|---|---:|---|---|
| Scene title | **Caveat Brush** | 64–76 px | Ink `#F8F8F2` | lowercase, 0.98 line-height, left or right aligned |
| Annotation / label | **Caveat Brush** | 40–46 px | Ink / Comment `#6272A4` | 1.05 line-height |
| Kicker / aside | **Caveat Brush** | 32–36 px | Comment `#6272A4` | e.g. “so easy to miss” |
| Huge single word | **Caveat Brush** | 76–96 px | Ink / Red / Pink | “JOB”, “BANG!”, “10,000 LAYOFFS” |
| Task pill | **Patrick Hand** | 34 px | Ink | `#50FA7B` 3 px stadium border, 9×30 px padding |
| Tiny task inside bundle | **Patrick Hand** | 20–22 px | Ink | `#50FA7B` 2 px border |

Copy conventions:
- lowercase except names/acronyms (`JOB` is the exception).
- no full stops on labels; `?` and `!` are allowed.
- titles are noun phrases (`a bank teller`), captions are claims
  (`not the usual way`), labels are verbs/nouns (`counts cash`).
- one accent word per phrase at most: red for alarm, green for the
  definition, comment blue for a hush.
- max 6 words per line; max 2 lines per annotation.

### 2.5 Scale at 1080p

| Element | Size | % of frame height |
|---|---:|---:|
| Character, full body | 380–500 px tall | 35–46 % |
| Character head | 90–104 px | 8–10 % |
| Hero object (iceberg, cloud) | 500–720 px | 46–67 % |
| Panel in a 3-panel strip | 530×480 px | 44 % |
| Role illustration | 600–700 px wide | — |
| Task pill | 60–64 px tall | 5.6–5.9 % |
| Title | 64–76 px | 6–7 % |
| Annotation | 40–46 px | 3.7–4.3 % |

Nothing important is smaller than ~28 px. Details are 3–5 strokes per object.
A hand, a robot, a building, a headline: all readable as a silhouette at 50 %
scale. If it needs a caption to be recognised, redraw it simpler.

### 2.6 Composition zones

```
┌──────────────────────────────────────────────────────────────┐
│  y=150–220                                                   │
│  TITLE (x=300 left  |  x=1620 right)                         │
│                                                              │
│        ┌──────────────┐          ○ counts cash               │
│        │              │          ○ processes deposits        │
│        │   HERO       │  {       ○ answers questions         │
│        │   40–65 %    │          ○ spots fraud               │
│        │              │          ○ sells products            │
│        └──────────────┘                                      │
│              ↑ brace points at the hero                      │
│                                                              │
│  y=870–900   CAPTION (centre x=960)                          │
└──────────────────────────────────────────────────────────────┘
```

- Safe area: 96–120 px. Only the horizon line and the 3-panel strip go wider.
- Text lives in **three fixed zones**: title rail (top-left/right), caption
  (bottom-centre), label rail (opposite the hero). Do not scatter text.
- Hero is off-centre: left-weighted or right-weighted, never dead-centre
  for more than one scene in a row.
- Leave a **clear 80 px halo** around all text. No doodle may enter it.
- The brace always points at the hero (cusp toward the character), and the
  pills sit on the other side.

### 2.7 Motion durations

| Preset | Duration | Easing | Notes |
|---|---:|---|---|
| Draw-on stroke | 0.35–0.60 s | ease-out cubic | stagger parts by 80–140 ms |
| Fill fade | 0.15–0.25 s | linear | starts at 70 % of stroke |
| Pop-in | 0.20–0.26 s | spring, damping 14 | scale 0.82→1.04→1, rotate −2°→0 |
| Type-on | 0.030–0.050 s per char | linear | 1–2 frames per char at 30 fps |
| Arrow draw | 0.30–0.40 s | ease-out | head appears at 85 % |
| Brace draw | 0.45–0.60 s | ease-in-out | once per scene |
| Card swing | 0.45–0.55 s | spring | rotate 8–12°→0, x +120→0 |
| Camera pan | 0.8–1.2 s | ease-in-out | one direction only |
| Dim previous | 0.30–0.40 s | ease-in-out | to 0.15–0.22 opacity |
| Hand enter | 0.45–0.60 s | ease-out-back | tap 70–90 ms, hold |
| Walk-off | 2.0–3.0 s | linear | 8–10 rad/s leg cycle, fade to 10–15 % |
| Cut | 0 s | — | only at section boundaries |
| Final fade | 0.35–0.50 s | ease-in-out | only the last frame |

**One motion at a time.** Two is the absolute maximum (e.g. a label typing
while its arrow draws). If three things move, the viewer’s eye stops
tracking the idea.

### 2.8 Reference beat map

| Time | Scene | What happens | On-screen copy |
|---:|---|---|---|
| 0.0–6.2 | **Myth** | character draws → thought cloud → robot + worker → worker walks away and drains colour → BANG! → caption | “a single dramatic moment” (4.85) |
| 6.2–21.5 | **Evidence strip** | camera travels right across factory panel → newspaper “THE NEWS / 10,000 LAYOFFS” swings in → robot + 4 workers, workers disappear one by one → pull back to 3 panels → caption | “it does happen ✓” (16.6), “not the usual way” (18.2) |
| 21.5–28.7 | **Quietly** | office building full of green people + empty window grid → giant hand taps the grid → `?` pops → caption | “quietly” (22.8), “which day?” (27.2) |
| 28.7–38.8 | **Iceberg** | tip + mass draw → waterline → ghost people inside the mass → label + arrow → label + arrow → comment-blue kicker | “this quiet version” (30.2), “worry about this one” (32.8), “so easy to miss” (36.2) |
| 38.8–46.0 | **Definition** | “JOB” box draws → title “a job” → box un-draws → circle of 6 task pills + bow → neon-green caption | “a job” (39.5), “a bundle of tasks” (42.8) |
| 46.0–53.3 | **Bank teller** | title + teller at desk → brace → 5 pills pop one per task | “a bank teller” + 5 pills |
| 53.3–60.0 | **Paralegal** | mirrored: title top-right, hero right, pills left, 4 tasks | “a paralegal” + 4 pills |

**Cuts:** 21.5, 28.7, 38.8, 46.0, 53.3, 59.8. Only five cuts in a minute.
Everything else is draw-on, pan, or dim.

**Rhythm:** new information every 1.5–2.5 s. After 21.5 s, each scene is
~7.2 s. The opening is 21.5 s because it tells a complete myth → evidence →
thesis story in one continuous camera move.

### 2.9 The voiceover

- Speech rate is roughly 150–170 wpm. A 7 s scene is ~17–20 spoken words.
- On-screen text is **not** the narration. The reference has ~35 caption
  words + ~18 pill words in 60 s, against ~150 spoken words. The caption copy
  alone is a **~4× reduction**; even with every task label, the screen carries
  only ~53 words. Aim for that ratio, not a transcript.
- Pauses of 0.3–0.6 s are used as beats: text finishes, the frame holds,
  then the next thing draws.
- The film’s structural argument is: myth (dramatic layoff) → “not the usual
  way” → quiet iceberg → “a job is a bundle of tasks” → two role examples.
  Use the same rhetoric for any topic: **myth → correction → mechanism →
  definition → examples**.

---

## 3. Why the eye never gets lost

These are the rules that make the style feel calm. Apply all of them.

1. **One focal point per beat.** The largest, highest-contrast object is the
   subject. Everything else is smaller, comment-blue, or off-screen.
2. **Negative space is a character.** Target 85–95 % flat `#282A36`. If two
   things compete, delete or dim one.
3. **One idea per scene.** If the sentence contains “and”, it is probably two
   scenes. Each scene gets one template and one claim.
4. **Text is a title, not a transcript.** 3–6 words. The VO carries the
   grammar; the screen carries the noun.
5. **Three text zones only.** Title rail, caption, label rail. Never place a
   label in the middle of the hero “because there was space”.
6. **Enter from the reading direction.** New content arrives from the right
   (or the direction the eye is already moving); old content slides left and
   dims. The eye follows motion instead of searching.
7. **Dim, don’t delete.** Previous panels fade to 15–22 % instead of
   disappearing. Context stays, competition goes.
8. **Motion is the pointer.** Move one element at a time; hold everything
   else perfectly still. A still frame with one drawing line is stronger than
   five floating objects.
9. **Draw-on is a settle, not a race.** 0.35–0.6 s per element. It should
   feel like a marker finishing a line, not a transition.
10. **Sync to the word, not the sentence.** Start the visual 0.15–0.25 s
    *before* the anchor word so it lands on the syllable. If the word is
    “quietly”, the word is already on screen as it is spoken.
11. **Use a giant hand.** When the VO says “this / here / which”, a hand
    enters and taps the exact object. It resolves focus instantly and adds a
    human presence without a presenter.
12. **Arrows do the grammar.** A label without a leader line is ambiguous.
    The arrowhead points at the object, never at the label.
13. **Scale hierarchy.** Hero 40–65 % of height, support 15–25 %, text 4–7 %.
    Nothing important below 120 px.
14. **Colour means something.** One full-strength neon accent per scene:
    green = people/tasks, red = alarm/news, cyan = water/tech, comment blue =
    hush. Never two equal accents.
15. **Mirror every other scene.** Bank (hero left, list right) → paralegal
    (hero right, list left). Same grammar, new position. The eye resets
    without relearning the language.
16. **Keep the floor.** A light ground line + a soft ellipse shadow under
    every standing object. It stops the doodles from floating.
17. **Hold the last frame.** 0.4–0.8 s of stillness before a cut. Silence is
    a beat. Do not fill it with bounce or drift.
18. **Cut only at section boundaries.** Five or six cuts per minute. Inside a
    section, pan, draw, or dim.
19. **Transform in place.** The “JOB” box and the task bundle share the same
    centre. The eye does not travel while the idea changes.
20. **Remove detail until it reads at a glance.** 3–5 strokes per object, no
    textures, no logos, no background patterns, no perspective tricks.

Two more practical rules:

- **Never animate text and the hero at the same time.** While a caption
  types, the art holds. While the art draws, the text holds.
- **Never put two full-contrast objects on screen.** If both must exist, make
  one 20–30 % smaller and dim it to comment blue / 20 % opacity.

---

## 4. Pre-production: VO → beat sheet

### 4.1 Transcribe with word timestamps

The machine already has a working Whisper environment:

```bash
source ~/.venvs/whisper/bin/activate
# if the venv is missing:
# python3 -m venv ~/.venvs/whisper
# ~/.venvs/whisper/bin/pip install faster-whisper
```

Convert the VO to 16 kHz mono (avoids decoder issues):

```bash
ffmpeg -y -i vo.mp3 -ar 16000 -ac 1 /tmp/vo.wav
```

Transcribe:

```python
# transcribe.py
import json, wave, numpy as np
from faster_whisper import WhisperModel

w = wave.open("/tmp/vo.wav", "rb")
sr = w.getframerate()
audio = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
audio = audio.astype(np.float32) / 32768.0
if w.getnchannels() == 2:
    audio = audio.reshape(-1, 2).mean(axis=1)

model = WhisperModel("small.en", device="cpu", compute_type="int8")
segments, info = model.transcribe(
    audio,
    language="en",
    beam_size=5,
    word_timestamps=True,
    vad_filter=True,  # set False if VAD eats quiet words
)

words = []
for s in segments:
    for wd in s.words:
        token = wd.word.strip()
        if token:
            words.append({
                "word": token,
                "start": round(wd.start, 3),
                "end": round(wd.end, 3),
            })

json.dump(words, open("words.json", "w"), indent=2)
print(f"{len(words)} words / {info.duration:.1f}s")
```

Rules:
- If the transcript is nonsense, **do not guess**. Use the supplied script,
  or a bigger model (`medium.en`, `large-v3`), or ask the user.
- Keep the original punctuation in a separate `script.txt`; use the
  normalised lowercase words for matching.
- Spot-check 5 word timings by rendering the waveform or listening to the
  first/last 2 s of three phrases.

Optional: save `words.json` with absolute times. Never re-time by
proportional character counts after this step.

### 4.2 Segment the VO into scenes

1. Split on sentence punctuation and pauses ≥ 0.35 s.
2. Merge sentences that make one claim; split at “but / and / so / because”
   when the claim changes.
3. Aim for 6–8 s per scene. The opening may run 15–20 s if it tells a
   complete myth in one camera move.
4. Name each scene by its **rhetorical move**, not its topic:
   `myth`, `evidence`, `comparison`, `diagram`, `definition`, `role-a`,
   `role-b`, `conclusion`.
5. For each scene, underline 1–3 **anchor words**: the concrete nouns/verbs
   that the visuals must hit (`robot`, `headline`, `quietly`, `iceberg`,
   `bundle`, `counts cash`).

A 60 s explainer typically ends up as:

```
0–20 s   myth + evidence       (3 sub-beats)
20–28 s  the correction        (comparison/diagram)
28–38 s  the mechanism         (diagram)
38–46 s  the definition        (definition)
46–53 s  example A             (role + tasks)
53–60 s  example B             (mirrored role + tasks)
```

### 4.3 Write the on-screen copy

Rules:
- **3–6 words per phrase.** Never a full sentence.
- **Concrete.** “counts cash” beats “financial transaction processing”.
- **One claim per scene.** The caption is the claim, the title is the
  subject, the labels are the evidence.
- **Use the VO’s own memorable words** when they are short (“quietly”,
  “bundle of tasks”).
- **Numbers are good.** “10,000 LAYOFFS” is more visual than “many job cuts”.
- **Punctuation is a prop.** `?` creates curiosity, `✓` confirms, `!` alarms.
- **Do not repeat the same word on screen and in the VO unless it is the
  point.** The screen should add a picture, not echo.

Examples from the reference:

| VO idea | On-screen | Why it works |
|---|---|---|
| We imagine a single dramatic event | “a single dramatic moment” | names the myth in 4 words |
| The plant closes, the headline, the robot | “10,000 LAYOFFS” | one number does the work |
| But that is not how it happens | “not the usual way” | thesis, 4 words |
| It happens without a signal | “quietly” | one word, comment blue |
| We don’t know when | “which day?” | question mark makes the viewer lean in |
| The visible tip is not the whole thing | “this quiet version” / “worry about this one” / “so easy to miss” | three labels, three jobs |
| A job is made of tasks | “a job” → “a bundle of tasks” | definition in 2 + 4 words |
| A bank teller does… | 5 pills: counts cash / processes deposits / answers questions / spots fraud / sells products | concrete verbs |

Bad → good:

| Bad | Good |
|---|---|
| “Artificial intelligence is transforming the labour market” | “the quiet version” |
| “Bank tellers perform a variety of customer-facing functions” | “counts cash” |
| “This is a significant and unprecedented moment” | “BANG!” |
| “There are many factors to consider” | “which day?” |

### 4.4 Pick a template

| Rhetorical move | Template | Visual |
|---|---|---|
| A false picture / myth | **Myth bubble** | character + giant thought cloud + a tiny scene inside + BANG! |
| Three examples / evidence | **Evidence strip** | 3 panels on a horizontal strip, camera travels, pull back at the end |
| A vs B / before vs after | **Comparison** | two big objects side by side, one dimmed/empty, giant hand taps the point |
| Hidden vs visible / parts of a whole | **Diagram** | one hero object + horizon + 2–3 labels with leader arrows |
| “X is a bundle of Y” | **Definition** | word → box → un-draw → circle of tiny Y pills → bow |
| A role is a set of tasks | **Role + tasks** | character at a prop + brace + 4–5 pills |
| A process | **Path** (extend) | 3–5 objects on one ground line, arrow between, captions below |
| Scale / contrast | **Giant/tiny** (extend) | one huge object, one tiny person, no other noise |

If no template fits, build the simplest possible visual metaphor:
one object, one label, one arrow. Do not add a second metaphor to decorate.

### 4.5 Assign times (the sync contract)

Let `at` = the voiceover time of the anchor word.

| Event | Timing |
|---|---|
| Scene cut | first anchor word − 0.25 s, on a pause |
| Draw-on start | anchor word − 0.20 s |
| Draw-on end | anchor word + 0.25–0.40 s |
| Pop-in | anchor word − 0.05 s (lands with the syllable) |
| Text starts | phrase start − 0.10 s |
| Text ends | phrase end + 0.20–0.30 s |
| Label + arrow | label starts at the noun; arrow draws 0.1 s later |
| Hold | last word + 0.4–0.8 s |
| Next scene | after the hold; cut on a pause |

The viewer should never see a caption finish *after* the narrator has moved
on. If the VO is fast, shorten the copy, not the hold.

### 4.6 Storyboard JSON

Use `starter/storyboard.example.json` as the reference. Minimum shape:

```jsonc
{
  "meta": { "fps": 30, "width": 1920, "height": 1080, "audio": "vo.wav" },
  "scenes": [
    {
      "id": "myth",
      "type": "myth-bubble",
      "start": 0.0,
      "end": 6.2,
      "copy": [
        { "text": "a single dramatic moment", "zone": "caption", "at": 4.85, "dur": 0.95 }
      ],
      "events": [
        { "at": 0.0,  "action": "draw-character" },
        { "at": 1.45, "action": "draw-robot" },
        { "at": 2.7,  "action": "worker-walks-away", "duration": 2.3 },
        { "at": 4.15, "action": "pop-bang" }
      ]
    },
    {
      "id": "bank",
      "type": "role-tasks",
      "start": 46.0,
      "end": 53.3,
      "title": "a bank teller",
      "labels": [
        { "text": "counts cash", "at": 46.9 },
        { "text": "processes deposits", "at": 48.3 }
      ]
    }
  ]
}
```

Keep the JSON as the single source of truth. The Remotion components should
only receive **local** times (`absolute − scene.start`), so a scene can be
previewed on its own.

---

## 5. Layout templates (coordinates at 1920×1080)

### 5.1 Myth bubble

```
character                thought cloud
x=300, feet y=890        cx=1160, cy=470, rx=520, ry=340
380–420 px tall          robot x=1100, worker x=1400, ground y=706
                         BANG at (1150, 278)
                    caption y=888, centred, 42 px
```

Build order:
1. ground line + shadow for the character (0.4 s)
2. character (1.4 s, parts stagger)
3. cloud outline (1.5 s) + two tail circles (0.4 s)
4. inner ground line (0.3 s)
5. robot (0.7 s)
6. worker (0.6 s)
7. worker walks right 120–170 px and fades to 10–15 % over 2.3 s
8. BANG burst pops (0.35 s)
9. caption types (0.9–1.1 s)

Why it works: the cloud is 65 % of the frame, the character is the only
other object, and the caption sits in the empty bottom strip. The eye goes
character → cloud → BANG → caption, one step at a time.

Rules: the cloud must not touch the frame edges (leave ≥80 px). The
character must be outside the cloud, connected by two shrinking tail
circles. The worker inside is 40–50 % of the character’s size.

### 5.2 Evidence strip

```
y=270 ┌────────┐ 50 ┌────────┐ 50 ┌────────┐
      │ panel  │    │ panel  │    │ panel  │
      │ 530×480│    │ 530×480│    │ 530×480│
y=750 └────────┘    └────────┘    └────────┘
        x=115        x=695        x=1275
top-right: “it does happen ✓”  y=150
caption:  “not the usual way”  y=870
```

Build order:
1. first panel frame draws (0.4 s) + content (1.2–2.0 s)
2. camera slides right 0.8–1.2 s; previous panel dims to 0.18; new panel
   enters from the right, rotated −10°→0, over 0.5 s
3. repeat for panel 3
4. pull back to show all three at 530×480 with 50 px gaps, 90 px side margins
5. top-right caption types; bottom caption types; all panels dim to 0.18
6. hold 0.6 s

Panel content must be one object, no backgrounds, no floors beyond a ground
line. Active panel is full contrast; inactive panels are 15–22 %.

Use this for “three examples”, “three stages”, or “before / during / after”.

### 5.3 Comparison + giant hand

```
object A                    object B
x=600, 380–460 wide         x=1320, 380–460 wide
baseline y=890              baseline y=890
        ↑ hand enters from the top at x≈1180, 500 px long
title: centred top, 64 px, comment blue (e.g. “quietly”)
caption: bottom-right, 36 px (e.g. “which day?”)
```

- A is full of detail and colour; B is the same shape but empty/dimmed.
- The hand is an illustrated arm + pointing index finger, muted purple
  sleeve, 4 px off-white ink, 2.5× the character’s hand. It enters from the top edge, taps
  twice, and holds.
- A `?` pops next to B at the tap.
- The caption appears only after the tap.

Why it works: the two objects are the same size, so the difference is
colour/detail, not scale. The hand is the only motion and it points at the
exact difference.

### 5.4 Diagram (iceberg)

```
            ✦  (small pink neon star)
           /\
          /  \  tip (Ice tip fill)
─────────/────\────────────  waterline y=425 (cyan 5 px wavy)
        /      \
       /        \  mass (Water fill)
      /  · · ·   \  ghost people (comment-blue dashed, 12–18 % opacity)
     /____________\
x=600..1320          labels x=1260, y=300 / 430 / 760
                     arrows curve from label to the exact part
                     comment-blue kicker bottom-right: “so easy to miss”
```

Build order:
1. tip polygon (0.5 s) + mass polygon (0.6 s)
2. waterline draws across the full frame (0.5 s)
3. ghost people fade in, staggered 30 ms (0.6 s total)
4. label 1 types; arrow draws; head pops
5. label 2 types; arrow draws
6. comment-blue kicker types
7. hold 0.8 s

Rules: one horizon only; labels never overlap the object; arrows are 3 px,
hand-drawn cubics, with a simple V head. The tip’s star is the only pink/red accent.

### 5.5 Definition (“a job = a bundle of tasks”)

```
                a job            (top centre, 64 px)
          ┌──────────────┐
          │     JOB      │      430×280, surface fill, corner ticks, centred
          └──────────────┘
                 ↓  un-draw the box (sides disappear)
              ○ ○ ○
            ○  task  ○          circle 300 px, 6 tiny pills, bow on top
              ○ ○ ○
           a bundle of tasks    (green, 40 px, below)
```

Build order:
1. title “a job” types
2. box draws in 4 separate sides (top, right, bottom, left) + ticks
3. “JOB” types inside
4. box fill fades, sides un-draw
5. circle bundle draws (0.6 s)
6. six tiny “task” pills pop, clockwise (0.12 s apart)
7. bow draws on top (0.4 s)
8. neon-green caption types
9. hold 1.0 s

The box centre and the circle centre are **identical**. This is the
continuity trick: the eye does not move while the idea changes.

### 5.6 Role + tasks (the workhorse)

Bank teller (hero left, list right):

```
title “a bank teller”  x=300, y=150, 76 px
hero                   x=548, feet y=916, 475 px tall
desk                   x=210, y=730, w=710, h=150 front panel
brace                  x=1012, y=270, h=560, cusp left
pills                  centre x=1400, y=280 + 92·i, 62 px tall
```

Paralegal (mirror everything):

```
title “a paralegal”    x=1620, y=150, 76 px, right-aligned
hero                   x=1360, feet y=916, 475 px tall
table                  x=1000, y=730, w=650
brace                  x=880, y=270, h=560, cusp right
pills                  centre x=520, y=280 + 92·i
```

Build order:
1. title types (0.7–0.9 s)
2. ground + shadow, then the prop (desk/table) draws (0.9 s)
3. character draws (1.0 s)
4. brace draws (0.6 s)
5. pills pop one by one, each at its task word (0.45 s type-on)
6. hold 0.8 s

Rules:
- 4–5 pills maximum. Six is too many in 7 s.
- Pills are centre-aligned on a common axis; each pill’s width grows with
  its text.
- The brace spans the **final** list height from the start; it does not grow
  pill by pill.
- The hero is 60 % of the width of the illustration side; the pill rail is
  ~30 %. Leave the outer 10 % empty.
- Mirror the whole composition for the next role. Do not repeat the same
  side twice in a row.

---

## 6. Motion and sync

### 6.1 The motion vocabulary

- **Draw-on** — every outline is revealed with `strokeDasharray` /
  `strokeDashoffset` (`pathLength=1`). Fill fades in at 70 %.
- **Type-on** — characters appear left-to-right, 1–2 frames each. The text
  block reserves its final width so it does not reflow.
- **Pop-in** — scale 0.82→1.04→1 over 0.22 s with a −2° rotation. Used for
  pills, BANG, `?`, small props.
- **Card swing** — a new panel slides in from the right, rotated −10°→0,
  and settles. Used only at panel changes.
- **Camera pan** — the whole board translates; the active panel stays
  centred. 0.8–1.2 s, ease-in-out. One direction per section.
- **Dim** — old content fades to 0.18, not out. Used before every new panel
  or caption.
- **Arrow draw** — a cubic path draws over 0.35 s; the V head pops at 85 %.
- **Hand tap** — the hand enters from the top, overshoots 8 px, settles,
  taps once or twice. Holds while the caption types.
- **Walk-off** — legs scissor at 8–10 rad/s, the body translates 120–170 px,
  colour drains to comment blue, opacity falls to 0.12. Never loop after it settles.
- **Brace draw** — one continuous 0.5 s stroke; cusp points at the hero.
- **Transform in place** — old object un-draws while the new one draws at the
  same centre (job box → bundle).

### 6.2 Sync offsets

```
visual start   = word.start − 0.20 s
visual settle  = word.start + 0.25 s
text start     = phrase.start − 0.10 s
text end       = phrase.end + 0.25 s
hold           = 0.40–0.80 s
```

Worked example: the word “quietly” starts at 22.84 s.
- title type-on starts at 22.74 s, ends at 23.55 s.
- the office building has already been drawing since 21.9 s.
- the hand starts at 26.0 s, taps at 26.5 s, `?` pops at 26.6 s.
- “which day?” starts at 27.10 s and ends at 28.15 s.
- cut at 28.45 s (on the pause).

### 6.3 What never moves

- No idle bob, float, breathing, or loop.
- No parallax or camera shake.
- No continuous motion during a hold.
- No text movement after it lands (no slide, no bounce).
- No two equal-contrast objects both moving.

Stillness is what makes the drawing feel confident.

---

## 7. Remotion implementation

### 7.1 Setup

```bash
cp -R starter ~/my-sketch-video
cd ~/my-sketch-video
npm install
```

`starter/` is a tested 12 s project with two templates:
`MythBubble` and `RoleTasks`. It renders at 1920×1080 / 30 fps.

Dependencies:
`remotion`, `@remotion/cli`, `@remotion/fonts`, `react`, `react-dom`,
`roughjs`.

### 7.2 File structure

```
src/
  index.ts              registerRoot
  Root.tsx              <Composition>
  Video.tsx             scene list + audio
  fonts.ts              loadFont() for both local fonts
  theme.ts              tokens
  words.json            word timestamps (generated)
  lib/
    rough.tsx           SketchRect / Line / Ellipse / Path / ticks / Rough
    motion.tsx          useProgress / PopIn / FadeToBackground
    TypeOn.tsx          handwritten typewriter + HandTitle
    Character.tsx       the 4.5-head stick character
    Doodles.tsx         Robot / Burst / Desk / Brace / Arrow / Pill / JobBox
    words.ts            atWord / phraseStart / phraseEnd
  scenes/
    MythBubble.tsx
    RoleTasks.tsx
public/
  fonts/CaveatBrush-Regular.ttf
  fonts/PatrickHand-Regular.ttf
  vo.wav
```

### 7.3 Fonts

Bundle the TTFs; do not rely on Google Fonts at render time.

```ts
// src/fonts.ts
import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

loadFont({
  family: 'Caveat Brush',
  url: staticFile('fonts/CaveatBrush-Regular.ttf'),
  weight: '400',
});
loadFont({
  family: 'Patrick Hand',
  url: staticFile('fonts/PatrickHand-Regular.ttf'),
  weight: '400',
});
```

`loadFont` registers a Remotion `delayRender`, so the first frame never
falls back to a system font.

### 7.4 Rough primitives

The core trick: generate a Rough.js drawable once with a **fixed seed**,
convert it to SVG paths, and reveal the stroke with `pathLength={1}`.

```tsx
const gen = rough.generator();
const drawable = gen.rectangle(x, y, w, h, {
  roughness: 1.15,
  bowing: 1.1,
  stroke: INK,
  strokeWidth: 4.5,
  fill: SURFACE_2,
  fillStyle: 'solid',
  seed: 12345,
});

// inside the component
const paths = useMemo(() => gen.toPaths(drawable), [drawable]);
return paths.map((p, i) => {
  const isFill = p.stroke === 'none';
  return (
    <path
      key={i}
      d={p.d}
      fill={isFill ? p.fill : 'none'}
      stroke={isFill ? 'none' : p.stroke}
      strokeWidth={p.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={isFill ? undefined : 1}
      strokeDasharray={isFill ? undefined : 1}
      strokeDashoffset={isFill ? undefined : 1 - progress}
      opacity={isFill ? fillProgress : 1}
    />
  );
});
```

Rules:
- Use a deterministic `seed` per object (`seedFrom('robot-arm')`). If the
  seed changes per frame, the line “boils” and the calm look is lost.
- Draw big rectangles as 4 separate `gen.line` sides + `CornerTicks` when you
  want the “unboxing” look; use `gen.rectangle` when one stroke is fine.
- Keep fills solid. No hachure, no sketch fill, no gradients.
- `Rough` and the primitives are in `starter/src/lib/rough.tsx`.

### 7.5 Handwritten type-on

Use the `TypeOn` component from the starter. It renders the full string
invisibly for layout, then absolutely overlays the visible prefix. This
prevents the centred block from shifting as characters appear.

```tsx
<TypeOn text="a bank teller" start={0.12} dur={0.75} />
```

`TypeOn` is for **one line or a `\n` block**. For a pill whose border should
grow with the text, slice the string yourself (see `Pill` in
`starter/src/lib/Doodles.tsx`).

### 7.6 Word timestamps

Keep `words.json` as an array:

```json
[
  { "word": "quietly", "start": 22.84, "end": 23.61 },
  { "word": "which",   "start": 27.10, "end": 27.38 }
]
```

Helpers in `starter/src/lib/words.ts`:

```ts
atWord(words, 'quietly')          // 22.84
phraseStart(words, 'which day')   // 27.10
phraseEnd(words, 'which day')     // 28.15
```

Then drive every `start` prop from those values. Do not hand-type times that
already exist in `words.json`.

### 7.7 Audio and composition

```tsx
import {Audio, staticFile} from 'remotion';

<Audio src={staticFile('vo.wav')} />
```

Set the composition length from the audio:

```tsx
// optional helper: npm i @remotion/media-utils
import {getAudioDurationInSeconds} from '@remotion/media-utils';
// or put the duration in meta after ffprobe
durationInFrames={Math.ceil(audioDuration * fps) + 30}
```

Keep the VO at its natural level; normalise to about −16 LUFS and leave
−1.5 dBTP. A quiet music bed is optional at −24 LUFS. No whooshes, no
“pop” SFX on every object — the film has none.

### 7.8 Scene timeline

Use one `<Sequence>` per scene:

```tsx
<Sequence from={Math.round(46.0 * fps)} durationInFrames={Math.round(7.3 * fps)}>
  <RoleTasks
    title="a bank teller"
    labels={['counts cash', 'processes deposits', 'answers questions', 'spots fraud']}
  />
</Sequence>
```

Inside a `Sequence`, `useCurrentFrame()` starts at 0, so the scene’s
`start` props are **local** seconds. Convert absolute word times once in
`storyboard.json` or at the call site.

### 7.9 Performance

- `useMemo` every Rough drawable; never regenerate paths per frame.
- Use `staticFile` for fonts/audio; no network fetches during render.
- 30 fps is enough for this style; 60 fps doubles render time with little
  perceptual gain.
- Use `--concurrency=4` on a laptop; the frames are mostly flat background.
- Render stills first to check composition, then the full video.

### 7.10 Extending the object library

Draw new objects with the same grammar:
- 3–5 strokes, 4–5 px ink, one flat fill.
- A ground line + soft shadow if it stands.
- Corner ticks if it is a card/panel/box.
- Keep it a symbol, not an illustration. A factory is a shed with a sawtooth
  roof + fence + lock, not a detailed building.

Recommended library: character (stand/think/teller/paralegal/worker),
robot, cloud, BANG burst, factory, newspaper, office building, empty window
grid, giant hand, iceberg, job box, task bundle, desk, register, table,
books, papers, brace, arrows, pills, ground.

---

## 8. QA checklist

### Visual
- [ ] At 50 % scale, can you name the one focal point in 1 second?
- [ ] Is at least 80 % of the frame the flat `#282A36` background?
- [ ] Are there ≤3 visual groups and ≤6 words on screen?
- [ ] Is the title in its rail and the caption in its zone?
- [ ] Is every label connected to its object by an arrow/brace?
- [ ] Does any doodle enter the 80 px text halo?
- [ ] Is the ink 4–5 px and consistent? Any accidental hairline?
- [ ] Are fills flat? Any gradient, texture, or drop shadow?
- [ ] Do all standing objects have a ground line + soft shadow?
- [ ] Is the colour count ≤3 per scene? Is each colour meaningful?
- [ ] Is the layout mirrored from the previous role scene?

### Timing and audio
- [ ] Does every draw land on its anchor word (±0.15 s)?
- [ ] Does any caption finish after the VO has moved on?
- [ ] Are there 0.4–0.8 s holds after each idea?
- [ ] Are cuts on pauses, never mid-word?
- [ ] Is there only one moving element at a time?
- [ ] Is the VO intelligible over the music (if any)?
- [ ] Does the video end 0.5–1.0 s after the last word, then cut to the background?

### Story
- [ ] Is the opening a concrete myth, not a definition?
- [ ] Is there a turn (“not the usual way”) by ~30 % of the runtime?
- [ ] Does every example have a different visual template?
- [ ] Does the last example land the point without a summary card?
- [ ] Is the on-screen copy 4–6× shorter than the VO?

### Technical
- [ ] 1920×1080, 30/60 fps, H.264 + AAC.
- [ ] No frame with a fallback font.
- [ ] No frame with a Rough.js shape regenerated at a different seed.
- [ ] Render a still at every scene start, midpoint, and end.
- [ ] Watch once at 1× and once at 0.5×.

---

## 9. Common failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Feels busy / stressful | too many objects, too much text | delete 50 % of props; cut copy to 3–6 words |
| Eye wanders | two equal-contrast focal points | dim one to 0.18 or move it off-screen |
| Feels like a slideshow | hard cuts and centred layouts | pan the board; mirror the next scene |
| Feels cheap | gradients, drop shadows, stock icons, perfect boxes | flat fills, hand-drawn paths, corner ticks |
| Feels rushed | draw-on <0.25 s or a new event every second | 0.35–0.6 s draws, 1.5–2.5 s per beat, holds |
| Text is hard to read | <28 px or over a doodle | 34–46 px, 80 px halo, dim art behind text |
| Sync feels off | timed to sentence boundaries | use word timestamps and −0.20 s pre-roll |
| Colour feels noisy | 4+ hues or equal accents | 1 accent per scene, semantic palette |
| Everything glows | full-strength neon on every object | keep fills dark; one neon accent |
| Character feels dead | no walk-off / no hand / no expression | one small human motion per scene, then freeze |
| Animation feels mechanical | linear easings, no overshoot | ease-out draws, spring pops, 1.04 overshoot |
| The “bundle” idea is unclear | box and bundle in different places | same centre, un-draw then draw |
| Too much detail | trying to draw a real object | reduce to silhouette + one identifying feature |

---

## 10. Reference appendix

### 10.1 Stills

| File | Shows |
|---|---|
| `reference/01-myth.jpg` | character + cloud + robot + worker; the opening composition |
| `reference/02-bang.jpg` | BANG burst close-up (composition only; recolour to pink/red) |
| `reference/03-factory.jpg` | camera mid-pan, factory panel, cloud leaving left |
| `reference/04-news.jpg` | “THE NEWS / 10,000 LAYOFFS”, tilted card entrance |
| `reference/05-robot.jpg` | active robot panel, previous panel dimmed at left edge |
| `reference/06-strip.jpg` | 3-panel pull-back + two captions |
| `reference/07-quietly.jpg` | office building vs empty grid, “quietly” |
| `reference/08-hand.jpg` | giant hand tapping the grid + “?” |
| `reference/09-iceberg.jpg` | full diagram + 3 labels + arrows |
| `reference/10-job.jpg` | “a job” + JOB box, maximum negative space |
| `reference/13-bundle.jpg` | circle bundle + 6 task pills + bow |
| `reference/11-bank.jpg` | role template: hero left, brace, 5 pills |
| `reference/12-paralegal.jpg` | mirrored role template: hero right, pills left |
| `reference/14-dracula-look.jpg` | **target recolour:** Dracula bank-teller frame |
| `reference/15-dracula-myth.jpg` | **target recolour:** Dracula myth frame with BANG! |
| `reference/palette.png` | Dracula swatches with hex values |
| `reference/ref-contact.jpg` | 13-frame composition contact sheet (original colours) |

> Stills `01`–`13` are from the original white-palette film. Read them for
> placement, scale, line weight and timing only. `14` and the starter are the
> colour target.

### 10.2 Reference numbers

- 60.0 s, 1920×1080, 60 fps, 3600 frames.
- 7 visual beats, 5 cuts.
- 3.4–13.8 % ink coverage.
- 53 on-screen words total (including 9 task labels).
- Title 64–76 px; annotation 40–46 px; pill 34 px; kicker 32 px.
- 530×480 panels; 430×280 job box; 300 px bundle; 60×300 pills.
- 0.35–0.6 s draws; 0.2 s pops; 0.8–1.2 s pans; 0.4–0.8 s holds.

### 10.3 Palette

Dracula only. See `reference/palette.png`. The tokens are in
`starter/src/theme.ts`; do not invent new hues. In particular, no pastel
fills: keep surfaces at `#343746` / `#44475A` and let the neon outline or the
one active accent do the work.

### 10.4 Fonts

- **Caveat Brush** — titles, annotations, BANG!, JOB, numbers.
- **Patrick Hand** — task pills and tiny task chips.

Both are open-licensed and bundled in `starter/public/fonts`.

---

## 11. One-page recipe

If you only have ten minutes:

1. Transcribe the VO with word timestamps.
2. Split into 6–8 scenes, 6–8 s each; give each one anchor word.
3. Write 3–6 words per scene, not a transcript.
4. Pick one template per scene from §4.4.
5. Lay out on `#282A36`: title rail, hero 40–65 %, caption, label rail.
6. Draw with 4–5 px ink + flat fills + corner ticks + ground shadow.
7. Animate one thing at a time; start 0.2 s before the word.
8. Dim old content to 0.18; hold 0.5 s; cut on a pause.
9. Mirror the role layout; change the accent colour per scene.
10. Render stills, check the 20 rules in §3, then render the video.

The look is simple. The discipline is the style.
