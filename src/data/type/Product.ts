import {Fruit} from './Fruit';

export interface Product {
  id: number;
  fruit: Fruit;
  quantity: number;
  price: number;
}
