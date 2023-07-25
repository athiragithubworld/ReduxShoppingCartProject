import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./UISlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    uicart: uiReducer,
    cart: cartReducer,
  },
});

export default store;
