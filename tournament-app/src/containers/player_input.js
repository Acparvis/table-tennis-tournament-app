import { connect } from "react-redux";


import { 
	updateEdit,
} from "../data/actions/state";

import Player from "../components/player_input";



const mapStateToProps = state => {
	let input = state.get("value");
	
		return {
			value: input
		}
};


const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateEdit(value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Player);