import React from "react";

export default ({ textChange, value, player, playerSubmit}) => (
	<div>
        <input onChange={ (e) => textChange(e.target.value) } />
		<button onClick={ () => playerSubmit(value) } >Enter</button>
		<p>{ value }</p>
    </div>
);


