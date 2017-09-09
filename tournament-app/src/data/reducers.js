import initial from "./initial";

import {
    UPDATE_EDIT,
} from "./actions/state"

// state functions
const updateEdit = (state, { value }) => state.set("value", value);


export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_EDIT:  return updateEdit(state, action);
        default: return state;
    }
};

