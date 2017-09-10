import React from "react";


export default ({ player }) => (
	<div>
		<h1>Tournament Tree</h1>
		<ul>
			{ player.map(( player, i ) => (
				//This loop iterates over each palyer in the list and creates a list item with the value.
				<li>
					{ player.get(["players"], player.get('value')) }
				</li>
			)) }

		</ul>
	</div>
);
