import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "global";

// declaring the types for our state
export type ProductState = {
  products: Product[] | [];
};

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    editProduct: (state, action: PayloadAction<Partial<Product>>) => {
      const updatedProduct = action.payload;
      const productId = updatedProduct.id;
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, ...updatedProduct };
        }
        return product;
      });
      state.products = updatedProducts;
    },
  },
});

export const { setProducts, deleteProduct, editProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export const selectProductById =
  (id: number) =>
  (state: RootState): Product => {
    const product = state.product.products.find((prod) => prod.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  };

export default productSlice.reducer;
