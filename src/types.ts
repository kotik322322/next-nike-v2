export interface ProductType {
  _id: string;
  mainImg: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  newPrice: number;
  isNew?: boolean;
  category?: string;
  sizes?: string[];
}

// export interface ICartProduct extends IProduct {
//   quantity: number
// }

// export interface CartState {
//   cart: {
//     cartProducts: ICartProduct[],
//     cartTotalQuantity: number
//   }
// }

// export interface WishListState {
//   wishList: {
//     wishList: IProduct[]
//   }
// } 
