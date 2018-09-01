export const add_Things = "add_Things";
export function addThings(things, times) {
	return {
		type: add_Things,
		payload: {
			things,
			times
		}
	};
}
