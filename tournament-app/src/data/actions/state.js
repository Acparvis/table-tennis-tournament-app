export const UPDATE_EDIT = Symbol("UPDATE_EDIT");

export const updateEdit = (value) => ({
	type: UPDATE_EDIT,
	value
});

export const UPDATE_LIST = Symbol("UPDATE_LIST");

export const updateList = (value) => ({
	type: UPDATE_LIST,
	value,
});

export const UPDATE_ID = Symbol("UPDATE_ID");

export const updateId = (value) => ({
	type: UPDATE_ID,
	value,
});
