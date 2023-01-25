import React from "react";

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
          reply
        </button>
      </div>
    </>
  );
};
export default OtherUsers;
