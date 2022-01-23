import {Cart} from 'data/type/Cart';
import {atom, selector} from 'recoil';

export const cartState = atom<Cart>({
  key: 'cartState',
  default: {
    products: [],
    total: 0,
  } as Cart,
});

export const getCart = selector({
  key: 'getCart',
  get: ({get}) => get(cartState),
});
