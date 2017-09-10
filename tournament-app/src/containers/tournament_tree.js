import { connect } from "react-redux";


import {

} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";



const mapStateToProps = state => {
	let contestantList = state.get("contestants");
	let roundNumber = state.get("numberofrounds");


	return {
		player: contestantList,
		numberofrounds: roundNumber,
	}

};


const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
