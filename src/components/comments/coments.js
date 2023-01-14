import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Replies from "./commentsReplies";
import ADDComment from "./addComment";
import Modal from "./delet";
const Box = (props) => {
  const [items, setItems] = useState(props.data);
  const [usrname, setUsername] = useState(props.data?.currentUser?.username);
  const showHideClassName = props.inRep ? "display-block" : "display-none";
  useEffect(() => {
    setItems(props.data);
  }, [props.data]);
  useEffect(() => {
    setUsername(props.data.currentUser.username);
  }, [props.data?.currentUser?.username]);

  return (
    <>
      <ul className="display_page">
        {items?.comments?.map((item, index) => {
          return (
            <>
              <li className="flex" key={index}>
                <div className="btn-group">
                  <button>+</button>
                  <p>{item.score}</p>
                  <button>-</button>
                </div>

                <div className=" widths">
                  <div className="flex justify_between">
                    {item.user.username === usrname ? (
                      <>
                        <div className="info flex">
                          <img src={item.user.image} alt="" />
                          <p>{item.user.username}</p>
                          <p className="current_usr">you</p>
                        </div>
                        <div className="flex action_btn">
                          <Modal
                            id={item.id}
                            close={props.close}
                            modal={props.modal}
                            cancel={props.cancel}
                            delet={props.delet}
                          />
                          <button onClick={props.openModal}>Delet</button>
                          <button>Edit</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="info flex">
                          <img src={item.user.image.png} alt="" />
                          <p>{item.user.username}</p>
                        </div>
                        <div className="flex action_btn">
                          {console.log("itemsssss",item)}
                          <button
                            onClick={() => {
                              props.replyComments(item.user.username,item.id);
                            }}
                          >
                            reply
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <p> {item.content}</p>
                </div>
              </li>
              {item.user.username === usrname ?  (
              <></>
            ) : (
            item.id==props.currentReplayIdClicked && (<li className={`flex justify_between ${showHideClassName}`}>
            <ADDComment data={props.data} inRep={props.inRep} repliedTo={item.user.username}/>
          </li>) 
            )}
              {item.replies.length === 0 ? (
                ""
              ) : (
                <>
                  

                  <Replies
                  currentReplayIdClicked={props.currentReplayIdClicked}
                    replies={item.replies}
                    usrname={usrname}
                    replyCm={props.replyCm}
                    replyComments={props.replyComments}
                  />
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
