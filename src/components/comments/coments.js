import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "./btnGroup";
import Replies from "./commentsReplies";
import ADDComment from "./addComment";

import MainUser from "./mainUser";
import OtherUsers from "./OtherUsers";
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
        {items?.comments?.map((item) => {
          return (
            <>
              <li className="flex" key={item}>
                <Buttons item={item.score} />

                <div className=" widths">
                  <div className="flex justify_between">
                    {item.user.username === usrname ? (
                      <MainUser
                        item={item}
                        openModal={props.openModal}
                        close={props.close}
                        modal={props.modal}
                        cancel={props.cancel}
                        delet={props.delet}
                      />
                    ) : (
                      <OtherUsers
                        item={item}
                        replyToComments={props.replyToComments}
                      />
                    )}
                  </div>
                  <p>{item.content}</p>
                </div>
              </li>
              {item.user.username === usrname ? (
                <></> //can not reply to your comments
              ) : (
                item.id === props.currentReplayIdClicked && (
                  <li className={`flex justify_between ${showHideClassName}`}>
                    <ADDComment
                      data={props.data}
                      inRep={props.inRep}
                      repliedTo={item.user.username}
                      addComment={props.addComment}
                      content={props.content}
                      setContent={props.setContent}
                    />
                  </li>
                )
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
                    replyToComments={props.replyToComments}
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
