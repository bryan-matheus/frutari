import {styled} from '@stitches/react';

export const Navbar = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const NavbarLogoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
});

export const Items = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});
