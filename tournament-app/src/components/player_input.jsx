import React from "react";


//@todo set input field to reset after Enter button is pressed.
export default ({ textChange, value, player, playerSubmit, currentId, increaseId, clearInput}) => (
	<div>
		<h1>Enter Players</h1>
	        <input id="playerInput" className="form-control input-field" type="text" pattern="[A-Za-z]" value={ value } onChange={ (e) => textChange(e.target.value) }
				onKeyPress={ (e) => {
					if(e.key === "Enter" && e.target.value.length > 0){
						playerSubmit(value, currentId);
						increaseId(currentId);
						clearInput("");
					}
				} }
			/>
			<button className="btn btn-primary" onClick={ () => {
					if ( value.length > 0) {
					playerSubmit(value, currentId);
					increaseId(currentId);
					clearInput("");
				}
			} } >Enter</button>
			<p>{ value }</p>
    </div>
);
