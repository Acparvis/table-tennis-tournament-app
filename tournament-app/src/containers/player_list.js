import {connect} from "react-redux";

import {
	updateContestants,
	defineRounds,
	firstRoundMatches,
	playerDelete,
	resetCompetitors,
	generateTournament
} from "../data/actions/state";

import Player from "../components/player_list";

const mapStateToProps = state => {
	let input = state.getIn(["value"]);
	let playerName = state.get("players");
	let contestants = state.get("contestants");
	let matchNumber = state.get("firstroundmatches");

	return {value: input, player: playerName, contestants: contestants, firstroundmatches: matchNumber}
};

const mapDispatchToProps = dispatch => ({
	createMatchup: (value) => dispatch(updateContestants(value)),
	makeTree: (value) => dispatch(defineRounds(value)),
	matchNumber: (value) => dispatch(firstRoundMatches(value)),
	removePlayer: (value) => dispatch(playerDelete(value)),
	clearCompetitors: (value) => dispatch(resetCompetitors(value)),
	makeTournament: (value, rounds) => dispatch(generateTournament(value, rounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
