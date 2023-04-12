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




  ///////////////////////////secont way for test comment section
 
  describe('Comment Reducer Tests', () => {
    test('ADD_COMMENT action updates state correctly', () => {
      // Create initial state and action
      const initialState = { comments: [] };
      const action = { type: ADDCOMMENT, payload: { id: 1, comment: 'Test comment' } };
  
      // Call the Comment reducer with the initial state and action
      const newState = Comment(initialState, action);
  
      // Assert that the state is updated correctly
      expect(newState.comments).toHaveLength(1);
      expect(newState.comments[0].id).toEqual(1);
      expect(newState.comments[0].comment).toEqual('Test comment');
    });
  
    // Write more test cases for other actions and scenarios
  });
  
/////////////////////////////////////////////////////

  const addReplyToComAction = {
    type: ADDReplyToCom,
    payload: {
        id: 5,
        newReplyToCm: {
          id: 6,
          score: 0, // set initial score to 0
          createdAt: new Date(),
          currentReplayIdClicked:5,
          content:"test",
          listedReply:"user1",
          replyingTo:"user1",
        
          user: {
            image: {
              png: "data.currentUser.image.png",
              webp: "data.currentUser.image.webp",
            },
            username: "data.currentUser.username",
          },
        },
      
    }
  };
  

