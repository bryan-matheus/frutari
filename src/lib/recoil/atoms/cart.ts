import {atom, selector} from 'recoil';

export const cartState = atom({
  key: 'cart',
  default: [],
});

export const getCartProducts = selector({
  key: 'getCartProducts',
  get: ({get}) => get(cartState),
});
