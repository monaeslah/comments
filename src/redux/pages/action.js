import data from "./data.json";
// import data from "../../assets/images/avatars"
export const readJson = (data) => ({
  type: "GET",
  payload: data,
  // return (dispatch) => {
  //   return require("/data.json");
  // };
});
