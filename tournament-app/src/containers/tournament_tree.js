import {connect} from "react-redux";

import {
	playerWins,
	makeNextRound

} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";

const mapStateToProps = state => {
	let contestantList = state.get("contestants");
	let roundNumber = state.get("numberofrounds");
	let numberofcontestants = contestantList.size;
	let matchNumber = state.get("firstroundmatches");
	let rounds = state.getIn(["Tournament", "Rounds", "0"]);
	let biPlayer = state.getIn(["Tournament", "ByePlayer"]);

	return {
		contestants: contestantList,
		numberofrounds: roundNumber,
		numberofcontestants: numberofcontestants,
		firstroundmatches: matchNumber,
		rounds: rounds,
		biPlayer: biPlayer
	}

};

//test comment

const mapDispatchToProps = dispatch => ({
	playerWin: (value, result) => dispatch(playerWins(value, result)),
	takeWinners: (value) => dispatch(makeNextRound(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
