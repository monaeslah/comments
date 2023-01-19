import React, { useState, useEffect, Fragment } from "react";
import Modal from "./delet";
const OtherUsers = (props) => {
  return (
    <>
    
      <div className="info flex">
        <img src={props.item.user.image.png} alt="" />
        <p>{props.item.user.username}</p>
      </div>
      <div className="flex action_btn">
      
        <button
          onClick={() => {
            props.replyToComments(props.item.user.username, props.item.id);
          }}
        >
          reply
        </button>
      </div>
    </>
  );
};
export default OtherUsers;
