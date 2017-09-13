import React from "react";
import { fromJS, sortBy } from "immutable";


export default ({ player, onClick, onChange, makeTree, createMatchup, matchNumber, removePlayer, currentId, clearCompetitors, contestants, makeTournament, firstroundmatches }) => (
	<div className="container">
		<div className="contain">
		<button className="btn btn-success start" onClick={ () => {
			let shuffledImmutableArray = player.sortBy(Math.random);
			let arr = player.toArray();
			let contestantsArr = contestants.toArray();

			const buttonExecute = (arr) => {
				if (arr.length > 0) {
					return true;
				}
			};

			// if statement tells if there is currently a tournament to be overwritten. If there is, it double checks with a confirm window to give the user a chance - incase of accidental button pressing.
			if (buttonExecute(arr) && contestantsArr.length > 0) {
				if (window.confirm("Overwrite Current tournament")) {
				//Call function that will trigger the number of rounds to be generated.
				makeTree(shuffledImmutableArray.size);
				//Call function that will trigger the number of matches in the first round to be calculated.
				matchNumber(shuffledImmutableArray.size);
				//Call function that will create a new List of Maps called competitors.
				createMatchup(shuffledImmutableArray);
				// //Call function that generates the Tournament object data.
				makeTournament(shuffledImmutableArray, firstroundmatches);
				}
			} else if (buttonExecute(arr)) {
				makeTree(shuffledImmutableArray.size);
				matchNumber(shuffledImmutableArray.size);
				createMatchup(shuffledImmutableArray);
				makeTournament(shuffledImmutableArray, firstroundmatches);
			} else if (!buttonExecute(arr) && contestantsArr.length > 0) {
				if (window.confirm("Overwrite Current tournament")) {
					clearCompetitors(player);
					matchNumber(player.size);
					makeTree(player.size);
			}
			}
		} } >Generate Tournament!!!</button>

		</div>
		<ul className="">
			{ player.map(( player, i ) => (
			<div key={ i } className="row">
				<button className="delete btn btn-warning player" onClick={ () => {
							removePlayer(i);
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
