import React, { useState } from "react";
import Modal from "../MainUser/delet";
import delet from "../../assets/images/icon-delete.svg";
import edit from "../../assets/images/icon-edit.svg";
import AddComment from "./addComment";
const MainUser = (props) => {
 
  const showHideClassName = props.isEditable ? "display-block" : "display-none";

  const edit = () => {
    console.log(props.isEditable);
    props.setEditable(true);
  };
  return (
    <>
      {console.log(props)}

      <div className="info flex">
        <img src={props.comments.user.image} alt="" />
        <p>{props.comments.user.username}</p>
        <p className="current_usr">you</p>
      </div>
      <div className="flex action_btn">
        <Modal
          id={props.comments.id}
          close={props.close}
          modal={props.modal}
          cancel={props.cancel}
          delet={props.delet}
        />
        <button className="action_delet" onClick={() => props.openModal()}>
          {" "}
          <img className="score" src={delet} alt="" />
          Delet
        </button>
        <button onClick={() => edit()}>
          <img className="score" src={edit} alt=""  />
          Edit
        </button>

     
      </div>
    </>
  );
};
export default MainUser;
