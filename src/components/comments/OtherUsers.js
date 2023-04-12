import React from "react";
import reply from "../../assets/images/icon-reply.svg"

const OtherUsers = (props) => {

  return (
    <>

      <div className="info flex">
        <img src={props.comments.user.image.png} alt="" />
        <p>{props.comments.user.username}</p>
      </div>
      <div className="flex action_btn">
    
        <button
          onClick={() => {
           
            props.getUserId(props.comments.user.username, props.comments.id);
          }}
        >
           <img className="score"  src={reply} alt="minus" />
          reply
        </button>
      </div>
    </>
  );
};
export default OtherUsers;
