import React from "react";


//@todo set input field to reset after Enter button is pressed.
export default ({ textChange, value, player, playerSubmit, currentId, increaseId}) => (
	<div>
	        <input onChange={ (e) => textChange(e.target.value) }
				onKeyPress={ (e) => {
					if(e.key === "Enter" && e.target.value.length > 0){
						playerSubmit(value, currentId);
						increaseId(currentId);
					}
				} }
			/>
			<button onClick={ () => {
					if ( value.length > 0) {
					playerSubmit(value, currentId);
					increaseId(currentId);
				}
			} } >Enter</button>
			<p>{ value }</p>
    </div>
);
