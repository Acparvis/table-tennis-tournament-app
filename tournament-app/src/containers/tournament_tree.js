import { connect } from "react-redux";

import {

} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";



const mapStateToProps = state => {
	let playerList = state.get("players");
	let test = [1, 2, 3, 4, 5];

	// this function randomises the order of the players in the list
	function shuffleArray(a) { // Fisher-Yates shuffle
    var i = a.length, t, j;
    a = a.slice();
    while (--i) t = a[i], a[i] = a[j = ~~(Math.random() * (i+1))], a[j] = t;
    return a;
	}
	const newPlayerList = shuffleArray(playerList);
	console.log(newPlayerList);
	return {
		player: newPlayerList,
	}

};


const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
