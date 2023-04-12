import React from "react";
import reply from "../../assets/images/icon-reply.svg"

const OtherUsersReply = (props) => {

  return (
    <>
   
      <div className="info flex">
        <img src={props.username.user.image.png} alt="" />
        <p>{props.username.user.username}</p>
      </div>
      <div className="flex action_btn">
      
        <button
          onClick={() => {
            props.getUserId(props.username.user.username, props.username.id);
          }}
        ><img className="score" src={reply} alt="" />
          reply
        </button>
      </div>
    </>
  );
};
export default OtherUsersReply;
