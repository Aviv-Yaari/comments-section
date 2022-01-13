import Avatar from "../shared/Avatar";
import { useDispatch, useSelector } from "react-redux";
import * as Style from "./AddComment.styled";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { addComment } from "../../store/commentSlice";

function AddComment({ isBottom }) {
  const [content, setContent] = useState("");
  const replyingTo = useSelector((state) => state.system.replyingTo);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const prefix = !replyingTo || isBottom ? "" : `@${replyingTo.username} `;

  useEffect(() => {
    if (replyingTo) setContent(prefix);
  }, [replyingTo, prefix]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const rawContent = isBottom ? content : content.split(prefix)[1];
    dispatch(
      addComment({ content: rawContent || content, user, replyingTo: isBottom ? null : replyingTo })
    );
    setContent("");
  };

  const handleChange = (ev) => {
    const { value } = ev.target;
    if (!replyingTo || isBottom) setContent(value);
    else setContent(prefix + (value.split(prefix)[1] || ""));
  };

  return (
    <Style.AddCommentContainer as="form" onSubmit={handleSubmit}>
      <Avatar src={require("../../assets/" + user.image.png)} alt={user.username} size="2.5em" />
      <Style.Input
        placeholder="Add a comment..."
        rows={3}
        value={content}
        onChange={handleChange}
      />
      <Button>Send</Button>
    </Style.AddCommentContainer>
  );
}

export default AddComment;
