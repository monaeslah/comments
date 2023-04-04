import data from "./data.json";
import {
  ADDCOMMENT,
  DELETE,
  ADDReply,
  UPVOTECOMMENT,
  UPVOTE_REPLY,
  DOWNVOTE_COMMENT,
  DOWNVOTE_REPLY,
} from "./type";
// import data from "../../assets/images/avatars"

export const upvoteComment = (commentId, score) => {
  return {
    type: UPVOTECOMMENT,
    payload: { commentId, score },
  };
};

export const upvoteReply = (commentId, score) => {
  return {
    type: UPVOTE_REPLY,
    payload: { commentId, score },
  };
};

export const downvoteComment = (commentId, score) => {
  return {
    type: DOWNVOTE_COMMENT,
    payload: { commentId, score },
  };
};

export const downvoteReply = (id) => {
  return {
    type: DOWNVOTE_REPLY,
    payload: id,
  };
};
export const deletAction = (id) => ({
  type: DELETE,
  id,
});
export function uniqueId() {
  return Math.random() * 1000;
}
export const addCommentAction = (content, createdAt, id) => ({
  type: ADDCOMMENT,
  payload: {
    id: uniqueId(),
    content: content,
    score: 0, // set initial score to 0
    createdAt: new Date(),
    user: {
      username: data.currentUser.username,
      image: data.currentUser.image.png,
    },
    replies: [],
  },
});

export const addReplyAction = (
  currentReplayIdClicked,
  content,
  createdAt,
  score,
  replyingTo,
  username
) => ({
  type: ADDReply,
  payload: {
    id: currentReplayIdClicked,
    newReply: {
      id: uniqueId(),
      content: content,
      createdAt,
      score,
      replyingTo,
      user: {
        image: {
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp,
        },
        username: data.currentUser.username,
      },
    },
  },
});

export const addReplyToRepliesAction = (
  currentReplayIdClicked,
  content,
  createdAt,
  score,
  replyingTo,
  username
) => ({
  type: ADDReply,
  payload: {
    id: currentReplayIdClicked,
    newReply: {
      id: uniqueId(),
      content: content,
      createdAt,
      score,
      replyingTo,
      user: {
        image: {
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp,
        },
        username: data.currentUser.username,
      },
    },
  },
});
export const saveWriterDetailAction = (payload) => {
  dispatchEvent({
    type: "ID",
    payload,
  });
};
