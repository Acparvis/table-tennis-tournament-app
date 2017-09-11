import React from "react";
import { fromJS } from "immutable";


// identify the corresponding list item
// use key to povide the index number
// fire a function that removes that specific index from the List.

export default ({ player, onClick, onChange, makeTree, createMatchup, matchNumber, removePlayer, currentId, clearCompetitors }) => (
	<div>
		<ul>
			{ player.map(( player, i ) => (
				<li key={ i } >
					{ player.get("value") }
					<button  onClick={ () => {
								removePlayer(i);
							} }>
							Delete </button>
				</li>
			)) }

		</ul>
		<button onClick={ () => {
			// this function randomises the order of items in an array.
			function shuffleArray(a) { // Fisher-Yates shuffle
		    var i = a.length, t, j;
		    a = a.slice();
		    while (--i) t = a[i], a[i] = a[j = ~~(Math.random() * (i+1))], a[j] = t;
		    return a;
		} // ~~ is a new operator that is shorthand for Math.floor

			// this converts the object to an array.
			let arr = player.toArray();

			// Check there is at least one player in the array.
			if (arr.length > 0) {
				//Randomise the arrays order
				arr = shuffleArray(arr);
				//Convert the array back into an immutable object.
				arr = fromJS(arr);

				//Call a function that will create a new List of Maps called competitors.
				createMatchup(arr);

				//Call a function that will trigger the number of rounds to be generated.
				makeTree(arr.size);

				//Call a function that will trigger the number of matches in the first round to be calculated.
				matchNumber(arr.size);
			} else {
				arr = fromJS(arr);
				//Call a function that will clear the competitors list.
				clearCompetitors(arr);
				matchNumber(arr.size);
				makeTree(arr.size);
			}
			console.log("array: ", arr.size);
		} } >Start Tournament!!!</button>
	</div>
);
