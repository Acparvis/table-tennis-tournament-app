import React from "react";
import {  } from "immutable";


export default ({ player, onClick, onChange, makeTree, createMatchup, matchNumber, removePlayer, currentId, clearCompetitors, contestants, makeTournament, firstroundmatches, updateListSize }) => (
	<div className="container animated fadeIn">

		<div className="contain">

		<button className="btn btn-success start" onClick={ () => {
			let shuffledImmutableArray = player.sortBy(Math.random);

			let contestantsArr = contestants.toArray();

			const buttonExecute = (arr) => {//Checks the player array is greater than 1.
				if (arr.size > 0) {
					return true;
				}
			};


			if ((shuffledImmutableArray.size % 4) % 4 !== 0 || shuffledImmutableArray.size === 12 || shuffledImmutableArray.size > 16){//Checks the number of players being put into the tournament, and rejects it if the number is innapropriate.
				alert("Please enter either 4, 8 or 16 players!");
			} else {
			// if statement tells if there is currently a tournament to be overwritten. If there is, it double checks with a confirm window to give the user a chance - incase of accidental button pressing.
			if (buttonExecute(player) && contestantsArr.length > 0) { //There is a already a torunament generated AND there are players that will overwrite the existing tournament.
				if (window.confirm("Overwrite Current tournament")) {
				// Call function that will trigger the number of rounds to be generated.
				makeTree(shuffledImmutableArray.size);
				// Call function that will trigger the number of matches in the first round to be calculated.
				matchNumber(shuffledImmutableArray.size);
				// Call function that will create a new List of Maps called competitors.
				createMatchup(shuffledImmutableArray);
				// Call function that generates the Tournament object data.
				makeTournament(shuffledImmutableArray, firstroundmatches);
				// Call function that updates the listsize property
				updateListSize(player.size);
				}
			} else if (buttonExecute(player)) { //No current tournament, but there are contestants waiting to be entered.
				makeTree(shuffledImmutableArray.size);
				matchNumber(shuffledImmutableArray.size);
				createMatchup(shuffledImmutableArray);
				makeTournament(shuffledImmutableArray, firstroundmatches);
				updateListSize(player.size);
			} else if (!buttonExecute(player) && contestantsArr.length > 0) {//When the player list is blank but there is still a previous tournament generated.
				if (window.confirm("Clear Current tournament")) {
					clearCompetitors(player);
					matchNumber(player.size);
					makeTree(player.size);
					makeTournament(player, 0);
					updateListSize(player.size);
				}
			}
		}} } >Generate Tournament!!!</button>

		</div>
		<div className="contain">
			<p>Enter 4, 8 or 16 players</p>
		</div>
		<ul className="contestant-list">
			{ player.map(( player, i ) => (
			<div key={ i } className="row">
				<button className="delete btn btn-warning player" onClick={ () => {
							removePlayer(i);//removes player from player list.
						} }>
						Delete
				</button>
				<li  className="no-bullets btn player">
					{ player.get("value") }
				</li>

			</div>
			)) }

		</ul>
	</div>
);
