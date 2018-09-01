import { combineReducers } from "redux";
import thingsReducer from "./things-reducer.js";
import numReducer from "./num-reducer.js";
let re =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();
const allReducers = {
	thingsReducer,
	numReducer,
	re
};
const rootReducer = combineReducers(allReducers);
export default rootReducer;
