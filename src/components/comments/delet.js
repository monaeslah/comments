import React, { useState } from 'react';



const Modal = (props) => {
  const showHideClassName = props.modal ? "modal display-block" : "modal display-none";
console.log(props.modal)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>

       Delete Comment
       Are you want to delete this
       commant? This will remove the comment and can't be undo
        </p>
       <div className='flex justify_around'>

        <button type="button" className="delet" onClick={props.cancel}>
       No,CANCEL
        </button>
        <button type="button" className="c_delet" onClick={props.close}>
          YES, DELETE
        </button>
       </div>
      </section>
    </div>
  );
};

export default Modal