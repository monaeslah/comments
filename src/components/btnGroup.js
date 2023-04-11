import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upvoteComment, downvoteComment, upvoteReply, downvoteReply } from "../redux/pages/action";

const Buttons = (props) => {
  const dispatch = useDispatch();
  const handleLikeClick = (commentId, score) => {
    if (props.hasOwnProperty("replyingTo")) {
      console.log(props.id, props.prevscore)
      dispatch(upvoteReply(props.id, props.prevscore))
    } else {
      dispatch(upvoteComment(commentId, score));
      console.log(commentId,score)

    }
  };
  const handleDislikeClick = (commentId, score) => {
    if (props.hasOwnProperty("replyingTo")) {
      console.log(props.id, commentId, score)
      dispatch(downvoteReply(props.id, props.prevscore))
    } else {
      dispatch(downvoteComment(commentId, score));
      console.log(commentId,score)

    }
    
  };

  return (
    <div className="btn-group">
      <button
        onClick={() =>
          handleLikeClick(props.comment?.id, props.id, props.prevscore)
        }
      >
        +
      </button>
      <p>{props.prevscore}</p>
      <button
        onClick={() => handleDislikeClick(props.comment?.id, props.id,props.prevscore)}
      >
        -
      </button>
    </div>
  );
};
export default Buttons;
