import {styled} from '@stitches/react';

export const Main = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Bubble = styled('div', {
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  backgroundColor: '#F81CE5',
  borderRadius: '50%',
  width: '18px',
  height: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const WrapperRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
