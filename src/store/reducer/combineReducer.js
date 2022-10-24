import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";

const combineReducer= combineReducers({
    counterReducer : counterReducer
})
export default combineReducer