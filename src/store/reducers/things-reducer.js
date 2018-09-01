import { add_Things } from "../actions/index";
const initState = {
	num: "555",
	peopleState: [
		{
			things: "zh",
			times: "2018"
		},
		{
			things: "zh1",
			times: "2018"
		}
	]
};

export default function(state = initState, action) {
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
}
