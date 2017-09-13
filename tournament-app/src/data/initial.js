import {Map, List} from "immutable";

// Beggining state, once a player is entered this info will be overwritten.
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

//
//tournament object
// {
//
// matchesPlayed: 2;
//
// [0]->[1]
//
// Rounds: [[{},{},{},{}],[{},{}],[{}],[{}]]
//
// }
//
// Match
// {
//
// p1: string
// p2: string
// score: int
// outcome: int 0 - 1
//
// }

// Tournament {
// 	Rounds[
// 		[{},{},{},{},{},{},{},{}],
// 		[{},{},{},{}],
// 		[{},{}],
// 		[{}]
// 	]
// }
