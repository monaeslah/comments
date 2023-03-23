import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction, likereplyAction } from "../redux/pages/action";
const Buttons = (props) => {
  const handleLikeClick = (commentId) => {
    console.log(commentId)
    likeAction(commentId);
  };

  const handleDislikeClick = (commentId) => {
    dislikeAction(commentId);
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
