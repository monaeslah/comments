import React, { useState, useEffect, useCallback } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState(props.data);
  const [replyTo, setReplyTo] = useState(
    props.replyingTo ? "@" + props.replyingTo + " " : ""
  );
  const [typeidReplay, setTypeidReplay] = useState(replyTo);

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
      console.log("new comment",);
      props.setContent(typeidReplay);
      props.addComment(typeidReplay);
    } else {
      console.log("new Replay");
      props.setContent(typeidReplay);
      props.ReplyToComment(typeidReplay);
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
