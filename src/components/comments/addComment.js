import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comment = (props) => {
  
  const [comment, setComment] = useState(props.data);


  useEffect(() => {
    setComment(props.data);
  }, [props.data]);

  return (
    <>
     
      <div
        className="flex justify_between comment_sec"
      >
        <img
          className="prf_img"
          src={comment?.currentUser?.image.png}
          alt="prof"
        />

        <textarea className="comment_content" value={`${props.inRep ? "@"+ props.repliedTo : ""}`}
        
        
        />
        <button className="send" onClick={props.addComment}>
          Send
        </button>
      </div>
    </>
  );
};

export default Comment;
