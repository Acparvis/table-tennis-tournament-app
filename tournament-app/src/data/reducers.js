import initial from "./initial";
import { Map } from 'immutable';



import {
    UPDATE_TEXT,
    UPDATE_LIST,
    UPDATE_ID
} from "./actions/state"

// state functions

// Updates the value state with whatever is in the input box.
const updateText = (state, { value }) => state.set("value", value);


// @todo Work out why this function misbehaves when it is split across multiple lines. If possible try to rectify it as it is difficult to read at the moment.
// Creates a player Map with the value of whatever is in the input box at the time.
const updateList = (state, { index, value }) => state.update('players', p => p.push(Map({id: index + 1, value: value, winner: 0, pointsWon: 0, pointsLost: 0})));


// Updates the listsize state, so we have a total number of players when we want to start the tournament.
const updateId = ( state, { value }) => state.set("listsize", value + 1);



// Reducer switch statement.
export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_TEXT:  return updateText(state, action);
        case UPDATE_LIST: return updateList(state, action);
        case UPDATE_ID: return updateId(state, action);
        default: return state;
    }
};
