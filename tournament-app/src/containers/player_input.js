import { connect } from "react-redux";


import { 
	updateEdit,
	updateList,
} from "../data/actions/state";

import PlayerInput from "../components/player_input";



const mapStateToProps = state => {
	let name = state.get("value");
	
	return {
		value: name
	}
};


const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateEdit(value)),
	playerSubmit: (value) => dispatch(updateList(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);