import React from "react";


export default ({ contestants, numberofrounds, numberofcontestants, firstroundmatches, rounds, biPlayer }) => (
	<div>
		<h1>Tournament Tree</h1>
		<p>Number of Rounds { numberofrounds }</p>
		<p>Number of players { numberofcontestants }</p>
		<p>Number of matches in First Round { firstroundmatches }</p>

		<p>Contestants:</p>
			<ul className="no-bullets">
				{
					// This loop iterates over each player in the list and creates a list item with the value.
					rounds.map(( round, i ) => (
						<li key={ i } >
							<button className="player1 btn col-lg-1">{ round.get("player1") }</button>
							<p className="btn col-lg-1"> Vs </p>
							<button className="player2 btn col-lg-1">{ round.get("player2") }</button>
						</li>
					))
				}
				{biPlayer.length > 0 ? ( <li><button className="player player1">{biPlayer} got a bi</button></li>) : <p></p> }
			</ul>

	</div>
);
