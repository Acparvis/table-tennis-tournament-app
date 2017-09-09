import { Map, List } from "immutable";

export default Map({
	value: "firstvalue",
	players: List([
		Map({
	        id: 1,
	        value: "John",
    	}),
		Map({
	        id: 2,
	        value: "Jim",
    	}),
		Map({
	        id: 3,
	        value: "Bob",
    	})
	]),
	listsize: 3
});
