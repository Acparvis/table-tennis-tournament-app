import React from "react";

export default({
	contestants,
	numberofrounds,
	numberofcontestants,
	firstroundmatches,
	rounds,
	biPlayer,
	playerWin,
	takeWinners
}) => (
	<div>
		{/* conditional rendering of tournament based on the number of players in the contstants List.  */}
		{numberofcontestants > 0
			? (
				<div className="animated fadeIn">
					<div className="contain">
						<h1>Tournament</h1>
					</div>
					<ul className="no-bullets">
						{// This loop iterates over each player in the list and creates a list item with the value.
							// console.log(rounds)
						}


					</ul>
					{biPlayer.length > 0
						? (
							<ul className="no-bullets">
								<li>
									<button className="player1 btn btn-warning">{biPlayer}
									</button>
									<br/>Free pass to next round!
								</li>
							</ul>
						)
						: <p></p>}
				<ul>
					<button className="generate btn btn-primary" onClick={ () => takeWinners(rounds) }>Generate next round</button>
				</ul>

				</div>
			)
			: <p></p>}
	</div>
);
