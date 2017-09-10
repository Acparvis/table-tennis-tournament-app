import initial from "./initial";
import { Map } from 'immutable';

import {
    UPDATE_TEXT,
    UPDATE_LIST,
    UPDATE_ID,
    UPDATE_CONTESTANTS,
    DEFINE_ROUNDS
} from "./actions/state"

// state functions

// Updates the value state with whatever is in the input box.
const updateText = (state, { value }) => state.set("value", value);


// @todo Work out why this function misbehaves when it is split across multiple lines. If possible try to rectify it as it is difficult to read at the moment.
// Creates a player Map with the value of whatever is in the input box at the time.
const updateList = (state, { index, value }) => state.update('players', p => p.push(Map({id: index + 1, value: value, winner: 0, pointsWon: 0, pointsLost: 0})));


// Updates the listsize state, so we have a total number of players when we want to start the tournament.
const updateId = ( state, { value }) => state.set("listsize", value + 1);


// Populates the contestants list with all the players in a randomised order.
const updateContestants = ( state, { value }) => state.set("contestants", value);

// Works out how many rounds need to be geenrated and sets the numebr in the state. Takes the square root and then roudns up to the nearest whole number.
const defineRounds = (state, { value }) => state.set("numberofrounds", Math.ceil(Math.sqrt(value)));



// Reducer switch statement.
export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_TEXT:  return updateText(state, action);
        case UPDATE_LIST: return updateList(state, action);
        case UPDATE_ID: return updateId(state, action);
        case UPDATE_CONTESTANTS: return updateContestants(state, action);
        case DEFINE_ROUNDS:  return defineRounds(state, action);
        default: return state;
    }
};
