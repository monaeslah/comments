import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comment = (props) => {
  const [comment, setComment] = useState(props.data);
  useEffect(() => {
    setComment(props.data);
  }, [props.data]);

  return (
    <>
      <div className="comment_sec flex justify_space_between">
        <img className="prf_img" src={comment.currentUser.image.png} alt="prof" />
        {console.log(comment.currentUser)}

       
        <textarea className="comment_content"
        />
        <button className="send" onClick={props.addComment}>Send</button>
      </div>
    </>
  );
};

export default Comment;
