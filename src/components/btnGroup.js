import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upvoteReply, downvoteReply, likereplyAction } from "../redux/pages/action";
const Buttons = (props) => {
  const handleDislikeClick = (commentId) => {
    console.log(commentId)
    downvoteReply(commentId);
  };

  const handleLikeClick = (commentId) => {
    upvoteReply(commentId);
  };
  const dispatch = useDispatch();
  return (
    <div className="btn-group">
      <button onClick={() => handleLikeClick(props.id, props.prevscore)}>+</button>
      <p>{props.prevscore}</p>
      <button onClick={() => handleDislikeClick(props.id, props.prevscore)}>-</button>
    </div>
  );
};
export default Buttons;
