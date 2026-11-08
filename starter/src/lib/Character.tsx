import React from 'react';
import {HAIR, INK, PAPER, PURPLE, ORANGE} from '../theme';

const clamp = (v: number) => Math.max(0, Math.min(1, v));

type CharacterProps = {
  x: number;
  y: number; // baseline (feet)
  scale?: number;
  shirt?: string;
  hair?: string;
  skin?: string;
  pose?: 'stand' | 'think' | 'teller' | 'sit';
  hairStyle?: 'cap' | 'bun' | 'curly';
  expression?: 'neutral' | 'happy' | 'sad';
  progress?: number;
  opacity?: number;
  walkPhase?: number | null;
  carryBox?: boolean;
};

/**
 * The film's character: ~4.5 heads tall, ink outline, flat shirt fill,
 * dot eyes, one-line mouth.  Local box 200×500, feet at (100,500).
 */
export const Character: React.FC<CharacterProps> = ({
  x,
  y,
  scale = 1,
  shirt = PURPLE,
  hair = HAIR,
  skin = PAPER,
  pose = 'stand',
  hairStyle = 'cap',
  expression = 'neutral',
  progress = 1,
  opacity = 1,
  walkPhase = null,
  carryBox = false,
}) => {
  const p = clamp(progress);
  const part = (i: number, span = 0.38) => clamp((p - i * 0.1) / span);
  const dash = (i: number) => {
    const pp = part(i);
    return {
      pathLength: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1 - pp,
      opacity: pp <= 0 ? 0 : 1,
    } as const;
  };

  const swing = walkPhase == null ? 0 : Math.sin(walkPhase);
  const bob = walkPhase == null ? 0 : Math.abs(Math.sin(walkPhase)) * 2;
  const leftLegX = 82 + swing * 16;
  const rightLegX = 118 - swing * 16;
  const leftArmX = 40 - swing * 10;
  const rightArmX = 160 + swing * 10;
  const teller = pose === 'teller';
  const think = pose === 'think';

  const smile =
    expression === 'happy'
      ? 'M86 102 Q100 114 114 102'
      : expression === 'sad'
        ? 'M88 108 Q100 98 112 108'
        : 'M86 104 H114';

  return (
    <g
      transform={`translate(${x} ${y + bob}) scale(${scale}) translate(-100 -500)`}
      opacity={opacity}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* head */}
      <circle
        cx="100"
        cy="80"
        r="52"
        fill={skin}
        stroke={INK}
        strokeWidth="5"
        {...dash(0)}
      />

      {/* hair */}
      <g opacity={part(1)}>
        {hairStyle === 'curly' ? (
          <g fill={hair} stroke={INK} strokeWidth="4">
            <circle cx="56" cy="56" r="26" />
            <circle cx="86" cy="34" r="30" />
            <circle cx="120" cy="33" r="31" />
            <circle cx="148" cy="56" r="25" />
            <path d="M52 68 Q100 42 150 68 L150 80 Q100 58 52 80 Z" fill={hair} stroke="none" />
          </g>
        ) : (
          <path
            d="M46 92 C44 18 156 18 154 92 C142 64 120 58 100 58 C80 58 58 66 46 92 Z"
            fill={hair}
            stroke={INK}
            strokeWidth="4"
          />
        )}
        {hairStyle === 'bun' ? (
          <circle cx="52" cy="68" r="22" fill={hair} stroke={INK} strokeWidth="4" />
        ) : null}
      </g>

      {/* face */}
      <g opacity={part(2)}>
        <circle cx="82" cy="80" r="5.6" fill={INK} stroke="none" />
        <circle cx="118" cy="80" r="5.6" fill={INK} stroke="none" />
        <path d={smile} fill="none" stroke={INK} strokeWidth="3.6" strokeDasharray="none" />
      </g>

      {/* neck */}
      <line x1="100" y1="131" x2="100" y2="143" stroke={INK} strokeWidth="5" {...dash(2)} />

      {/* torso */}
      <rect
        x="62"
        y="140"
        width="76"
        height={teller ? 160 : 168}
        rx="30"
        fill={shirt}
        stroke={INK}
        strokeWidth="5"
        {...dash(3)}
      />

      {/* arms */}
      {teller ? (
        <g>
          <path
            d="M68 160 C52 190 52 206 64 220"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <path
            d="M132 160 C168 186 192 194 206 202"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <circle cx="66" cy="224" r="7" fill={INK} opacity={part(4)} />
          <circle cx="210" cy="204" r="7" fill={INK} opacity={part(4)} />
        </g>
      ) : think ? (
        <g>
          <path
            d="M66 160 C48 196 42 216 48 238"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <path
            d="M134 160 C158 174 168 190 146 202"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <circle cx="50" cy="240" r="7" fill={INK} opacity={part(4)} />
          <circle cx="142" cy="206" r="7" fill={INK} opacity={part(4)} />
        </g>
      ) : (
        <g>
          <path
            d={`M66 160 C48 196 ${leftArmX} 214 ${leftArmX + 4} 238`}
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <path
            d={`M134 160 C152 196 ${rightArmX} 214 ${rightArmX - 4} 238`}
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(4)}
          />
          <circle cx={leftArmX + 4} cy="240" r="7" fill={INK} opacity={part(4)} />
          <circle cx={rightArmX - 4} cy="240" r="7" fill={INK} opacity={part(4)} />
        </g>
      )}

      {/* legs */}
      {!teller ? (
        <g>
          <path d={`M86 306 L${leftLegX} 424`} fill="none" stroke={INK} strokeWidth="5" {...dash(5)} />
          <path d={`M114 306 L${rightLegX} 424`} fill="none" stroke={INK} strokeWidth="5" {...dash(5)} />
          <path
            d={`M${leftLegX} 424 L${leftLegX - 12} 432`}
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(5)}
          />
          <path
            d={`M${rightLegX} 424 L${rightLegX + 12} 432`}
            fill="none"
            stroke={INK}
            strokeWidth="5"
            {...dash(5)}
          />
        </g>
      ) : null}

      {/* optional parcel */}
      {carryBox ? (
        <g opacity={part(6)}>
          <rect
            x={rightArmX - 40}
            y="176"
            width="58"
            height="46"
            rx="4"
            fill={ORANGE}
            stroke={INK}
            strokeWidth="4"
          />
          <path d={`M${rightArmX - 40} 192 H${rightArmX + 18}`} stroke={INK} strokeWidth="3" />
          <path d={`M${rightArmX - 12} 176 V222`} stroke={INK} strokeWidth="3" />
        </g>
      ) : null}
    </g>
  );
};
