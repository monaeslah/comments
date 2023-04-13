import React, { useEffect } from "react";
import Modal from "../MainUser/delet";
import delet from "../../assets/images/icon-delete.svg";
import edit from "../../assets/images/icon-edit.svg";
import AddComment from "./addComment";
const MainUser = (props) => {
  const showHideClassName = props.isEditable ? "display-block" : "display-none";

  const edit = (id) => {
    console.log(props.comments, id);
    props.setEditable(true);
    props.setCurrentReplayIdClicked(id);
    props.setUpdatedContent(props.comments.content)
  };
 const upDatedCM=()=>{
  props.addComment();
 }
  return (
    <>
      <div className="info flex">
        <img src={props.comments.user.image} alt="" />
        <p>{props.comments.user.username}</p>
        <p className="current_usr">you</p>
      </div>

   {  props.isEditable?<button className="update" onClick={upDatedCM}>
         {"UPDATE"}
        </button> :<div className="flex action_btn">
        <Modal
          id={props.comments.id}
          close={props.close}
          modal={props.modal}
          cancel={props.cancel}
          delet={props.delet}
        />
        <button className="action_delet" onClick={() => props.openModal()}>
          <img className="score" src={delet} alt="" />
          Delet
        </button>
        <button onClick={() => edit(props.comments.id)}>
          <img className="score" src={edit} alt="" />
          Edit
        </button>
      </div>}
    </>
  );
};
export default MainUser;
