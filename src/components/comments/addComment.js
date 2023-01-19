import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comment = (props) => {
  const [comment, setComment] = useState(props.data);
  const [replyTo, setReplyTo] = useState(props.repliedTo ?"@" + props.repliedTo:"");
  const [typeidReplay, setTypeidReplay] = useState(replyTo);

  useEffect(() => {
    setComment(props.data);
  }, [props.data]);

  const replayToComments = useCallback((event) => {
    
    setTypeidReplay(event.target.value);
  });
  return (
    <>
      <div className="flex comment_sec">
        <img
          className="prf_img"
          src={comment?.currentUser?.image.png}
          alt="prof"
        />
       
        <textarea
          className="comment_content"
          
          onChange={replayToComments}
          value= {typeidReplay}
        />
        <button className="send" onClick={props.addComment}>
          Send
        </button>
      </div>
    </>
  );
};

export default Comment;
