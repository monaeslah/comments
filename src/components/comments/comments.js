import React, { useState, useEffect, Fragment } from "react";
import Buttons from "../btnGroup";
import CommentsReplies from "../replies/commentsReplies";
import ADDComment from "./addComment";
import MainUser from "./mainUserComments";
import OtherUsers from "./OtherUsers";
const Box = (props) => {
  const [items, setItems] = useState(props.data);
  const [usrname, setUsername] = useState(props.data?.currentUser?.username);
  const showHideClassName = props.inRep ? "display-block" : "display-none";
  useEffect(() => {
    setItems(props.data);
  }, [props]);
  useEffect(() => {
    setUsername(props.data?.currentUser.username);
  }, [props.data?.currentUser?.username]);

  return (
    <>
      <ul className="display_page">
        {props.data?.comments?.map((comment) => {
          return (
            <>
              <li className="flex" key={comment.id + "number"}>
                <Buttons
                  prevscore={comment.score}
                  comment={comment}
                  setReplies={props.setReplies}
                  setScore={props.setScore}
                />
                <div className=" widths">
                  <div className="flex justify_between">
                    {comment?.user?.username === usrname ? (
                      <MainUser
                        comments={comment}
                        openModal={props.openModal}
                        close={props.close}
                        modal={props.modal}
                        cancel={props.cancel}
                        delet={props.delet}
                      />
                    ) : (
                      <OtherUsers
                        comments={comment}
                        getUserId={props.getUserId}
                      />
                    )}
                  </div>
                  <p>{comment.content}</p>
                </div>
              </li>
              {comment.user.username === usrname ? (
                <></> //can not reply to your own comments
              ) : (
                comment.id === props.currentReplayIdClicked && (
                  <li className={`flex justify_between ${showHideClassName}`}>
                    <ADDComment
                      data={props.data}
                      inRep={props.inRep}
                      replyingTo={comment.user.username}
                      addComment={props.addComment}
                      ReplyToComment={props.ReplyToComment}
                      content={props.content}
                      setContent={props.setContent}
                    />
                  </li>
                )
              )}
              {comment.replies.length === 0 ? (
                ""
              ) : (
                <>
                  <CommentsReplies
                    data={props.data}
                    currentReplayIdClicked={props.currentReplayIdClicked}
                    comment={comment}
                    replies={comment.replies}
                    usrname={usrname}
                    ReplyToReplies={props.ReplyToReplies}
                    getUserId={props.getUserId}
                    inRep={props.inRep}
                    setInRep={props.setInRep}
                    ReplyToComment={props.ReplyToComment}
                    content={props.content}
                    setContent={props.setContent}
                    addComment={props.addComment}
                    parentUser={props.parentUser}
                    setParentUser={props.parentUser}
                    score={props.score}
                    setScore={props.setScore}
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
