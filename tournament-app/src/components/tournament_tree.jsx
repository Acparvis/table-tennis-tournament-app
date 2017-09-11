import React from "react";


export default ({ player, numberofrounds, numberofcontestants, firstroundmatches }) => (
	<div>
		<h1>Tournament Tree</h1>
		<p>Number of Rounds { numberofrounds }</p>
		<p>Number of players { numberofcontestants }</p>
		<p>Number of matches in First Round { firstroundmatches }</p>


		<ul>
			{
				player.map(( player, i ) => (
				//This loop iterates over each player in the list and creates a list item with the value.
				<li key={ i + i} >
					{ player.get(["players"], player.get('value')) }
				</li>
			)) }

		</ul>
	</div>
);
