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

export const UPDATE_CONTESTANTS = Symbol("UPDATE_CONTESTANTS");

export const updateContestants = (value) => ({
	type: UPDATE_CONTESTANTS,
	value,
});

export const DEFINE_ROUNDS = Symbol("DEFINE_ROUNDS");

export const defineRounds = (value) => ({
	type: DEFINE_ROUNDS,
	value,
});

export const FIRST_ROUND_MATCHES = Symbol("FIRST_ROUND_MATCHES");

export const firstRoundMatches = (value) => ({
	type: FIRST_ROUND_MATCHES,
	value,
});

export const RESET_VALUE = Symbol("RESET_VALUE");

export const resetValue = (value) => ({
	type: RESET_VALUE,
	value,
});

export const PLAYER_DELETE = Symbol("PLAYER_DELETE");

export const playerDelete = (value) => ({
	type: PLAYER_DELETE,
	value,
});

export const RESET_COMPETITORS = Symbol("RESET_COMPETITORS");

export const resetCompetitors = (value) => ({
	type: RESET_COMPETITORS,
	value,
});
