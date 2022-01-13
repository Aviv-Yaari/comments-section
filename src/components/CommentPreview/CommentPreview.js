import Score from "../Score/Score";
import Avatar from "../shared/Avatar";
import * as Style from "./CommentPreview.styled";
import { useDispatch, useSelector } from "react-redux";
import { startReplying } from "../../store/systemSlice";
import ActionButton from "../ActionButton/ActionButton";
import { rateComment, removeComment } from "../../store/commentSlice";

function CommentPreview({ comment, rootCommentId }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);

  const { id, score, diff, user, createdAt, replyingTo, content, replies } = comment;

  const handleReply = () => {
    const username = user.username;
    const commentId = rootCommentId || id;
    const replyId = replies ? null : id;
    dispatch(startReplying({ commentId, replyId, username }));
  };

  const handleDelete = () => {
    dispatch(removeComment(id));
  };

  const handleRate = (diff) => {
    dispatch(rateComment({ commentId: id, diff }));
  };

  return (
    <Style.CommentContainer>
      <Score score={score} diff={diff} onRate={handleRate} />
      <Style.Details>
        <Style.TopRow>
          <Avatar src={require("../../assets/" + user.image.png)} alt={user.username} />
          <Style.Username>{user.username}</Style.Username>
          <span>{createdAt}</span>
          <Style.Actions>
            {user?.username === currentUser?.username && (
              <ActionButton type="delete" onClick={handleDelete} />
            )}
            <ActionButton type="reply" onClick={handleReply} />
          </Style.Actions>
        </Style.TopRow>
        <p>
          {replyingTo && <Style.ReplyingTo>@{replyingTo} </Style.ReplyingTo>}
          {content}
        </p>
      </Style.Details>
    </Style.CommentContainer>
  );
}

export default CommentPreview;
