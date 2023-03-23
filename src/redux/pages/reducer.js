import {
  ADDCOMMENT,
  ADDReply,
  ADDReplyToReply,
  DELETE,
  inCreaseLike,
  deCreaseLike,
  inCreaseRepLike
} from "./type";
const data = require("./data.json");


const keys = Object.keys(data);
export const Comment = (state = data, action) => {
  switch (action.type) {
    case ADDCOMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case ADDReply:
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

    case DELETE:
      return {
        ...state,
        comments: state.comments.filter((item, index) => item.id !== action.id),
      };
    case inCreaseLike:
      return {
        ...state,
        comments: state.comments.map((comment, index) => 
        comment?.id === action.id
            ? { ...comment, score: comment.score + 1 }
            : comment
            )
      };
    case deCreaseLike:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.id
            ? { ...comment, score: comment.score - 1 }
            : comment
        ),
      };
      case inCreaseRepLike:
        console.log("action id is", action);
        const replies = state.comments.replies;
        return {
          ...state,
          comments: replies.score + 1
        };
       
    default:
      return state;
  }
};
