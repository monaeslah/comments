import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = (props) => {
  const [items, setItems] = useState(props.data);
  useEffect(() => {
    setItems(props.data);
  }, [props.data]);

  console.log("11", items);
  return (
    <>
      <ul className="display_page">
        {items.comments.map((data, index) => {
          return (
            <li className=" flex justify_space_between" key={index}>
              <div className="btn-group">
                <button>+</button>
                <p>{data.score}</p>
                <button>-</button>
              </div>

              <div>
                <div>
                  <p>{data.user.username}</p>
                  <button>Replay</button>
                </div>
                <p> {data.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Box;
