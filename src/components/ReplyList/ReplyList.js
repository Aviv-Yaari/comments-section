import { useSelector } from "react-redux";
import AddComment from "../AddComment/AddComment";
import CommentPreview from "../CommentPreview/CommentPreview";
import * as Style from "./ReplyList.styled";

function ReplyList({ replies, commentId }) {
  const replyingTo = useSelector((state) => state.system.replyingTo);
  const isReplying = replyingTo?.commentId === commentId;
  return (
    <Style.Container>
      <Style.Line />
      <Style.List>
        {replies.map((reply) => (
          <CommentPreview key={reply.id} comment={reply} rootCommentId={commentId} />
        ))}
        {isReplying && <AddComment replyingToUsername={replyingTo.username} />}
      </Style.List>
    </Style.Container>
  );
}
export default ReplyList;
