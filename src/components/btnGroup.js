import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction, likereplyAction } from "../redux/pages/action";
const Buttons = (props) => {
  const disLikeit = (id, score) => {
    if (props.audience === undefined) {
      dispatch(dislikeAction(id, props.score));
    } else {
      console.log("there is an audience", id, props.audience);
    }
  };
  const Likeit = (id, score) => {
    if (props.audience === undefined) {
      dispatch(likeAction(id, props.score));
      
    } else {
      console.log("there is an audience", id, props.audience);
      dispatch(likereplyAction(id, props.score))
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="btn-group">
      <button onClick={() => Likeit(props.id, props.prevscore)}>+</button>
      <p>{props.prevscore}</p>
      <button onClick={() => disLikeit(props.id, props.prevscore)}>-</button>
    </div>
  );
};
export default Buttons;
