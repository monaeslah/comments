import React, { useState, useEffect, Fragment } from "react";
import Modal from "./delet";
const MainUser = (props) => {
    return (
        
        <>
        <div className="info flex">
          <img src={props.item.user.image} alt="" />
          <p>{props.item.user.username}</p>
          <p className="current_usr">you</p>
        </div>
        <div className="flex action_btn">
          <Modal
            id={props.item.id}
            close={props.close}
            modal={props.modal}
            cancel={props.cancel}
            delet={props.delet}
          />
          <button onClick={props.openModal}>Delet</button>
          <button>Edit</button>
        </div>
      </>
        
        )
}
export default MainUser