import React from 'react';
import {Moon, Sun} from '@geist-ui/icons';

type Props = {
    theme: 'light' | 'dark';
    onThemeChange: () => void;
}

/**
 * Display an icon from the theme.
 *
 * @param {Props} props Component properties.
 * @return {React.ReactElement} Icon.
 */
export function ThemeIcon(props: Props): React.ReactElement {
  const {theme = 'light', onThemeChange} = props;

  const icons = {
    light: <Moon onClick={onThemeChange} cursor={'pointer'}/>,
    dark: <Sun onClick={onThemeChange} cursor={'pointer'}/>,
  };

  return icons[theme];
}
