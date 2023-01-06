import {ADD } from "./type";
const data = require("./data.json");
export const Users=(state={},action)=>{
switch(action.type){
    case "GET":
        return action.payload
        default:
        return state
}
} 



export const comment=(state=data.comments,action)=>{
    switch(action.type){
        case ADD:
      console.log([...state, action.payload]);

            return [...state,action.payload]
            default:
                return state
    }
}