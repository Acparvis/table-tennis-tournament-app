export const UPDATE_TEXT = Symbol("UPDATE_TEXT");

export const updateText = (value) => ({
	type: UPDATE_TEXT,
	value
});

export const UPDATE_LIST = Symbol("UPDATE_LIST");

export const updateList = (index, value) => ({
	type: UPDATE_LIST,
	index,
	value,
});

export const UPDATE_ID = Symbol("UPDATE_ID");

export const updateId = (value) => ({
	type: UPDATE_ID,
	value,
});
