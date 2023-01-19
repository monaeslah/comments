import React, { useState, useEffect, Fragment } from "react";
const Buttons = (props) => {
  return (
    <div className="btn-group">
      <button>+</button>
      <p>{props.item}</p>
      <button>-</button>
    </div>
  );
};
export default Buttons;
