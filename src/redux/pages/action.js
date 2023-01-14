import data from "./data.json";
import { ADD, DELETE } from "./type";
// import data from "../../assets/images/avatars"
export const deletAction = (id) => ({
  type: DELETE,
  id,
});
export function uniqueId() {
  return Math.random() * 1000;
}
export const replyAction = (content, replyingTo, score, createdAt, id) => ({
  type: ADD,
  payload: {
    id: uniqueId(),
    content: content,
    replyingTo,
    score,
    createdAt,
    user: {
      username: data.currentUser.username,
      image: data.currentUser.image.png,
    },
    replies: [],
  },
});

// "image": {
//   "png": "./images/avatars/image-ramsesmiron.png",
//   "webp": "./images/avatars/image-ramsesmiron.webp"
// },
