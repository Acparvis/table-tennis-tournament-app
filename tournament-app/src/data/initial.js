import {Map, List} from "immutable";

// Initial state, once a player is entered this info will be overwritten.
export default Map({
	value: "",
	players: List([]),
	listsize: 0,
	numberofrounds: 0,
	firstroundmatches: 0,
	contestants: List([]),
	matches: 0,
	Tournament: Map({
		Rounds: List([List([]), Map({})])
	})
});
