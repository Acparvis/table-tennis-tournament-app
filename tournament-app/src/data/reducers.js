import initial from "./initial";

import {
    UPDATE_EDIT,
    UPDATE_LIST
} from "./actions/state"

// state functions
const updateEdit = (state, { value }) => state.set("value", value);
const updateList = (state, { value }) => state.update("players", players => players.push(value));


export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_EDIT:  return updateEdit(state, action);
        case UPDATE_LIST: return updateList(state, action);
        default: return state;
    }
};

