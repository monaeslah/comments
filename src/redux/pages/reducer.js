import { ADDCOMMENT, ADDReply, ADDReplyToReply, DELETE } from "./type";
const data = require("./data.json");

// comments: {
//     count: action.count,
//     products: [
//       ...state.catalogItems['products'],
//       action.catalogItems  ?
//         action.catalogItems['products']
//         :
//         {}
//     ]
//   }

const keys = Object.keys(data);
export const Comment = (state = data, action) => {
  console.log("state", state);
  switch (action.type) {
    case ADDCOMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case ADDReply:
      console.log("currentComment", action.payload);
      const comments = state.comments;
      const currentComment = comments.find(
        (item) => item.id === action.payload.id
      );
      currentComment.replies = [
        ...currentComment.replies,
        action.payload.newReply,
      ];
      return {
        ...state,
        comments: [
          ...comments.filter((item) => item.id !== action.payload.id),
          currentComment,
        ].sort((a, b) => (a.id > b.id ? 1 : -1)),
      };
    case ADDReplyToReply:
      console.log("currentComment", action.payload);

      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE:
      console.log(action.id);
      return {
        ...state,
        comments: state.comments.filter((item, index) => item.id !== action.id),
        replies: state.comments.replies.filter(
          (item, index) => item.id !== action.id
        ),
      };
    default:
      return state;
  }
};
