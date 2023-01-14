import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletAction, replyAction } from "../../redux/pages/action";
import Comment from "./coments";
import ADDComment from "./addComment";
const Index = () => {
  // const data = require("../../redux/pages/data.json");
  const data = useSelector((store) => store.comment);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [inRep, setInRep] = useState(false);
  const [currentReplayIdClicked, setCurrentReplayIdClicked] = useState(-1);

  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [score, setScore] = useState(0);
  const [replyingTo, setReplyingTo] = useState("");

  const addComment = () => {
    dispatch(replyAction(content, replyingTo, score, createdAt));
  };
  const delet = (id) => {
    dispatch(deletAction(id));
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const replyComments = (username,id) => {
    setInRep(true);
    setCurrentReplayIdClicked(id)
    setReplyingTo(username);
    console.log("inRep",inRep,id);
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
        replyComments={replyComments}
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
