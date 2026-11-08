// ─────────────────────────────────────────────────────────────
//  DRACULA palette.  The composition language comes from the
//  reference film; the colour system is Dracula's.
//  Keep fills dark and let ONE neon accent carry the idea.
// ─────────────────────────────────────────────────────────────

export const BG = '#282A36';         // page / skin / negative space
export const SURFACE = '#343746';    // raised cards, desk fronts, pills
export const SURFACE_2 = '#44475A';  // current line: box fills, screens
export const INK = '#F8F8F2';        // every outline and most text
export const COMMENT = '#6272A4';    // secondary text / hush / hair
export const GRAY = '#6272A4';       // alias
export const GRAY_LINE = '#44475A';  // ground lines
export const GREEN = '#50FA7B';      // people, tasks, positive
export const RED = '#FF5555';        // alarm, news, BANG!
export const PINK = '#FF79C6';       // burst outline, secondary accent
export const BLUE = '#44475A';       // water / screen fill
export const BLUE_LIGHT = '#6272A4';
export const YELLOW = '#F1FA8C';     // windows, highlights
export const PURPLE = '#BD93F9';     // primary character / task accent
export const ORANGE = '#FFB86C';     // wood, parcels
export const CYAN = '#8BE9FD';       // tech / waterline / robot details
export const BROWN = ORANGE;         // legacy alias
export const BROWN_SHIRT = PURPLE;   // legacy alias
export const HAIR = '#6272A4';
export const BEIGE = '#44475A';      // legacy alias for card fills
export const ROBOT = '#6272A4';
export const PAPER = BG;             // legacy alias for page/skin

export const FONT_HEAD = '"Caveat Brush", cursive';
export const FONT_LABEL = '"Patrick Hand", cursive';

// type scale @ 1920×1080
export const TYPE = {
  hero: 96,
  title: 76,
  annotation: 46,
  label: 40,
  pill: 34,
  kicker: 32,
} as const;

// geometry @ 1920×1080
export const CANVAS = {w: 1920, h: 1080};
export const SAFE = 96;
export const GROUND_Y = 890;
