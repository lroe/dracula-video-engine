import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {BROWN_SHIRT, GREEN, INK, PAPER} from '../theme';
import {Character} from '../lib/Character';
import {Burst, Ground, Robot, ThoughtCloud} from '../lib/Doodles';
import {HandTitle, TypeOn} from '../lib/TypeOn';
import {progressAt} from '../lib/motion';

/**
 * Opening metaphor: a person imagines a robot taking a job.
 * 6 seconds, one continuous take, built only from draw-ons.
 */
export const MythBubble: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;

  const character = progressAt(t, 0.0, 1.55);
  const cloud = progressAt(t, 0.35, 1.55);
  const tail = progressAt(t, 1.35, 0.4);
  const robot = progressAt(t, 1.45, 0.7);
  const workerIn = progressAt(t, 1.7, 0.6);

  // worker walks right and drains of colour
  const walk = t > 2.7 && t < 5.0;
  const walkT = Math.max(0, Math.min(1, (t - 2.7) / 2.3));
  const workerX = 1400 + walkT * 120;
  const workerOpacity = 1 - walkT * 0.9;
  const phase = walk ? (t - 2.7) * 9 : 0;
  const burst = progressAt(t, 4.15, 0.35);

  return (
    <AbsoluteFill style={{backgroundColor: PAPER}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
        {/* floor under the dreamer */}
        <Ground x1={70} x2={640} y={890} progress={progressAt(t, 0.3, 0.5)} shadowX={300} shadowW={170} />

        {/* the dreamer */}
        <Character
          x={300}
          y={890}
          scale={0.82}
          shirt={BROWN_SHIRT}
          pose="think"
          progress={character}
        />

        {/* thought cloud + tail */}
        <ThoughtCloud
          cx={1160}
          cy={470}
          rx={520}
          ry={340}
          progress={cloud}
          tailProgress={tail}
          seed={4}
        />

        {/* world inside the cloud */}
        <Ground x1={1000} x2={1520} y={706} progress={progressAt(t, 1.1, 0.4)} shadow={false} />
        <Robot x={1100} y={706} scale={0.72} progress={robot} />
        <g opacity={workerOpacity}>
          <Character
            x={workerX}
            y={706}
            scale={0.52}
            shirt={GREEN}
            expression="sad"
            progress={workerIn}
            walkPhase={walk ? phase : null}
          />
        </g>

        <Burst x={1150} y={278} scale={0.78} progress={burst} />
      </svg>

      {/* caption */}
      <div style={{position: 'absolute', left: 0, top: 888, width: 1920, textAlign: 'center'}}>
        <HandTitle x={960} y={0} align="center" size={42} color={INK}>
          <TypeOn text="a single dramatic moment" start={4.85} dur={0.95} />
        </HandTitle>
      </div>
    </AbsoluteFill>
  );
};
