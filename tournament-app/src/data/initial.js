import {Map, List} from "immutable";

// Initial state, once a player is entered this info will be overwritten.
export default Map({
	value: "",
	players: List([]), //Players initially go here when entered by the user.
	listsize: 0,
	numberofrounds: 0, //Number of rounds that will need to be generated, based on the number of players entered.
	firstroundmatches: 0, //Number of matches that will be played in the first round.
	contestants: List([]),
	matches: 0,
	Tournament: Map({//Tournament data structure.
		Rounds: List([List([]), Map({})]) //Each Map contains a match, the lists are rounds.
	})
});
