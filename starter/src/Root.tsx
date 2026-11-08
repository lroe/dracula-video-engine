import React from 'react';
import {Composition} from 'remotion';
import {Demo} from './Video';
import './fonts';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SketchExplainerDemo"
      component={Demo}
      durationInFrames={360}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
