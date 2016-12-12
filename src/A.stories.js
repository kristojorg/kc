import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import A from './A';

const testURL='https://prismic-io.s3.amazonaws.com/bea-helman/ba6f413864b5f6aa12693d71a4c18fb04607b05d_img_4318.png';

storiesOf('A', module)
  .add('Hovered', () => (
    <div style={{width:400,height:400}} >
      <A
        to={testURL}
        thickness={5}
      >
        This is a test link!
      </A>
    </div>
  ))
  .add('Unhovered Line False', () => (
    <div style={{width:400,height:400}} >
      <A
        to={testURL}
        thickness={5}
        unHoverLine={false}
      >
        This is a test link!
      </A>
    </div>
  ));
