import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

// Fonts are bundled in /public/fonts so renders never need a network.
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
