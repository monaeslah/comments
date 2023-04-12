import {
  ADDCOMMENT,
  ADDReply,
  DELETE,
  UPVOTECOMMENT,
  UPVOTE_REPLY,
  DOWNVOTE_COMMENT,
  DOWNVOTE_REPLY,
  ADDReplyToCom,DELETEREP
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

      case ADDReplyToCom:
        const allComments = state.comments;
        const setCurrentComment = allComments.find(
          (item) => item.user.username === action.payload.newReplyToCm.listedReply
        );
  
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
      const comments = state.comments;
      const currentComment = comments.find(
        (item) => item.user.username === action.payload.newReply.listedReply
      );
      

      currentComment.replies = [
        ...currentComment.replies,
        action.payload.newReply,
      ];
      return {
        ...state,
        replies: [
          currentComment.replies,
        ].sort((a, b) => (a.id > b.id ? 1 : -1)),
      };

    case DELETE:
      return {
        ...state,
        comments: state.comments.filter((item, index) => item.id !== action.id),
      };
      case DELETEREP:
        const AllReplies=state.comments
        console.log(AllReplies)
        const hello=AllReplies.map((comment)=>({
          ...comment,
            replies:comment.replies.filter((reply, index) => reply.id !== action.id)
          }))
        console.log(hello)
        return {...state,comments:hello}
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
    case  UPVOTE_REPLY :
      console.log("UPVOTE_REPLY:", action);
      const searchIdT = action.payload.commentId;
    
      // Search in comments array
      const commentT = state.comments.find(comment => comment.id === searchIdT);
      if (commentT) {
        return commentT;
      }

      // Search in replies array
      const updatedComments = state.comments.map(comment => {
        const updatedReplies = comment.replies.map(reply => {
          if (reply.id === searchIdT) {
            // Increment score by 1
            return {
              ...reply,
              score: reply.score + 1,
            };
          }
          return reply;
        });

        return {
          ...comment,
          replies: updatedReplies,
        };
      });

      return { ...state, comments: updatedComments };
      case DOWNVOTE_REPLY:
        console.log("DOWNVOTE_REPLY:", action);
        const searchId = action.payload.commentId;
      
        // Search in comments array
        const comment = state.comments.find(comment => comment.id === searchId);
        if (comment) {
          return comment;
        }
  
        // Search in replies array
        const updatedCommentsT = state.comments.map(comment => {
          const updatedReplies = comment.replies.map(reply => {
            if (reply.id === searchId) {
              // Increment score by 1
              return {
                ...reply,
                score: reply.score - 1,
              };
            }
            return reply;
          });
  
          return {
            ...comment,
            replies: updatedReplies,
          };
        });
  console.log("updatedCommentsT",updatedCommentsT)
        return { ...state, comments: updatedCommentsT };
    default:
      return state;
  }
};
