import React from "react";
import Buttons from "../btnGroup";

import ADDComment from "../comments/addComment";
import MainUserReplies from "./mainUserReplies";
import OtherUsersReply from "./OtherUsersRepies";
const Replies = (props) => {
  const showHideClassName = props.inRep ? "display-block" : "display-none";

  return (
    <>
      {props?.replies.map((data) => {
        return (
          <ul>
         
            <li className=" flex justify_between" key={data.id + "id"}>
            <Buttons prevscore={data.score} id={data.id} replyingTo={data.replyingTo}
            
            />
      
 
              <div className="replies widths">
                <div className="flex justify_between">
                  {data.user.username === props.usrname ? ( //userSec
                    <MainUserReplies
                      openModal={props.openModal}
                      close={props.close}
                      modal={props.modal}
                      cancel={props.cancel}
                      delet={props.delet}
                      username={data}
                    />
                  ) : (
                    <OtherUsersReply
                      username={data}
                      comments={props.comment}
                      replies={props.replies}
                      getUserId={props.getUserId}
                    />
                  )}
                </div>
                <p>
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
                  {console.log("currentReplayIdClicked",props.currentReplayIdClicked)}
                  <ADDComment
                    username={data}
                    data={props.data}
                    replyingTo={true}
                    listedReply={data.replyingTo}
                    ReplyToReplies={props.ReplyToReplies}
                    content={props.content}
                    setContent={props.setContent}
                    addComment={props.addComment}
                    setParentUser={props.parentUser}
                    ReplyToComment={props.ReplyToReplies}
                    // ReplyToComment={props.currentReplayIdClicked}
                  />
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
