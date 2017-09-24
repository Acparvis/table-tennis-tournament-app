import { connect } from "react-redux";

import {
	updateText,
	updateList,
	updateId,
	resetValue,
} from "../data/actions/state";

import PlayerInput from "../components/player_input";

const mapStateToProps = state => {
	let name = state.get("value");
	let currentId = state.get("listsize");
	let listPlayers = state.get("players")


	return {
		value: name,
		currentId: currentId,
		listPlayers: listPlayers
	}
};

const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateText(value)),
	playerSubmit: (value, index) => dispatch(updateList(index, value)),
	increaseId: (value) => dispatch(updateId(value)),
	clearInput: (value) => dispatch(resetValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
