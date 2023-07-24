import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartHandler(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
