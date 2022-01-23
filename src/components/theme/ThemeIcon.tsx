import React from 'react';
import {Moon, Sun} from '@geist-ui/icons';
import {useRecoilState} from 'recoil';
import {themeState} from 'lib/recoil/atoms/theme';

/**
 * Display an icon from the theme.
 *
 * @param {Props} props Component properties.
 * @return {React.ReactElement} Icon.
 */
export function ThemeIcon(): React.ReactElement {
  const [theme, setTheme] = useRecoilState(themeState);

  const onThemeChange = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');

    if (typeof window !== 'undefined') {
      localStorage.setItem('frutariTheme', theme === 'dark' ? 'light' : 'dark');
    }
  };

  if (theme === 'light') {
    return <Moon onClick={onThemeChange} cursor={'pointer'}/>;
  } else {
    return <Sun onClick={onThemeChange} cursor={'pointer'}/>;
  }
}
