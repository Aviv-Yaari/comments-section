import { v4 as uuidv4 } from "uuid";

export const commentService = { addComment, removeComment, findById, rateComment };

function addComment(content, user, replyingTo, comments) {
  const newComment = {
    id: uuidv4(),
    content,
    createdAt: "Now",
    score: 0,
    user,
    replies: [],
    replyingTo: replyingTo?.username,
  };
  if (replyingTo?.commentId) {
    const replyingToComment = findById(comments, replyingTo.commentId);
    replyingToComment.replies.push(newComment);
  } else {
    comments.push(newComment);
  }
}

function removeComment(commentId, comments) {
  let idx = comments.findIndex((comment) => comment.id === commentId);
  if (idx !== -1) return comments.splice(idx, 1);
  for (const comment of comments) {
    idx = comment.replies.findIndex((reply) => reply.id === commentId);
    if (idx !== -1) return comment.replies.splice(idx, 1);
  }
}

function rateComment(commentId, diff, comments) {
  const comment = findById(comments, commentId);
  if (comment.diff === diff) comment.diff = 0;
  else comment.diff = diff;
}

function findById(comments, commentId) {
  for (const comment of comments) {
    if (comment.id === commentId) return comment;
    for (const reply of comment.replies) {
      if (reply.id === commentId) return reply;
    }
  }
}
