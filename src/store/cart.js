import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  // items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, prod } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, prod });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    removeItem(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      console.log(state.items);
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
