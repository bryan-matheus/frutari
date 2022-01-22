import React from 'react';
import {CssBaseline, GeistProvider} from '@geist-ui/core';
import {useRecoilValue} from 'recoil';
import {themeState} from 'lib/recoil/atoms/theme';

type Props = {children: React.ReactElement}

/**
 * Theme provider.
 *
 * @param {React.ReactNode} children Children.
 * @return {React.ReactElement} React element.
 */
export default function ThemeProvider({children}: Props): React.ReactElement {
  const theme = useRecoilValue(themeState);

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}
