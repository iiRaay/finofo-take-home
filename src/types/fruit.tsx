export interface Fruit {
  name: string;
  family: string;
  order: string;
  genus: string;
  calories: number;
}

export interface JarFruit {
  id: string;
  fruit: Fruit;
}
