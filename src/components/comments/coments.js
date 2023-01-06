import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./delet"
const Box = (props) => {
  const [items, setItems] = useState(props.data);
  const [usrname, setUsername] = useState(props.data.currentUser.username);
  console.log(usrname);
  useEffect(() => {
    setItems(props.data);
  }, [props.data]);
  useEffect(() => {
    setUsername(props.data.currentUser.username);
  }, [props.data.currentUser.username]);

  return (
    <>
      <ul className="display_page">
        {items.comments.map((item, index) => {
          return (
            <>
              <li className=" flex justify_between" key={index}>
                <div className="btn-group">
                  <button>+</button>
                  <p>{item.score}</p>
                  <button>-</button>
                </div>

                {console.log("11", item)}
                <div className="">
                  <div className="flex justify_between">
                    <p>{item.user.username}</p>
                    <button onClick={props.reply}>reply</button>
                  </div>
                  <p> {item.content}</p>
                </div>
              </li>
              {item.replies.length === 0 ? (
                ""
              ) : (
                <>
                  {item.replies.map((data, items) => {
                    return (
                      <ul>
                        <li className=" flex justify_between" key={items}>
                          <div className="btn-group">
                            <button>+</button>
                            <p>{data.score}</p>
                            <button>-</button>
                          </div>

                          <div className="replies">
                            <div className="flex justify_between">
                              {data.user.username === usrname ? ( //userSec
                                <>
                                  <div className="flex">
                                    <p>{data.user.username}</p>
                                    <span className="current_usr">You</span>
                                  </div>
                                  <div className="flex">
                                    <Modal close={props.close} modal={props.modal} cancel={props.cancel}/>
                                    <button onClick={props.openModal}>Delet</button>
                                    <button >Edit</button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <p>{data.user.username}</p>
                                  <button>reply</button>
                                </>
                              )}
                            </div>
                            <p> {data.content}</p>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Box;
