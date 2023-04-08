import React, { useState, useEffect, useCallback } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState(props.data);
  const [commentsRepies, setCommentsRepies] = useState(props.username);
  const [replyTo, setReplyTo] = useState(() => {
    if (typeof props.replyingTo === "string") {
      return "@" + props.replyingTo + " ";
    } else if (props.replyingTo === true) {
      return "@" + props.username.user.username + " ";
    } else {
      return "";
    }
  });
  const [typeidReplay, setTypeidReplay] = useState(replyTo.replace(/[^a-zA-Z ]/g, ""));

  useEffect(() => {
    setComment(props.data);
  }, [props.data]);
  useEffect(() => {
    setCommentsRepies(props.username);
  }, [props.username]);
  const replayToCommentsOnChange = useCallback((event) => {
    props.setContent(event.target.value);

    setTypeidReplay(event.target.value);
  });

  // ()=>

  const send = () => {
    if (props.hasOwnProperty("listedReply")) {
      console.log("string",props.listedReply,props.replyingTo);
      
      props.setContent(typeidReplay);
      props.ReplyToComment(typeidReplay,props.listedReply);
    } 
    else if (props.hasOwnProperty("replyingTo")) {
      console.log("replyingTo",props.listedReply,props.replyingTo);
      
      props.setContent(typeidReplay);
      props.ReplyToComment(typeidReplay,props.replyingTo);
    } else {
      console.log("not a string");

      props.setContent(typeidReplay);
      props.addComment(typeidReplay);
    }
  };

  return (
    <>
      {/* {console.log("newprops", commentsRepies, comment)} */}
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
