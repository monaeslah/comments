import React  from "react";
import Modal from "../MainUser/delet";
const MainUserReplies = (props) => {
    return (
        
        <>
        {console.log("props",props.username)}
        <div className="info flex">
          <img src={props.username.user.image.png} alt="" />
          <p>{props.username.user.username}</p>
          <p className="current_usr">you</p>
        </div>
        <div className="flex action_btn">
          <Modal
            id={props.username.id}
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
export default MainUserReplies