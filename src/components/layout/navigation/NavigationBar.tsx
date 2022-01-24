import React from 'react';
import {Text} from '@geist-ui/core';
import {ThemeIcon} from 'components/theme/ThemeIcon';
import Image from 'next/image';
import {Items, Navbar, NavbarLogoWrapper} from 'styles/navigation/Navbar';
import Link from 'next/link';
import {CartButton} from 'components/cart/CartButton';

/**
 * Displays navigation bar.
 *
 * @return {React.ReactElement} Navigation bar.
 */
export function NavigationBar(): React.ReactElement {
  return (
    <Navbar>
      <Link href={'/'}>
        <NavbarLogoWrapper>
          <Image
            src={'/logo.png'}
            width={36}
            alt={'logo'}
            objectFit={'contain'}
            height={36} />
          <Text h2 margin={0}>Frutari</Text>
        </NavbarLogoWrapper>
      </Link>
      <Items>
        <ThemeIcon />
        <CartButton />
      </Items>
    </Navbar>
  );
}
