import data from "./data.json";
import {
  ADDCOMMENT,
  DELETE,
  ADDReply,
  inCreaseLike,
  deCreaseLike,
  deCreaseRepLike,
  inCreaseRepLike
} from "./type";
// import data from "../../assets/images/avatars"
export const likeAction = (id) => ({
  type: inCreaseLike,
  id: id
});
export const dislikeAction = (id) => ({
  type: deCreaseLike,
  
    id: id
});
export const likereplyAction = (id) => ({
  type: inCreaseRepLike,
  id: id
});
export const dislikereplyAction = (id) => ({
  type: deCreaseRepLike,
  
    id: id
});
export const deletAction = (id) => ({
  type: DELETE,
  id
});
export function uniqueId() {
  return Math.random() * 1000;
}
export const addCommentAction = (content, score, createdAt, id) => ({
  type: ADDCOMMENT,
  payload: {
    id: uniqueId(),
    content: content,

    score,
    createdAt,
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
