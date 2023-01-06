import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyAction } from "../../redux/pages/action";
import Comment from "./coments";
import ADDComment from "./addComment";
const Index = () => {
  const data = require("../../redux/pages/data.json");
  const dispatch = useDispatch();
  const  [modal,setModal]=useState(false)
  const  [id,setId]=useState("")
  const  [content,setContent]=useState("")
  const  [createdAt,setCreatedAt]=useState("")
  const  [score,setScore]=useState("")
  const  [username,setUsername]=useState("")
  const  [replyingTo,setReplyingTo]=useState("")
  const  [user,setUser]=useState("")

    
const addComment=()=>{
  dispatch(replyAction())

}



const delet=()=>{
  
}
const openModal=()=>{
  setModal(true)
}
const close=()=>{
  setModal(false)
}
const cancel=()=>{
  setModal(false)
}
  return (
    <div className="app-bg">
      <Comment data={data} delet={delet} modal={modal} close={close} openModal={openModal} cancel={cancel} />
      <ADDComment addComment={addComment} data={data} />
    </div>
  );
};

export default Index;
