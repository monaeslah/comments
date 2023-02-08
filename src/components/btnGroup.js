import React from "react";
const Buttons = (props) => {
  
  return (
    <div className="btn-group">
      <button>+</button>
      <p>{props.score}</p>
      <button>-</button>
    </div>
  );
};
export default Buttons;
