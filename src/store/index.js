import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./pointSlice";

export const store = configureStore({
  reducer: {
    point: pointReducer,
  },
});
