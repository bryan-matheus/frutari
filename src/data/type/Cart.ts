import {Fruit} from './Fruit';

export interface CartProduct {
  id?: string;
  fruit: Fruit;
  quantity: number;
  price: number;
}

export interface Cart {
  products?: CartProduct[];
  shipping?: number;
  subtotal?: number;
  total?: number;
}
