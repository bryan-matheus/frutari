import React from 'react';
import {Text} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {ThemeIcon} from 'components/theme/ThemeIcon';
import Image from 'next/image';
import {Items, Navbar, NavbarLogoWrapper} from 'styles/navigation/Navbar';

/**
 * Displays navigation bar.
 *
 * @return {React.ReactElement} Navigation bar.
 */
export function NavigationBar(): React.ReactElement {
  return (
    <Navbar>
      <NavbarLogoWrapper>
        <Image
          src={'/logo.png'}
          width={36}
          height={36} />
        <Text h2 margin={0}>Frutari</Text>
      </NavbarLogoWrapper>
      <Items>
        <ThemeIcon />
        <ShoppingCart cursor={'pointer'} />
      </Items>
    </Navbar>
  );
}
