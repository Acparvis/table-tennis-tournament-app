import { connect } from "react-redux";

import {
	updateText,
	updateList,
	updateId,
} from "../data/actions/state";

import TournamentTree from "../components/tournament_tree";



const mapStateToProps = state => {

};


const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
