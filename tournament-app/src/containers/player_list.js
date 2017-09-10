import { connect } from "react-redux";



import {
	updateText,
} from "../data/actions/state";

import Player from "../components/player_list";



const mapStateToProps = state => {
	let input = state.getIn(["value"]);
	let playerName = state.get("players");

		return {
			value: input,
			player: playerName,
		}
};


const mapDispatchToProps = dispatch => ({
	textChange: (value) => dispatch(updateText(value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Player);
