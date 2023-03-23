import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  upvoteComment,
  downvoteComment,
} from "../redux/pages/action";


const Buttons = (props) => {
  const dispatch = useDispatch();
  const handleLikeClick = (commentId,score) => {
    dispatch(upvoteComment(commentId,score));
    console.log(commentId);
  };
  const handleDislikeClick = (commentId,score) => {
    dispatch(downvoteComment(commentId,score));
  };

  return (
    <div className="btn-group">
      <button
        onClick={() => handleLikeClick(props.comment.id, props.prevscore)}
      >
        +
      </button>
      <p>{props.prevscore}</p>
      <button
        onClick={() => handleDislikeClick(props.comment.id, props.prevscore)}
      >
        -
      </button>
    </div>
  );
};
export default Buttons;
