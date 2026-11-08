/**
 * Word-timestamp helpers.
 *
 * `words.json` is produced by the transcription step in SKILL.md:
 *   [{ "word": "quietly", "start": 22.84, "end": 23.61 }, ...]
 */
export type Word = {word: string; start: number; end: number};

export const atWord = (words: Word[], needle: string, occurrence = 0): number => {
  const target = needle.toLowerCase();
  const hits = words.filter((w) => w.word.toLowerCase().replace(/[^a-z0-9']/g, '') === target);
  return hits[occurrence]?.start ?? 0;
};

export const phraseStart = (words: Word[], phrase: string): number => {
  const parts = phrase.toLowerCase().split(/\s+/);
  for (let i = 0; i < words.length - parts.length; i++) {
    const ok = parts.every((p, j) => {
      const w = words[i + j].word.toLowerCase().replace(/[^a-z0-9']/g, '');
      return w === p.replace(/[^a-z0-9']/g, '');
    });
    if (ok) return words[i].start;
  }
  return 0;
};

export const phraseEnd = (words: Word[], phrase: string): number => {
  const parts = phrase.toLowerCase().split(/\s+/);
  for (let i = 0; i < words.length - parts.length; i++) {
    const ok = parts.every((p, j) => {
      const w = words[i + j].word.toLowerCase().replace(/[^a-z0-9']/g, '');
      return w === p.replace(/[^a-z0-9']/g, '');
    });
    if (ok) return words[i + parts.length - 1].end;
  }
  return 0;
};
