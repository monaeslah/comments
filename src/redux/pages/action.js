import data from "./data.json";
import { ADD } from "./type";
// import data from "../../assets/images/avatars"
export const readJson = (data) => ({
  type: "GET",
  payload: data,
  // return (dispatch) => {
  //   return require("/data.json");
  // };
});

export const replyAction = (reply) => ({
  type: ADD,
  payload: reply,
});

// "image": {
//   "png": "./images/avatars/image-ramsesmiron.png",
//   "webp": "./images/avatars/image-ramsesmiron.webp"
// },
