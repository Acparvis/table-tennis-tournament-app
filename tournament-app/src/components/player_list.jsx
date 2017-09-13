import React from "react";
import { fromJS } from "immutable";


// identify the corresponding list item
// use key to povide the index number
// fire a function that removes that specific index from the List.

export default ({ player, onClick, onChange, makeTree, createMatchup, matchNumber, removePlayer, currentId, clearCompetitors, contestants, makeTournament, firstroundmatches }) => (
	<div className="contain">
		<ul className="">
			{ player.map(( player, i ) => (
			<div key={ i } className="row">
				<li  className="no-bullets">
					{ player.get("value") }
				</li>
				<button className="delete btn btn-warning" onClick={ () => {
							removePlayer(i);
						} }>
						Delete </button>

			</div>
			)) }

		</ul>
		<button className="btn btn-success" onClick={ () => {
			// this function randomises the order of items in an array.
			function shuffleArray(a) { // Fisher-Yates shuffle
		    var i = a.length, t, j;
		    a = a.slice();
		    while (--i) t = a[i], a[i] = a[j = ~~(Math.random() * (i+1))], a[j] = t;
		    return a;
		} // ~~ is a new operator that is shorthand for Math.floor

			// this converts the object to an array.
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
						//Randomise the arrays order
						let shuffledArray = shuffleArray(arr);
						//Convert the array back into an immutable object.
						let shuffledImmutableArray = fromJS(shuffledArray);
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
						//Randomise the arrays order
						let shuffledArray = shuffleArray(arr);
						//Convert the array back into an immutable object.
						let shuffledImmutableArray = fromJS(shuffledArray);
						//Call a function that will trigger the number of rounds to be generated.
						makeTree(shuffledImmutableArray.size);
						//Call a function that will trigger the number of matches in the first round to be calculated.
						matchNumber(shuffledImmutableArray.size);
						//Call function that will create a new List of Maps called competitors.
						createMatchup(shuffledImmutableArray);
						// //Call function that generates the Tournament object data.
						makeTournament(shuffledImmutableArray, firstroundmatches);
					} else if (!buttonExecute(arr) && contestantsArr.length > 0) {
						if (window.confirm("Overwrite Current tournament")) {
							console.log("first else statement");
							let originalArray = fromJS(arr);
							//Call a function that will clear the competitors list.
							clearCompetitors(originalArray);
							matchNumber(originalArray.size);
							makeTree(originalArray.size);
					}
					}
		} } >Generate Tournament!!!</button>
	</div>
);
