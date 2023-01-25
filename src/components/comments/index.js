import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletAction,
  addCommentAction,
  addReplyAction,
} from "../../redux/pages/action";
import Comment from "./comments";
import ADDComment from "./addComment";
const Index = () => {
  const data = useSelector((store) => store.Comment);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [inRep, setInRep] = useState(false);
  const [currentReplayIdClicked, setCurrentReplayIdClicked] = useState(-1);

  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [score, setScore] = useState(0);
  const [replyingTo, setReplyingTo] = useState("");

  const addComment = () => {
    dispatch(addCommentAction(content, score, createdAt));
  };
  const ReplyToComment = () => {
    dispatch(
      addReplyAction(
        currentReplayIdClicked,
        content,
        createdAt,
        score,
        replyingTo
      )
    );
  };
  const delet = (id) => {
    dispatch(deletAction(id));
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const getUserId = (username, id) => {
    setInRep(true);
    setCurrentReplayIdClicked(id);
    setReplyingTo(username);
  };
  const cancel = () => {
    setModal(false);
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
        replyingTo={replyingTo}
        getUserId={getUserId}
        addComment={addComment}
        content={content}
        setContent={setContent}
        ReplyToComment={ReplyToComment}
      />
      <ADDComment
        addComment={addComment}
        data={data}
        content={content}
        setContent={setContent}
      />
    </div>
  );
};

export default Index;
