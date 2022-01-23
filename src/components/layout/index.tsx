import React from 'react';
import {Page, Text, useMediaQuery} from '@geist-ui/core';
import {Link} from '@geist-ui/core';
import {NavigationBar} from './navigation/NavigationBar';

type Props = {
  children: React.ReactNode
}

/**
 * Displays the layout.
 *
 * @return {React.ReactElement} Layout.
 */
export function Layout({children}: Props): React.ReactElement {
  const xs = useMediaQuery('xs');

  return (
    <Page dotBackdrop padding={xs ? '0' : undefined}>
      <NavigationBar />
      {children}
      <Page.Footer>
        <Text p>Made with ❤️ by {''}
          <Link
            style={{textDecoration: 'underline'}}
            color
            href='https://github.com/bryan-matheus'>
              Bryan Matheus
          </Link>
        </Text>
      </Page.Footer>
    </Page>
  );
}
