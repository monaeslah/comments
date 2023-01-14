import { ADD, DELETE } from "./type";
const data = require("./data.json");
export const Users = (state = {}, action) => {
  switch (action.type) {
    case "GET":
      return action.payload;
    default:
      return state;
  }
};

// comments: {
//     count: action.count,
//     products: [
//       ...state.catalogItems['products'],
//       action.catalogItems  ?
//         action.catalogItems['products']
//         :
//         {}
//     ]
//   }

const keys = Object.keys(data);
export const comment = (state = data, action) => {
  console.log(state);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE:console.log(action.id)
      return {
        ...state,
        comments: state.comments.filter((item, index) => item.id !== action.id),
        replies:state.comments.replies.filter((item, index) => item.id !== action.id)
        
      };

    default:
      return state;
  }
};
