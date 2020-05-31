import { combineReducers } from "redux";
import chatReducer from "./components/Chat/ducks/reducer";

export default combineReducers({
  chat: chatReducer,
});
