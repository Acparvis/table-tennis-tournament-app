import initial from "./initial";



import {
    UPDATE_EDIT,
    UPDATE_LIST,
    UPDATE_ID
} from "./actions/state"

// state functions
const updateEdit = (state, { value }) => state.set("value", value);
const updateList = (state, { value }) => state.update('players', p => p.push(value));
const updateId = ( state, { value }) => state.set("listsize", value);


export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_EDIT:  return updateEdit(state, action);
        case UPDATE_LIST: return updateList(state, action);
        case UPDATE_ID: return updateId(state, action);
        default: return state;
    }
};
