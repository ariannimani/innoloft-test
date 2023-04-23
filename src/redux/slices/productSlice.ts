import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// declaring the types for our state
export type ProductState = {
  products: any[];
};

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.counter;

export default productSlice.reducer;
