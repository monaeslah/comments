import {
    ADDCOMMENT,
    ADDReply,
    DELETE,
    UPVOTECOMMENT,
    UPVOTE_REPLY,
    DOWNVOTE_COMMENT,
    DOWNVOTE_REPLY,
    ADDReplyToCom
  } from "../redux/pages/type";
  import { Comment } from '../redux/pages/reducer';
  const data = require("../redux/pages/data.json");

// Test for ADDCOMMENT action:
test("ADD_COMMENT action adds a new comment to the state", () => {


  const action = {
    type: ADDCOMMENT,
    payload: {
      id: 5, // provide an id for the comment
      content: "This is a comment", // provide the text for the comment
      createdAt:new Date(),
      score: 0,
      user: {
        image: { 
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp"
        },
        username: "amyrobson"
      }, // provide the username for the comment
      replies: [] // provide an empty array for replies as initial state
    },
  };

  const newState = Comment(data, action);

  expect(newState.comments.length).toBe(3); // Assert that comment is added to the state
  // Assert that the comment object in the state matches the expected shape

  expect(newState.comments[2]).toMatchObject({
    id: expect.any(Number),
    content: expect.any(String),
    createdAt: expect.any(Date),
    score: expect.any(Number),
    user: {
      image: {
        png: expect.any(String),
        webp: expect.any(String),
      },
      username: expect.any(String),
    },
    replies: expect.any(Array),
  });
  });

// Test for ADDReplyToCom action:
test("ADDReplyToCom action adds a new reply to the corresponding comment in the state", () => {
 

  const action = {
    type: ADDReplyToCom,
    payload: {
      newReplyToCm: {
        id: 5,
        score: 0,
        createdAt: new Date(),
        currentReplayIdClicked: 1,
        content: 'Test reply',
        listedReply: 'user1',
        replyingTo: 'user1',
        user: {
          image: {
            png: 'image.png',
            webp: 'image.webp',
          },
          username: 'user3',
        },
      },
    },
  };

  const newState = Comment(data, action);
  console.log(">>>",newState.comments)
  
  // Assert that the reply is added to the corresponding comment in the state
  expect(newState.comments[0].replies.length).toBe(3);
  // Assert that the reply object in the state matches the expected shape
  expect(newState.comments[0].replies[0]).toMatchObject({
    id: expect.any(Number),
    content: expect.any(String),
    createdAt: expect.any(Date),
    replyingTo: expect.any(String),
    score: expect.any(Number),
    user: {
      image: {
        png: expect.any(String),
        webp: expect.any(String),
      },
      username: expect.any(String),
    },
    replies: expect.any(Array),
  });
  });
// // Test for DELETE action:
// test("DELETE action removes a comment from the state", () => {
//   const initialState = {
//     comments: [
//       // provide initial comments state with comments
//     ],
//   };

//   const action = {
//     type: DELETE,
//     id: 1// provide an id of the comment to be deleted
//   };

//   const newState = Comment(initialState, action);

//   // Assert that the comment is removed from the state
//   expect(newState.comments.length).toBe(initialState.comments.length - 1);
//   // Assert that the removed comment does not exist in the state
//   expect(newState.comments.find(comment => comment.id === action.id)).toBeUndefined();
// });
// // Test for UPVOTECOMMENT action:
// test("UPVOTECOMMENT action increments score of a comment in the state", () => {
//   const initialState = {
//     comments: [
//       // provide initial comments state with comments
//     ],
//   };

//   const action = {
//     type: UPVOTECOMMENT,
//     payload: {
//       commentId: // provide id of the comment to be upvoted
//     },
//   };

//   const newState = Comment(initialState, action);

//   // Assert that the score of the comment is incremented by 1 in the state
//   expect(newState.comments.find(comment => comment.id === action.payload.commentId).score).toBe(initialState.comments.find(comment => comment.id === action.payload.commentId).score + 1);
// });
// // Test for DOWNVOTE_COMMENT action:
// test("DOWNVOTE_COMMENT action decrements score of a comment in the state", () => {
//   const initialState = {
//     comments: [
//       // provide initial comments state with comments
//     ],
//   };

//   const action = {
//     type: DOWNVOTE_COMMENT,
//     payload: {
//       commentId: // provide id of the comment to be downvoted
//     },
//   };

//   const newState = Comment(initialState, action);

//   // Assert that the score of the comment is decremented by
