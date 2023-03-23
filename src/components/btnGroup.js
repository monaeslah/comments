import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction, likereplyAction } from "../redux/pages/action";
const Buttons = (props) => {
  const handleThumbsUp=(replyId)=> {
    const updatedComment = { ...props.comment };
    updatedComment.replies = updatedComment.replies.map((reply) => {
      if (reply.id === replyId) {
        reply.score++;
      }
      return reply;
    });
    props.setComment(updatedComment);
    console.log(updatedComment)
  }
  
  const handleThumbsDown=(replyId)=>{
    const updatedComment = { ...props.comment };
    updatedComment.replies = updatedComment.replies.map((reply) => {
      if (reply.id === replyId) {
        reply.score--;
      }
      return reply;
    });
    props.setComment(updatedComment);
  }
  const dispatch = useDispatch();
  return (
    <div className="btn-group">
      <button onClick={() => handleThumbsUp(props.id, props.prevscore)}>+</button>
      <p>{props.prevscore}</p>
      <button onClick={() => handleThumbsDown(props.id, props.prevscore)}>-</button>
    </div>
  );
};
export default Buttons;
