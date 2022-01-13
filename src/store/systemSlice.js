import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replyingTo: null,
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    startReplying: (state, action) => {
      const { commentId, replyId, username } = action.payload;
      state.replyingTo = { commentId, replyId, username };
    },
  },
});

// Action creators are generated for each case reducer function
export const { startReplying } = systemSlice.actions;

export default systemSlice.reducer;
