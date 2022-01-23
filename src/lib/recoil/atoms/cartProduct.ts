import {Fruit} from 'data/type/Fruit';
import {CartProduct} from 'data/type/Cart';
import {atom, selector} from 'recoil';

export const cartProductState = atom<CartProduct>({
  key: 'cartProduct',
  default: {
    fruit: {} as Fruit,
    quantity: 0,
    price: 0,
  },
});

export const getCartProductState = selector({
  key: 'getCartProduct',
  get: ({get}) => get(cartProductState),
});
