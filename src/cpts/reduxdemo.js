import { createStore, combineReducers } from "redux";
const add_Things = "add_Things";
const peopleState = [
	{
		things: "zh",
		times: "2018"
	},
	{
		things: "zh1",
		times: "2018"
	}
];

const reducer1 = function(state = peopleState, action) {
	switch (action.type) {
		case add_Things: {
			return {
				...state,
				peopleState: [...state.peopleState, action.payload]
			};
		}
		default:
			return state;
	}
};

function addThings(things, times) {
	return {
		type: add_Things,
		payload: {
			things,
			times
		}
	};
}

const allReducers = {
	reducer1
};
const rootReducer = combineReducers(allReducers);
const store = createStore(rootReducer);

let subscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addThings("ggg", "2018"));
