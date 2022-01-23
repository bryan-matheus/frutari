import {Cart} from 'data/type/Cart';
import {atom, selector} from 'recoil';

export const cartState = atom<Cart>({
  key: 'cart',
  default: {
    products: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
});

export const getCart = selector({
  key: 'getCart',
  get: ({get}) => get(cartState),
});
