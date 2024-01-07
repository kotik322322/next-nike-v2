import { ProductType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WishListState {
  wishList: ProductType[];
}

const initialState: WishListState = {
  wishList: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state: WishListState, action: PayloadAction<ProductType>) => {
      const existingProduct: ProductType | undefined = state.wishList.find(
        (product: ProductType) => product._id === action.payload._id
      );

      if (existingProduct) {
        return;
      } else {
        state.wishList.push(action.payload) 
      }
    },
    removeFromWishlist: (
      state: WishListState,
      action: PayloadAction<ProductType>
    ) => {
      const existingProduct: ProductType | undefined = state.wishList.find(
        (product: ProductType) => product._id === action.payload._id
      );
      state.wishList = state?.wishList.filter(
        (product) => product._id !== existingProduct?._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
