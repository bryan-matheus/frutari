import React from 'react';
import {Link, Page, Text} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {Items, Navbar} from 'styles/navigation/Navbar';
import {ThemeIcon} from 'components/theme/ThemeIcon';

/**
 * Display home page.
 *
 * @return {React.ReactElement} Home page.
 */
export default function Home(): React.ReactElement {
  return (
    <Page>
      <Navbar>
        <Text h2>Frutari</Text>
        <Items>
          <ThemeIcon />
          <ShoppingCart cursor={'pointer'} />
        </Items>
      </Navbar>
    </Page>
  );
}
