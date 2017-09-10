import { Map, List } from "immutable";


// Beggining state, once a player is entered this info will be overwritten.
export default Map({
	value: "",
	players: List([]),
	listsize: 0,
	numberofrounds: 0
});
