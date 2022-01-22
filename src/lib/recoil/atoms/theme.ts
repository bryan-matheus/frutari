import {atom, selector} from 'recoil';

export const themeState = atom({
  key: 'theme',
  default: 'light',
});

export const getTheme = selector({
  key: 'getTheme', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const theme = get(themeState);

    return theme;
  },
});
