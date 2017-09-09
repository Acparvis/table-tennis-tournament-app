import { connect } from "react-redux";
import { Map } from 'immutable';




import {
	updateEdit,
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


const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateEdit(value)),
	playerSubmit: (value, index) => dispatch(updateList(Map({id: index + 1, value: value}))),
	increaseId: (value) => dispatch(updateId(value + 1))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
