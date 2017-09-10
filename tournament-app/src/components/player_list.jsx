import React from "react";
import { fromJS } from "immutable";


export default ({ player, onClick, onChange, makeTree, createMatchup }) => (
	<div>
		<ul>
			{ player.map(( player, i ) => (
				<li key={ i } >
					{ player.get("value") }
				</li>
			)) }

		</ul>
		<button onClick={ () => {

			//@todo move this fuction logic to reducer
			// this converts the object to an array.
			let arr = player.toArray();

			// this function randomises the order of the players in the list
			function shuffleArray(a) { // Fisher-Yates shuffle
		    var i = a.length, t, j;
		    a = a.slice();
		    while (--i) t = a[i], a[i] = a[j = ~~(Math.random() * (i+1))], a[j] = t;
		    return a;
			}

			arr = shuffleArray(arr);

			arr = fromJS(arr);
			//call a function here that will create a new List of Maps called competitors.
			createMatchup(arr);
			//call a function here that will trigger the player tree to be generated.
			makeTree(arr.size);
			console.log("array: ", arr);
		} } >Start Tournament!!!</button>
	</div>
);
