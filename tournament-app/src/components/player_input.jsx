import React from "react";

//@todo set input field to reset after Enter button is pressed.
export default({
	textChange,
	value,
	player,
	playerSubmit,
	currentId,
	increaseId,
	clearInput,
	listPlayers
}) => (
	<div className="animated fadeIn">
		<div className="contain input-container">
			<br/><h1 className="">Enter Players</h1>
		</div>
		<div className="row contain center-alignment">

			{/* Player input field */}
			<input id="playerInput" className="form-control input-field player-input offset-md-1" type="text" pattern="^[a-zA-Z]+$" maxLength="25" value={value} onChange={(e) => textChange(e.target.value)} onKeyPress={(e) => {
				if (e.key === "Enter" && e.target.value.length > 0 && e.target.value !== "none") {
					playerSubmit(value, currentId);
					increaseId(currentId);
					clearInput("");
				}
			}}/>
			<button className="btn" onClick={() => {
				if (value.length > 0 && value !== "none") {
					playerSubmit(value, currentId);
					increaseId(currentId);
					clearInput("");
				}
			}}>Enter</button>
			<p className="player-number">Players : { listPlayers.size }</p>
		</div>
	</div>
);

//componentDidChange -  increase
