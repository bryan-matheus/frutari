import React from 'react';
import {Link, Page, Text} from '@geist-ui/core';
import {Moon, ShoppingCart, Sun} from '@geist-ui/icons';
import {Items, Navbar} from 'styles/navigation/Navbar';

/**
 * Display home page.
 *
 * @return {React.ReactElement} Home page.
 */
export default function Home(): React.ReactElement {
  const [theme, setTheme] = React.useState('light');

  const onThemChange = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Page>
      <Navbar>
        <Text h2>Frutari</Text>
        <Items>
          {theme === 'light' ? (
            <Moon onClick={onThemChange} cursor={'pointer'}/>
          ) : (
            <Sun onClick={onThemChange} cursor={'pointer'}/>
          )}

          <Link href="#">
            <ShoppingCart />
          </Link>
        </Items>
      </Navbar>
    </Page>
  );
}
