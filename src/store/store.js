import { createStore } from "redux";
import rootReducer from "./reducers";
//import { addThings } from "./actions/index";

const store = createStore(rootReducer);
// let subscribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(addThings("ggg", "2018"));
// subscribe();
export default store;
