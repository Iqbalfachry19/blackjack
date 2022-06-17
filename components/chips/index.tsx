import { styled } from '@stitches/react';

const ChipsImage = styled('div', {
  width: '36px',
  height: '36px',

  marginLeft: '10px',

  background: `url(/PokerChips.png)`,
  backgroundSize: '190px',
});

function Chips() {
  return <ChipsImage></ChipsImage>;
}

export default Chips;
