export type Restaurant = {
    id: number;
    name: string;
    location: string;
    drinks: Drink[];
  }
  
  export type Drink = {
    id: number;
    sku: string;
    name: string;
    imgUrl: string;
    restaurantId?: number;
    price?: number;
    restaurant?: Restaurant | null;
  }