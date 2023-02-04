import React, { useState, useEffect, useCallback } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState(props.data);
  const [replyTo, setReplyTo] = useState(
    props.replyingTo ? "@" + props.replyingTo + " " : ""
  );
  const [typeidReplay, setTypeidReplay] = useState(replyTo);
  const [mentioned, setMentioned] = useState("");

  useEffect(() => {
    setComment(props.data);
  }, [props.data]);

  const replayToCommentsOnChange = useCallback((event) => {
    props.setContent(event.target.value);

    setTypeidReplay(event.target.value);
  });

  // ()=>

  const send = () => {
    if (props.replyingTo === undefined) {
      console.log("new comment", props.inRep);
      props.setContent(typeidReplay);
      props.addComment(typeidReplay);
    } else {
      props.setContent(typeidReplay);
      props.ReplyToComment(typeidReplay);
      
      console.log("new Replay", props.inRep);
    }
  };

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
          onChange={replayToCommentsOnChange}
          value={typeidReplay}
        />
        <button className="send" onClick={send}>
          Send
        </button>
      </div>
    </>
  );
};

export default Comment;
