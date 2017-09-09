import React from "react";

export default ({ textChange, value, player, playerSubmit, currentId, increaseId}) => (
	<div>
        <input onChange={ (e) => textChange(e.target.value) } />
		<button onClick={ () => {
			playerSubmit(value, currentId);
			increaseId(currentId);
		} } >Enter</button>
		<p>{ value }</p>
    </div>
);
