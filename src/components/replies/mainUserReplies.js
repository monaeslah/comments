import React  from "react";
import Modal from "../MainUser/delet.js";
import delet from "../../assets/images/icon-delete.svg"
import edit from "../../assets/images/icon-edit.svg"
import AddComment from "../comments/addComment.js";
const MainUserReplies = (props) => {
  const showHideClassName = props.inRep ? "display-block" : "display-none";

    return (
        <>
 {console.log(props)}
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
            replyingTo={props.username}
          />
          <button className="action_delet" onClick={()=>props.openModal()}><img className="score" src={delet} alt="" /> Delet</button>
          <button><img className="score" src={edit} alt="" /> Edit</button>
          <div className={`flex justify_between ${showHideClassName}`}>
                    <AddComment
                      data={props.data}
                      inRep={props.inRep}
                      addComment={props.addComment}
                      ReplyToComment={props.ReplyToComment}
                      content={props.content}
                      setContent={props.setContent}
                    />
                  </div>
        </div>
      </>
        
        )
}
export default MainUserReplies