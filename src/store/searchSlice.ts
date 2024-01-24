import { ProductType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchList: ProductType[];
}

const initialState: SearchState = {
  searchList: [],
};

export const searchSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    addToSearchList: (state: SearchState, action: PayloadAction<ProductType[]>) => {
      state.searchList = action.payload
  },
}})

export const { addToSearchList } = searchSlice.actions;

export default searchSlice.reducer;
