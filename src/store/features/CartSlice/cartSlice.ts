import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemData } from "@/pages/Public/Cart/types";

interface CartState {
  items: CartItemData[];
  wishlist: number[]; // Array of product IDs
}

const initialState: CartState = {
  items: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemData>) => {
      const { id, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size: number }>
    ) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    updateCartItem: (
      state,
      action: PayloadAction<{
        id: number;
        oldSize: number;
        newSize?: number;
        newQuantity?: number;
      }>
    ) => {
      const { id, oldSize, newSize, newQuantity } = action.payload;
      const item = state.items.find((i) => i.id === id && i.size === oldSize);
      if (item) {
        if (newSize !== undefined) item.size = newSize;
        if (newQuantity !== undefined) item.quantity = newQuantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleWishlist: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.wishlist.indexOf(id);
      if (index > -1) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(id);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
  toggleWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
