import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    cartHandler(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const UIActions = uiSlice.actions;

export default uiSlice.reducer;
