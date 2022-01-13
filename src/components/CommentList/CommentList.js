import { useState } from "react";
import AddComment from "../AddComment/AddComment";
import CommentPreview from "../CommentPreview/CommentPreview";
import ReplyList from "../ReplyList/ReplyList";
import * as Style from "./CommentList.styled";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function CommentList() {
  const comments = useSelector((state) => state.comment.comments);
  const replyingTo = useSelector((state) => state.system.replyingTo);

  return (
    <Style.Container>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentPreview comment={comment} />
          {(replyingTo?.commentId === comment.id || comment.replies?.length > 0) && (
            <ReplyList replies={comment.replies} commentId={comment.id} />
          )}
        </div>
      ))}
      <AddComment isBottom />
    </Style.Container>
  );
}

export default CommentList;
