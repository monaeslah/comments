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
  const [parentUser,setParentUser]=useState("")
  const addComment = () => {
    dispatch(addCommentAction(content));
  };
  const ReplyToComment = (username, id) => {
    dispatch(
      addReplyAction(
        currentReplayIdClicked,
        content,
        replyingTo
      )
    );
    setInRep(false);
  };

  const ReplyToReplies = (username, id,parentUser) => {
    console.log("data sent is ", username, currentReplayIdClicked,
    content,
    replyingTo)
    dispatch(
      addReplyToRepliesAction(
        currentReplayIdClicked,
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
    alert()
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
