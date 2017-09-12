import initial from "./initial";
import { Map, List, merge, fromJS, toJS } from 'immutable';

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
} from "./actions/state"

// state functions

// Updates the value state with whatever is in the input box.
const updateText = (state, { value }) => state.set("value", value);


// @todo Work out why this function misbehaves when it is split across multiple lines. If possible try to rectify it as it is difficult to read at the moment. The problem was I was neglecting to include a return statement, in ES6 you must include a return on a multiline function.
// Creates a player Map with the value of whatever is in the input box at the time.
const updateList = (state, { index, value }) => state.update('players', p => {
    return p.push(Map({
        id: index + 1,
        value: value,
        winner: 0
    }))
});


// Updates the listsize state, so we have a total number of players when we want to start the tournament.
const updateId = ( state, { value }) => state.set("listsize", value + 1);

// Populates the contestants list with all the players in a randomised order.
const updateContestants = ( state, { value }) => state.set("contestants", value);

//Generates data for Tournament object
const generateTournament = (state, { value, rounds }) => state.update('Tournament', (p) => {
    let firstRoundMatches = state.get("firstroundmatches");
    let array = value.toJS();
    let matches = [];
    let biPlayer = "";
    let numberOfRounds = state.get("numberofrounds");

    if (array.length % 2 !== 0) {
        biPlayer = array.pop()["value"];
    }

    for (var i = 0; i < array.length; i++) {
        if (i%2 === 0) {
            matches.push(
                {
                    player1: array[i]["value"],
                    player2: array[i + 1]["value"],
                    result: 0
                }
            )
        }
    }
    //@ todo manipulate the firstRoundMatches to get the values out we need to make the matches, probably need to edit the reducer above to do so.
    return Map({
        Rounds: List([matches, biPlayer])
    })
});

// Works out how many rounds need to be generated and sets the numebr in the state. Takes the square root and then roudns up to the nearest whole number.
const defineRounds = (state, { value }) => state.set("numberofrounds", Math.ceil(Math.sqrt(value)));

// // Works out how many matches will be in the frist round of the tournament. If the player number is uneven, we round up to provide a partial match, later on we can use this match as a bi match, thereby providing a random seed in the tournament if the player number is odd.
// Further on we can also use this code to generate subsequent rounds.
const firstRoundMatches = (state, { value }) => {
            if (value%2 === 0){
                value = value/2;
                return state.set("firstroundmatches", value);
            } else
                value = value/2;
                return state.set("firstroundmatches", Math.ceil(value));
            };

// resets the value in the state and input box.
const resetValue = (state, { value } ) => state.set("value", value);


//removes the player by index using immutable delete function.
const playerDelete = (state, { value } ) => state.update('players', p => p.delete(value));

//Resets the competitors list to empty.
const resetCompetitors = (state, { value } ) => state.set("contestants", value);

// Reducer switch statement.
export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_TEXT:  return updateText(state, action);
        case UPDATE_LIST: return updateList(state, action);
        case UPDATE_ID: return updateId(state, action);
        case UPDATE_CONTESTANTS: return updateContestants(state, action);
        case DEFINE_ROUNDS:  return defineRounds(state, action);
        case FIRST_ROUND_MATCHES: return firstRoundMatches(state, action);
        case RESET_VALUE: return resetValue(state, action);
        case PLAYER_DELETE: return playerDelete(state, action);
        case RESET_COMPETITORS: return resetCompetitors(state, action);
        case GENERATE_TOURNAMENT: return generateTournament(state, action);
        default: return state;
    }
};
