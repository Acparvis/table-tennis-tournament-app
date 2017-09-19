import {connect} from "react-redux";

import {
	playerWins,
	makeNextRound,
	pushToNextRound

} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";

const mapStateToProps = state => {
	let contestantList = state.get("contestants");
	let roundNumber = state.get("numberofrounds");
	let numberofcontestants = contestantList.size;
	let matchNumber = state.get("firstroundmatches");
	let rounds = state.getIn(["Tournament", "Rounds"]);
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
	playerWin: (index, result, player, nextRound, matchId, otherPlayer) => dispatch(playerWins(index, result, player, nextRound, matchId, otherPlayer)),
	playerPush: (index, result, player, nextRound, matchId, otherPlayer) => dispatch(pushToNextRound(index, result, player, nextRound, matchId, otherPlayer)),
	takeWinners: (value) => dispatch(makeNextRound(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
