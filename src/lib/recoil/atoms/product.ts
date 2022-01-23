import {Product} from 'data/type/Product';
import {atom, selector} from 'recoil';

export const productState = atom<Product>({
  key: 'productState',
  default: {} as Product,
});

export const getProduct = selector({
  key: 'getProduct',
  get: ({get}) => get(productState),
});
