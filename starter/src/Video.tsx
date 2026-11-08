import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {MythBubble} from './scenes/MythBubble';
import {RoleTasks} from './scenes/RoleTasks';
import {FadeToBackground} from './lib/motion';
import {BG} from './theme';

/**
 * Demo cut: the two most reusable templates.
 * Replace this with a storyboard-driven timeline (see SKILL.md).
 */
export const Demo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: BG}}>
      <Sequence from={0} durationInFrames={186} name="Myth: one dramatic moment">
        <MythBubble />
      </Sequence>

      <Sequence from={186} durationInFrames={174} name="Role: a bank teller">
        <RoleTasks />
      </Sequence>

      <FadeToBackground start={11.55} dur={0.4} />
    </AbsoluteFill>
  );
};
