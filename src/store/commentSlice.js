import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
import { commentService } from "../services/commentService";

const initialState = {
  comments: data.comments,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { content, user, replyingTo } = action.payload;
      commentService.addComment(content, user, replyingTo, state.comments);
    },
    removeComment: (state, action) => {
      const commentId = action.payload;
      commentService.removeComment(commentId, state.comments);
    },
    rateComment: (state, action) => {
      const { commentId, diff } = action.payload;
      commentService.rateComment(commentId, diff, state.comments);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComment, removeComment, rateComment } = commentSlice.actions;

export default commentSlice.reducer;
