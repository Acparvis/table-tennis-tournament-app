import React from "react";


export default ({ contestants, numberofrounds, numberofcontestants, firstroundmatches, rounds, biPlayer }) => (
	<div>
		{numberofcontestants > 0 ? (
		<div>
			<h1>Tournament</h1>
				<ul className="no-bullets">
					{
						// This loop iterates over each player in the list and creates a list item with the value.
						rounds.map(( round, i ) => (
							<li key={ i } >
								<button className="player1 btn">{ round.get("player1") }</button>
								<p className="vs"> Vs </p>
								<button className="player2 btn">{ round.get("player2") }</button>
							</li>
						))
					}




				</ul>
				{biPlayer.length > 0 ? (
					<ul className="no-bullets">
						<li>
							<button className="player1 btn">{biPlayer} </button>
							<br/>Free pass to next round!
						</li>
					</ul>) : <p></p> }

		</div>) : <p></p> }
	</div>
);
