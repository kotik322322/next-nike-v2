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

export interface CartProductType extends ProductType {
  quantity: number
}

export interface CartState {
  cart: {
    cartProducts: CartProductType[],
    cartTotalQuantity: number
  }
}

export interface WishListState {
  wishList: {
    wishList: ProductType[]
  }
} 
