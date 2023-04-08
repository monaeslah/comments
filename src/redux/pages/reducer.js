import {
  ADDCOMMENT,
  ADDReply,
  DELETE,
  UPVOTECOMMENT,
  UPVOTE_REPLY,
  DOWNVOTE_COMMENT,
  DOWNVOTE_REPLY,
  ADDReplyToCom
} from "./type";
const data = require("./data.json");
const initialState = {
  comments: data.comments.map((comment) => {
    return {
      ...comment,
      score: 0,
      replies: comment.replies.map((reply) => {
        return {
          ...reply,
          score: 0,
        };
      }),
    };
  }),
};

const keys = Object.keys(data);
export const Comment = (state = data, action) => {
  switch (action.type) {
    case ADDCOMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

      case ADDReplyToCom:
        console.log("newReplyToCm",action.payload.newReplyToCm);
        const allComments = state.comments;
        const setCurrentComment = allComments.find(
          (item) => item.user.username === action.payload.newReplyToCm.listedReply
        );
        console.log("currentComment",setCurrentComment);
  
        setCurrentComment.replies = [
          ...setCurrentComment.replies,
          action.payload.newReplyToCm,
        ];
        return {
          ...state,
          replies: [
            // ...comments.filter((item) => item.id !== action.payload.id),
            setCurrentComment.replies,
          ].sort((a, b) => (a.id > b.id ? 1 : -1)),
        };
    case ADDReply:
      console.log(action.payload.newReply);
      const comments = state.comments;
      const currentComment = comments.find(
        (item) => item.user.username === action.payload.newReply.listedReply
      );
      console.log("currentComment",currentComment);

      currentComment.replies = [
        ...currentComment.replies,
        action.payload.newReply,
      ];
      return {
        ...state,
        replies: [
          // ...comments.filter((item) => item.id !== action.payload.id),
          currentComment.replies,
        ].sort((a, b) => (a.id > b.id ? 1 : -1)),
      };

    case DELETE:
      return {
        ...state,
        comments: state.comments.filter((item, index) => item.id !== action.id),
      };
    case UPVOTECOMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              score: comment.score + 1,
            };
          }
          return comment;
        }),
      };
    case DOWNVOTE_COMMENT:
      console.log("UPVOTE_COMMENT", action);
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              score: comment.score - 1,
            };
          }
          return comment;
        }),
      };
    case UPVOTE_REPLY:
      console.log("action id is", action);
      const replies = state.comments.replies;
      return {
        ...state,
        comments: replies.score + 1,
      };

    default:
      return state;
  }
};
