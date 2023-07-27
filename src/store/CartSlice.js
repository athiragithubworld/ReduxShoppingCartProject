import { createSlice } from "@reduxjs/toolkit";
import { UIActions } from "./UISlice";

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalAmount++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount--;

      // state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      // state.totalAmount = state.totalAmount - newItem.price;
      // state.items.forEach((item) => {
      //   if (item.id === newItem.id && newItem.quantity <= 1) {
      //     item.quantity = Number(item.quantity) - Number(newItem.quantity);

      //     if (item.quantity === 0) {
      //       state.items = state.items.filter((pdt) => pdt.id !== item.id);
      //     }
      //   }
      //   if (item.id === newItem.id && newItem.quantity > 1) {
      //     item.quantity = Number(item.quantity) - 1;
      //   }
      // });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
