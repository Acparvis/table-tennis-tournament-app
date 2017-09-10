import { connect } from "react-redux";

import {
	updateText,
	updateList,
	updateId,
} from "../data/actions/state";

import PlayerInput from "../components/player_input";



const mapStateToProps = state => {
	let name = state.get("value");
	let currentId = state.get("listsize");

	return {
		value: name,
		currentId: currentId
	}
};

// @todo move the map to be in the reducer, currently the value in the action creator is the map object. This means i will also have to pass two arguments to the action creator and assemble the map in the reducer.
const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateText(value)),
	playerSubmit: (value, index) => dispatch(updateList(index, value)),
	increaseId: (value) => dispatch(updateId(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
