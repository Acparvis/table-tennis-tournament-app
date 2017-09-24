import initial from "./initial";
import {Map, fromJS} from 'immutable';

import {
	UPDATE_TEXT,
	UPDATE_LIST,
	UPDATE_ID,
	UPDATE_CONTESTANTS,
	DEFINE_ROUNDS,
	FIRST_ROUND_MATCHES,
	RESET_VALUE,
	PLAYER_DELETE,
	RESET_COMPETITORS,
	GENERATE_TOURNAMENT,
	PLAYER_WINS,
	REGEN_LIST_SIZE,
	PUSH_TO_NEXT_ROUND
} from "./actions/state"

// Updates the value state with whatever is in the input box.
const updateText = (state, {value}) => state.set("value", value);

// Creates a player Map with the value of whatever is in the input box at the time.
const updateList = (state, {index, value}) => state.update('players', p => {
	return p.push(Map({
		id: index + 1,
		value: value
	}))
});

// Updates the listsize state, so we have a total number of players when we want to start the tournament.
const updateId = (state, {value}) => state.set("listsize", value + 1);

// Re-generates the listsize proeprty with correct value
const regenListSize = (state, {value}) => state.set("listsize", value);

// Populates the contestants list with all the players in a randomised order.
const updateContestants = (state, {value}) => state.set("contestants", value);

//Generates data for Tournament object
const generateTournament = (state, {value, rounds}) => state.update('Tournament', (p) => {
	let array = value.toJS();
	let matches = [];
	let matchCounter = 0;

	for (var i = 0; i < array.length; i++) {//creates a Map for each map in the round
		if (i % 2 === 0) {
			matches.push({
				player1: array[i]["value"],
				player2: array[i + 1]["value"],
				result: 0,
				nextround: 1,
				matchId: matchCounter
			})
			matchCounter++;
		}
	}

	//generate future rounds
	let futureRounds = [];
	let matchFrequency = Math.ceil(matches.length /2);

	for (var i = 1; i < state.get("numberofrounds"); i++) {
		let futureMatches = [];

			for (var x = 1; x <= matchFrequency; x++) {
					futureMatches.push({
						player1: "TBD",
						player2: "TBD",
						result: 0,
						nextround: i + 1,
						matchId: matchCounter
					})
					matchCounter++;
			}
			if (matchFrequency%2 !== 0 && matchFrequency > 1) {
				matchFrequency += 1
				matchFrequency = matchFrequency/2;
			}else {
				matchFrequency = matchFrequency/2;
			}
		futureRounds.push(futureMatches);
	}
		futureRounds.unshift(matches);//Adds the first round of populated matches to the tournament data structure.

		futureRounds.push([{//Adds the winner 'match' to the end of the tournament structure.
			player1: "Winner",
			player2: "none",
			result: 3,
			matchId: matchCounter
		}]
		)

	let immutableFutureRounds = fromJS(futureRounds);

	return Map({
		Rounds: immutableFutureRounds,
	})
});

// Works out how many rounds need to be generated and sets the numebr in the state. Takes the square root and then roudns up to the nearest whole number.
const defineRounds = (state, {value}) => state.set("numberofrounds", Math.ceil(Math.sqrt(value)));

// // Works out how many matches will be in the first round of the tournament. If the player number is uneven, we round up to provide a partial match, later on we can use this match as a bi match, thereby providing a random seed in the tournament if the player number is odd.
const firstRoundMatches = (state, {value}) => {
	if (value % 2 === 0) {
		value = value / 2;
		return state.set("firstroundmatches", value);
	} else
		value = value / 2;
	return state.set("firstroundmatches", Math.ceil(value));
};

// resets the value in the state and input box.
const resetValue = (state, {value}) => state.set("value", value);

//removes the player by index using immutable delete function.
const playerDelete = (state, {value}) => state.update('players', p => p.delete(value));

//Resets the competitors list to empty.
const resetCompetitors = (state, {value}) => state.set("contestants", value);


// TOURNAMENT REDUCERS //


//Updates which of the first round pairings has won the game - changes state of result.
const playerWins = (state, { index, result, player, nextRound, matchId, otherPlayer }) => {
	if (player !== "TBD" && otherPlayer !== "TBD") {// disables button if TBD is in the round.
		let thisRound = nextRound - 1;
		return state.setIn(["Tournament", "Rounds", thisRound, index, "result"], result);
	} else {
		return state;
	}
};

const pushToNextRound = (state, {index, result, player, nextRound, matchId, otherPlayer }) => {
	if (player !== "TBD" && otherPlayer !== "TBD") {// disables button if TBD is in the round.
		if (matchId % 2 === 0) {
			let evenIndex = index / 2;//even indexes correspond to their half in the next round.
			return state.setIn(["Tournament", "Rounds", nextRound, evenIndex, "player1"], player);
		} else {
			let oddIndex = (index - 1) / 2;//this makes the odd index correspond to the same match as the above even index.
			return state.setIn(["Tournament", "Rounds", nextRound, oddIndex, "player2"], player);
		}
	} else {
		return state;
	}
}
// Reducer switch statement.
export default(state = initial, action) => {
	switch (action.type) {
		case UPDATE_TEXT:
			return updateText(state, action);
		case UPDATE_LIST:
			return updateList(state, action);
		case UPDATE_ID:
			return updateId(state, action);
		case UPDATE_CONTESTANTS:
			return updateContestants(state, action);
		case DEFINE_ROUNDS:
			return defineRounds(state, action);
		case FIRST_ROUND_MATCHES:
			return firstRoundMatches(state, action);
		case RESET_VALUE:
			return resetValue(state, action);
		case PLAYER_DELETE:
			return playerDelete(state, action);
		case RESET_COMPETITORS:
			return resetCompetitors(state, action);
		case GENERATE_TOURNAMENT:
			return generateTournament(state, action);
		case PLAYER_WINS:
			return playerWins(state, action);
		case REGEN_LIST_SIZE:
			return regenListSize(state, action);
		case PUSH_TO_NEXT_ROUND:
			return pushToNextRound(state, action);
		default:
			return state;
	}
};
