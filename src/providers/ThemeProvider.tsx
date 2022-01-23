import React, {useEffect} from 'react';
import {CssBaseline, GeistProvider} from '@geist-ui/core';
import {useRecoilState} from 'recoil';
import {themeState} from 'lib/recoil/atoms/theme';

type Props = {children: React.ReactElement}

/**
 * Theme provider.
 *
 * @param {React.ReactNode} children Children.
 * @return {React.ReactElement} React element.
 */
export default function ThemeProvider({children}: Props): React.ReactElement {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('frutariTheme') !== undefined) {
        setTheme(localStorage.getItem('frutariTheme'));
      }
    }
  }, [theme]);

  return (
    <GeistProvider themeType={theme as string}>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}
