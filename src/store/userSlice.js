import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  user: data.currentUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
