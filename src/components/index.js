import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletAction,
  addCommentAction,
  addReplyAction,
  addReplyToRepliesAction,
  saveWriterDetailAction,
} from "../redux/pages/action";
import Comment from "./comments/comments";
import ADDComment from "./comments/addComment";
const Index = () => {
  const data = useSelector((store) => store.Comment);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [inRep, setInRep] = useState(false);
  const [currentReplayIdClicked, setCurrentReplayIdClicked] = useState(-1);

  const [content, setContent] = useState("");
  const [replies, setReplies] = useState({});
  const [replyingTo, setReplyingTo] = useState("");
  const [parentUser, setParentUser] = useState("");
  const addComment = () => {
    dispatch(addCommentAction(content));
  };
  const ReplyToComment = (username, id) => {
    console.log("replyingTo",replyingTo);
    dispatch(addReplyAction(currentReplayIdClicked, content, replyingTo));
    setInRep(false);
  };

  const ReplyToReplies = (username, listedReply) => {
    dispatch(
      addReplyToRepliesAction(
        currentReplayIdClicked,
        listedReply,
        content,
        replyingTo
      )
    );
    setInRep(false);
  };

  const getUserId = (username, id) => {
    setInRep(true);
    setCurrentReplayIdClicked(id);
    setReplyingTo(username);
  };

  const cancel = () => {
    setModal(false);
  };
  const delet = (id) => {
    dispatch(deletAction(id));
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
    console.log(modal)
  };
  return (
    <div className="app-bg">
      <Comment
        currentReplayIdClicked={currentReplayIdClicked}
        data={data}
        delet={delet}
        modal={modal}
        openModal={openModal}
        cancel={cancel}
        inRep={inRep}
        setInRep={setInRep}
        replyingTo={replyingTo}
        getUserId={getUserId}
        addComment={addComment}
        content={content}
        setContent={setContent}
        ReplyToComment={ReplyToComment}
        ReplyToReplies={ReplyToReplies}
        parentUser={parentUser}
        setParentUser={parentUser}
        replies={replies}
        setReplies={setReplies}
      />
     
    </div>
  );
};

export default Index;
