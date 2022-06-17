import { styled } from '@stitches/react';

const ComputerAvatar = styled('div', {
  width: '128px',
  height: '163px',

  background: `url(/pcArt.png)`,
});

function Computer() {
  return <ComputerAvatar />;
}

export default Computer;
