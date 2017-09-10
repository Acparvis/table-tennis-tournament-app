import React from "react";


export default ({ player, onClick, onChange, makeTree }) => (
	<div>
		<ul>
			{ player.map(( player, i ) => (
				<li key={ i } >
					{ player.get("value") }
				</li>
			)) }

		</ul>
		<button onClick={ () => {
			let arr = player.toList();

			//call a function here that will trigger the player tree to be generated.
			//makeTree(arr.size);
			console.log("player array size: ", arr.size);
		} } >Start Tournament!!!</button>
	</div>
);
