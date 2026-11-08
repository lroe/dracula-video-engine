import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {BROWN, GREEN, INK, PAPER, PURPLE} from '../theme';
import {Character} from '../lib/Character';
import {Brace, CashRegister, Desk, Ground, Pill} from '../lib/Doodles';
import {HandTitle, TypeOn} from '../lib/TypeOn';
import {progressAt} from '../lib/motion';

/**
 * "A role is a bundle of tasks" template.
 * Left: giant character at a desk.  Middle: brace.  Right: pills appear one
 * per spoken task.  Mirror the whole composition for the next example role.
 */
export const RoleTasks: React.FC<{
  title?: string;
  labels?: string[];
  shirt?: string;
  mirror?: boolean;
}> = ({
  title = 'a bank teller',
  labels = ['counts cash', 'processes deposits', 'answers questions', 'spots fraud'],
  shirt = PURPLE,
  mirror = false,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;

  const titleIn = progressAt(t, 0.12, 0.8);
  const desk = progressAt(t, 0.18, 0.9);
  const teller = progressAt(t, 0.45, 1.0);
  const brace = progressAt(t, 1.15, 0.7);

  return (
    <AbsoluteFill style={{backgroundColor: PAPER}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        <Ground x1={120} x2={980} y={948} progress={desk} shadowX={560} shadowW={420} />
        <Desk x={210} y={730} w={710} progress={desk} />
        <CashRegister x={670} y={640} progress={progressAt(t, 0.55, 0.7)} />
        <Character
          x={548}
          y={916}
          scale={0.95}
          shirt={shirt}
          pose="teller"
          hairStyle="bun"
          expression="happy"
          progress={teller}
        />
        <Brace x={1012} y={270} h={560} side="left" progress={brace} />
      </svg>

      <div style={{position: 'absolute', left: 300, top: 148}}>
        <HandTitle x={0} y={0} size={76} color={INK}>
          <TypeOn text={title} start={0.12} dur={0.75} />
        </HandTitle>
      </div>

      {labels.map((label, i) => (
        <Pill
          key={label}
          cx={1400}
          y={280 + i * 92}
          label={label}
          start={1.45 + i * 0.75}
          index={i}
        />
      ))}
    </AbsoluteFill>
  );
};
