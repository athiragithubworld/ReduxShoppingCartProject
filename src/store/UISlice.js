import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    cartHandler(state) {
      state.showCart = !state.showCart;
    },
    showErrorNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = uiSlice.actions;

export default uiSlice.reducer;
