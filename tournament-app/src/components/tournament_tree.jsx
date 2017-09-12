import React from "react";


export default ({ contestants, numberofrounds, numberofcontestants, firstroundmatches, rounds, biPlayer }) => (
	<div>
		<h1>Tournament Tree</h1>
		<p>Number of Rounds { numberofrounds }</p>
		<p>Number of players { numberofcontestants }</p>
		<p>Number of matches in First Round { firstroundmatches }</p>



		<p>Contestants:</p>
			<ul>
				{
					// This loop iterates over each player in the list and creates a list item with the value.
					rounds.map(( round, i ) => (
						<li key={ i } >
							<p className="player">{ round.get("player1") }</p>
							<p> VERSUS </p>
							<p className="player">{ round.get("player2") }</p>
						</li>
					))
				}
				{biPlayer.length > 0 ? ( <li>{biPlayer} got a bi</li>) : <p></p> }
			</ul>

	</div>
);
