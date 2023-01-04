import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./coments";
import Replay from "./replay";
const Index = () => {
  const data = require("../../redux/pages/data.json");
  const dispatch = useDispatch();

  return (
    <div className="app-bg">
      <Comment data={data} />
      <Replay data={data} />
    </div>
  );
};

export default Index;
