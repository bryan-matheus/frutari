import {atom, selector} from 'recoil';

export const themeState = atom<string | null>({
  key: 'themeState',
  default: 'dark',
});

export const getTheme = selector({
  key: 'getTheme', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => get(themeState),
});
