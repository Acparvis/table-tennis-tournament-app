import React from "react";


export default ({ player, numberofrounds }) => (
	<div>
		<h1>Tournament Tree</h1>
		<p>Number of Rounds { numberofrounds }</p>
		<ul>
			{
				player.map(( player, i ) => (
				//This loop iterates over each player in the list and creates a list item with the value.
				<li key={ i } >
					{ player.get(["players"], player.get('value')) }
				</li>
			)) }

		</ul>
	</div>
);
