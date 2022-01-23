export type Nutritions = {
  carbohydrates: number;
  protein: number;
  fat: number
  calories: number;
  sugar: number;
}

export type Fruit = {
  id: number;
  genus: string;
  name: string;
  family: string;
  order: string;
  nutritions: Nutritions;
};
