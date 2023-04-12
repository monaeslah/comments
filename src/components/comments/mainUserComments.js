import React  from "react";
import Modal from "../MainUser/delet";
import delet from "../../assets/images/icon-delete.svg"
import edit from "../../assets/images/icon-edit.svg"
import AddComment from "./addComment";
const MainUser = (props) => {
  const showHideClassName = props.inRep ? "display-block" : "display-none";

    return (
        <>
        {console.log(props.inRep)}
       

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
          <button className="action_delet" onClick={()=>props.openModal()}>   <img className="score" src={delet} alt="" />Delet</button>
          <button>
            <img  className="score" src={edit} alt="" />
            Edit</button>
           
                  <li className={`flex justify_between ${showHideClassName}`}>
                    <AddComment
                      data={props.data}
                      inRep={props.inRep}
                      replyingTo={props.replyingTo}
                      addComment={props.addComment}
                      ReplyToComment={props.ReplyToComment}
                      content={props.content}
                      setContent={props.setContent}
                    />
                  </li>
        </div>
      </>
        
        )
}
export default MainUser