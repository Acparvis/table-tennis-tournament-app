import { connect } from "react-redux";
import { toJS, fromJS } from 'immutable';


import {

} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";



const mapStateToProps = state => {
	let contestantList = state.get("contestants");


	return {
		player: contestantList,
	}

};


const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
