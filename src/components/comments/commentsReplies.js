import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ADDComment from "./addComment";

import Modal from "./delet";
const Replies = (props) => {
  const showHideClassName = props.inRep ? "display-block" : "display-none";
  return (
    <>
      {props.replies.map((data, items) => {
        return (
          <ul>
            <li className=" flex justify_between" key={items}>
              <div className="btn-group">
                <button>+</button>
                <p>{data.score}</p>
                <button>-</button>
              </div>

              <div className="replies widths">
                <div className="flex justify_between">
                  {data.user.username === props.usrname ? ( //userSec
                    <>
                      <div className="flex info">
                        <img src={data.user.image.png} alt="" />
                        <p>{data.user.username}</p>
                        <span className="current_usr">you</span>
                      </div>
                      <div className="flex">
                        <Modal
                          id={data.id}
                          delet={props.delet}
                          close={props.close}
                          modal={props.modal}
                          cancel={props.cancel}
                        />
                        <button onClick={props.openModal}>Delet</button>
                        <button>Edit</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="info flex">
                        <img src={data.user.image.png} alt="" />
                        <p>{data.user.username}</p>
                      
                      </div>
                      <button
                        onClick={() =>
                          props.replyToComments(data.user.username, data.id)
                        }
                      >
                        reply
                      </button>
                    </>
                  )}
                </div>
                <p>
                  {" "}
                  <span>@{data.replyingTo}</span> {data.content}
                </p>
              </div>
            </li>
            {data.user.username === props.usrname ? (
              <></>
            ) : (
              data.id === props.currentReplayIdClicked && (
                <li
                  className={`flex justify_space_between ${showHideClassName}`}
                >
                  <ADDComment data={props.data} />
                  {/* inRep={props.inRep} repliedTo={data.user.username} */}
               
                </li>
              )
            )}
          </ul>
        );
      })}
    </>
  );
};

export default Replies;
