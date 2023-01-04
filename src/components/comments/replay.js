import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Replay = (props) => {
  const [replay, setReplay] = useState(props.data);
  useEffect(() => {
    setReplay(props.data);
  }, [props.data]);

  return (
    <>
      <div className="replay_sec flex justify_space_between">
        <img className="prf_img" src={replay.currentUser.image.png} alt="prof" />
        {console.log(replay.currentUser)}

       
        <textarea className="replay_content"
        />
        <button className="send">Send</button>
      </div>
    </>
  );
};

export default Replay;
