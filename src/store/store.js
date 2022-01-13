import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";
import systemReducer from "./systemSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    system: systemReducer,
    comment: commentReducer,
  },
});
