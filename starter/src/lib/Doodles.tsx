import React from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {
  BEIGE,
  BG,
  BLUE,
  COMMENT,
  GRAY,
  GRAY_LINE,
  GREEN,
  INK,
  PAPER,
  PINK,
  RED,
  ROBOT,
  SURFACE,
  SURFACE_2,
} from '../theme';
import {
  CornerTicks,
  SketchEllipse,
  SketchLine,
  SketchPath,
  SketchPolygon,
  SketchRect,
  bracePath,
  clamp,
  roundedRectPath,
} from './rough';
import {FONT_HEAD, FONT_LABEL} from '../theme';

/* ───────────────────────── ground & shadow ───────────────────────── */

export const Ground: React.FC<{
  x1: number;
  x2: number;
  y: number;
  progress?: number;
  shadow?: boolean;
  shadowX?: number;
  shadowW?: number;
}> = ({x1, x2, y, progress = 1, shadow = true, shadowX, shadowW}) => {
  return (
    <g>
      {shadow ? (
        <ellipse
          cx={shadowX ?? (x1 + x2) / 2}
          cy={y + 2}
          rx={(shadowW ?? 90) / 2}
          ry="10"
          fill="#000"
          opacity={0.22 * clamp(progress)}
          style={{filter: 'blur(6px)'}}
        />
      ) : null}
      <SketchLine
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        progress={progress}
        seed={`ground-${x1}-${y}`}
        color={GRAY_LINE}
        strokeWidth={3}
      />
    </g>
  );
};

/* ───────────────────────── robot ───────────────────────── */

export const Robot: React.FC<{
  x: number;
  y: number;
  scale?: number;
  progress?: number;
  opacity?: number;
}> = ({x, y, scale = 1, progress = 1, opacity = 1}) => {
  const p = clamp(progress);
  const part = (i: number) => clamp((p - i * 0.09) / 0.45);
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) translate(-130 -300)`} opacity={opacity}>
      <SketchLine x1={130} y1={30} x2={130} y2={8} progress={part(0)} seed="r-ant" strokeWidth={4} />
      <SketchEllipse cx={130} cy={6} w={18} h={18} fill={PAPER} progress={part(0)} seed="r-ant2" strokeWidth={4} />
      <SketchRect x={62} y={30} w={136} h={68} fill={ROBOT} progress={part(1)} seed="r-head" />
      <SketchRect x={82} y={46} w={96} h={36} fill={BLUE} progress={part(2)} seed="r-screen" strokeWidth={3.6} />
      <SketchLine x1={130} y1={98} x2={130} y2={112} progress={part(2)} seed="r-neck" strokeWidth={4} />
      <SketchRect x={58} y={112} w={144} h={120} fill={ROBOT} progress={part(3)} seed="r-body" />
      <SketchLine x1={58} y1={130} x2={26} y2={196} progress={part(4)} seed="r-arm-l" strokeWidth={4.5} />
      <SketchLine x1={202} y1={130} x2={234} y2={196} progress={part(4)} seed="r-arm-r" strokeWidth={4.5} />
      <SketchRect x={42} y={232} w={176} h={34} fill={ROBOT} progress={part(5)} seed="r-base" />
      <SketchEllipse cx={78} cy={280} w={38} h={38} fill={PAPER} progress={part(6)} seed="r-wheel1" />
      <SketchEllipse cx={182} cy={280} w={38} h={38} fill={PAPER} progress={part(6)} seed="r-wheel2" />
      <SketchLine x1={68} y1={280} x2={88} y2={280} progress={part(6)} seed="r-hub1" strokeWidth={3} />
      <SketchLine x1={172} y1={280} x2={192} y2={280} progress={part(6)} seed="r-hub2" strokeWidth={3} />
    </g>
  );
};

/* ───────────────────────── BANG! burst ───────────────────────── */

const starPoints = (cx: number, cy: number, outer: number, inner: number, points = 12): [number, number][] => {
  const out: [number, number][] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.78]);
  }
  return out;
};

export const Burst: React.FC<{
  x: number;
  y: number;
  scale?: number;
  progress?: number;
  label?: string;
  labelColor?: string;
}> = ({x, y, scale = 1, progress = 1, label = 'BANG!', labelColor = PINK}) => {
  const p = clamp(progress);
  const points = starPoints(0, 0, 130, 78, 12);
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g transform={`rotate(${-4 + 4 * p})`}>
        <SketchPolygon points={points} fill={SURFACE_2} color={PINK} progress={p} seed="burst" strokeWidth={5} />
      </g>
      <text
        x="0"
        y="6"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={FONT_HEAD}
        fontSize="44"
        fill={labelColor}
        opacity={clamp((p - 0.45) / 0.4)}
        transform="rotate(-2)"
      >
        {label}
      </text>
    </g>
  );
};

/* ───────────────────────── desk / bank ───────────────────────── */

export const Desk: React.FC<{
  x: number;
  y: number;
  w?: number;
  progress?: number;
}> = ({x, y, w = 700, progress = 1}) => {
  const p = clamp(progress);
  const part = (i: number) => clamp((p - i * 0.12) / 0.4);
  const h = 150;
  return (
    <g>
      <SketchRect x={x} y={y} w={w} h={24} fill={BEIGE} progress={part(0)} seed={`desk-top-${x}`} strokeWidth={4.5} ticks />
      <SketchRect x={x + 30} y={y + 24} w={w - 60} h={h} fill={SURFACE} progress={part(1)} seed={`desk-front-${x}`} strokeWidth={4.5} />
      <SketchLine x1={x + 44} y1={y + 174} x2={x + 44} y2={y + 218} progress={part(2)} seed={`desk-leg1-${x}`} strokeWidth={4.5} />
      <SketchLine x1={x + w - 44} y1={y + 174} x2={x + w - 44} y2={y + 218} progress={part(2)} seed={`desk-leg2-${x}`} strokeWidth={4.5} />
    </g>
  );
};

export const CashRegister: React.FC<{
  x: number;
  y: number;
  progress?: number;
}> = ({x, y, progress = 1}) => {
  const p = clamp(progress);
  return (
    <g>
      <SketchRect x={x} y={y} w={150} h={90} fill={SURFACE} progress={p} seed={`register-${x}`} strokeWidth={4.5} />
      <SketchRect x={x + 20} y={y + 18} w={110} h={22} fill={BG} progress={p} seed={`screen-${x}`} strokeWidth={3} />
      <SketchEllipse cx={x + 44} cy={y + 66} w={38} h={38} fill={SURFACE_2} progress={p} seed={`coin-${x}`} strokeWidth={3} />
      <text
        x={x + 44}
        y={y + 72}
        textAnchor="middle"
        fontFamily={FONT_HEAD}
        fontSize="26"
        fill={INK}
        opacity={clamp((p - 0.4) / 0.5)}
      >
        $
      </text>
    </g>
  );
};

export const PaperStack: React.FC<{
  x: number;
  y: number;
  progress?: number;
}> = ({x, y, progress = 1}) => {
  const p = clamp(progress);
  return (
    <g>
      <SketchRect x={x} y={y} w={110} h={150} fill={SURFACE} progress={p} seed={`paper-${x}`} strokeWidth={4} />
      {[0, 1, 2, 3].map((i) => (
        <SketchLine
          key={i}
          x1={x + 18}
          y1={y + 54 + i * 18}
          x2={x + 92}
          y2={y + 54 + i * 18}
          progress={p}
          seed={`pl-${x}-${i}`}
          color={GRAY}
          strokeWidth={2.5}
        />
      ))}
      <SketchPath
        d={`M${x + 70} ${y} L${x + 88} ${y + 20} L${x + 88} ${y} Z`}
        fill={BEIGE}
        progress={p}
        seed={`fold-${x}`}
        strokeWidth={3}
      />
    </g>
  );
};

/* ───────────────────────── brace ───────────────────────── */

export const Brace: React.FC<{
  x: number;
  y: number;
  w?: number;
  h: number;
  side?: 'left' | 'right';
  progress?: number;
  color?: string;
}> = ({x, y, w = 34, h, side = 'left', progress = 1, color = COMMENT}) => {
  const d = bracePath(x, y, w, h, side);
  return (
    <SketchPath d={d} progress={progress} seed={`brace-${x}-${y}`} strokeWidth={3.2} color={color} />
  );
};

/* ───────────────────────── arrows ───────────────────────── */

export const Arrow: React.FC<{
  from: [number, number];
  to: [number, number];
  curve?: number;
  progress?: number;
  color?: string;
  width?: number;
}> = ({from, to, curve = 0.25, progress = 1, color = INK, width = 3.2}) => {
  const p = clamp(progress);
  const [x1, y1] = from;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2 + (y2 - y1) * curve;
  const my = (y1 + y2) / 2 - (x2 - x1) * curve;
  const d = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
  // tangent at end for the arrowhead
  const tx = x2 - mx;
  const ty = y2 - my;
  const ang = Math.atan2(ty, tx);
  const head = 18;
  const h1 = [x2 - Math.cos(ang - 0.45) * head, y2 - Math.sin(ang - 0.45) * head];
  const h2 = [x2 - Math.cos(ang + 0.45) * head, y2 - Math.sin(ang + 0.45) * head];

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - p}
        opacity={p <= 0 ? 0 : 1}
      />
      <g opacity={clamp((p - 0.82) / 0.18)}>
        <path
          d={`M ${h1[0]} ${h1[1]} L ${x2} ${y2} L ${h2[0]} ${h2[1]}`}
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
};

/* ───────────────────────── pills ───────────────────────── */

export const Pill: React.FC<{
  cx: number;
  y: number;
  label: string;
  start: number;
  dur?: number;
  index?: number;
  color?: string;
}> = ({cx, y, label, start, dur = 0.45, index = 0, color = GREEN}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const p = dur <= 0 ? (t >= start ? 1 : 0) : clamp((t - start) / dur);
  const n = Math.floor(p * label.length + (p >= 1 ? 1 : 0));
  const visible = label.slice(0, n);
  const appear = interpolate(t, [start, start + 0.16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });
  const scale = interpolate(t, [start, start + 0.22], [0.86, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.2)),
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: cx,
        top: y,
        transform: `translateX(-50%) scale(${scale}) rotate(${(index % 2 === 0 ? -0.5 : 0.35)}deg)`,
        opacity: appear,
        border: `3px solid ${color}`,
        borderRadius: 999,
        backgroundColor: SURFACE,
        padding: n === 0 ? '9px 18px' : '9px 30px',
        fontFamily: FONT_LABEL,
        fontSize: 34,
        lineHeight: 1,
        color: INK,
        whiteSpace: 'pre',
        minHeight: 62,
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {visible}
    </div>
  );
};

/* ───────────────────────── job box / bundle ───────────────────────── */

export const JobBox: React.FC<{
  x: number;
  y: number;
  w?: number;
  h?: number;
  progress?: number;
  labelProgress?: number;
  opacity?: number;
}> = ({x, y, w = 430, h = 280, progress = 1, labelProgress = 1, opacity = 1}) => {
  const p = progress;
  return (
    <g opacity={opacity}>
      <rect x={x} y={y} width={w} height={h} fill={BEIGE} opacity={clamp((p - 0.55) / 0.3)} />
      {/* four separate sides, like the reference's "unboxing" */}
      <SketchLine x1={x} y1={y} x2={x + w} y2={y} progress={clamp(p * 1.4)} seed="job-top" />
      <SketchLine x1={x + w} y1={y} x2={x + w} y2={y + h} progress={clamp((p - 0.2) * 1.4)} seed="job-right" />
      <SketchLine x1={x} y1={y + h} x2={x + w} y2={y + h} progress={clamp((p - 0.35) * 1.4)} seed="job-bottom" />
      <SketchLine x1={x} y1={y} x2={x} y2={y + h} progress={clamp((p - 0.5) * 1.4)} seed="job-left" />
      <CornerTicks x={x} y={y} w={w} h={h} progress={clamp((p - 0.55) / 0.4)} seed="job-ticks" />
      <text
        x={x + w / 2}
        y={y + h / 2 + 10}
        textAnchor="middle"
        fontFamily={FONT_HEAD}
        fontSize="76"
        fill={INK}
        opacity={labelProgress}
      >
        JOB
      </text>
    </g>
  );
};


/* ───────────────────────── thought cloud ───────────────────────── */

export const ThoughtCloud: React.FC<{
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  progress?: number;
  tailProgress?: number;
  seed?: number;
}> = ({cx, cy, rx, ry, progress = 1, tailProgress = 1, seed = 3}) => {
  const d = (() => {
    const lobes = 11;
    const cusp: {x: number; y: number}[] = [];
    for (let i = 0; i < lobes; i++) {
      const a = (i / lobes) * Math.PI * 2;
      const wob = 0.965 + 0.02 * Math.sin(i * 2.3 + seed);
      cusp.push({x: cx + Math.cos(a) * rx * wob, y: cy + Math.sin(a) * ry * wob});
    }
    let out = `M ${cusp[0].x.toFixed(2)} ${cusp[0].y.toFixed(2)}`;
    for (let i = 0; i < lobes; i++) {
      const a = ((i + 0.5) / lobes) * Math.PI * 2;
      const wob = 1.065 + 0.02 * Math.sin(i * 1.7 + seed);
      const qx = cx + Math.cos(a) * rx * wob;
      const qy = cy + Math.sin(a) * ry * wob;
      const p2 = cusp[(i + 1) % lobes];
      out += ` Q ${qx.toFixed(2)} ${qy.toFixed(2)} ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
    }
    return out + ' Z';
  })();
  return (
    <g>
      <SketchPath d={d} progress={progress} seed={`cloud-${seed}`} strokeWidth={5} />
      <SketchEllipse
        cx={cx - rx * 0.72}
        cy={cy + ry * 0.86}
        w={78}
        h={70}
        fill={PAPER}
        progress={tailProgress}
        seed={`tail1-${seed}`}
        strokeWidth={4}
      />
      <SketchEllipse
        cx={cx - rx * 0.56}
        cy={cy + ry * 1.02}
        w={38}
        h={34}
        fill={PAPER}
        progress={tailProgress}
        seed={`tail2-${seed}`}
        strokeWidth={4}
      />
    </g>
  );
};
