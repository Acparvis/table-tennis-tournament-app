import React from "react";
import { fromJS } from "immutable";


export default ({ player, onClick, onChange, makeTree, createMatchup, matchNumber }) => (
	<div>
		<ul>
			{ player.map(( player, i ) => (
				<li key={ i } >
					{ player.get("value") }
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
			}

			//@todo move this fuction logic to reducer
			// this converts the object to an array.
			let arr = player.toArray();
			arr = shuffleArray(arr);
			arr = fromJS(arr);

			//call a function here that will create a new List of Maps called competitors.
			createMatchup(arr);

			//call a function here that will trigger the number of rounds to be generated.
			makeTree(arr.size);

			//call a function here that will trigger the numebr of matches in the first round to be calculated.
			matchNumber(arr.size);

			console.log("array: ", arr.size);
		} } >Start Tournament!!!</button>
	</div>
);
