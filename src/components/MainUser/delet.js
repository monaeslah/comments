import React from "react";
import { useDispatch } from "react-redux";
import {deletRepAction} from "../../redux/pages/action";

const Modal = (props) => {
  const showHideClassName = props.modal
    ? "modal display-block"
    : "modal display-none";
    const dispatch = useDispatch();
const deletComment=(id)=>{
  if (props.hasOwnProperty("replyingTo")) {
    console.log(id)
    dispatch(deletRepAction(id))
  } else {
    dispatch(  props.delet(id));
    console.log(id)

  }

}
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>
          Delete Comment Are you want to delete this commant? This will remove
          the comment and can't be undo
        </p>
        <div className="flex justify_around">
          <button type="button" className="delet" onClick={props.cancel}>
            No,CANCEL
          </button>
          <button
            type="button"
            className="c_delet"
            onClick={() => deletComment(props.id)}
          >
            YES, DELETE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
