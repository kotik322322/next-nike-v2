import { CartProductType, ProductType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
  cartProducts: CartProductType[];
  cartTotalQuantity: number;
}

const initialState: StoreState = {
  cartProducts: [],
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //addToCart
    addToCart: (state: StoreState, action: PayloadAction<ProductType>) => {
      const existingProduct: CartProductType | undefined = state.cartProducts.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const tempProduct: CartProductType = { ...action.payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
      }
    },
    //increment
    increment: (state: StoreState, action: PayloadAction<CartProductType>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      state.cartProducts[productIndex].quantity += 1;
    },
    //decrement
    decrement: (state: StoreState, action: PayloadAction<CartProductType>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      state.cartProducts[productIndex].quantity -= 1;
      if (action.payload.quantity <= 1) {
        state.cartProducts[productIndex].quantity = 1;
      }
    },
    removeFromCart: (
      state: StoreState,
      action: PayloadAction<CartProductType>
    ) => {
      const newCart: CartProductType[] = state.cartProducts.filter(
        (product) => product._id !== action.payload._id
      );
      state.cartProducts = newCart;
    },
    clearCart: (state: StoreState) => {
      state.cartProducts = [];
      // toast("Clear")
      // console.log('first')
    },
    actualCartQuantity: (state: StoreState) => {
      const quantity = state.cartProducts.reduce(
        (accumulator: number, product: CartProductType) => {
          return accumulator + product.quantity;
        },
        0
      );

      state.cartTotalQuantity = quantity
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart, actualCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
