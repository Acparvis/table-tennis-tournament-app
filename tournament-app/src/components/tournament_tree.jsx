import React from "react";

export default({
	contestants,
	numberofrounds,
	numberofcontestants,
	firstroundmatches,
	rounds,
	biPlayer,
	playerWin,
	takeWinners,
	playerPush
}) => (
	<div>
		{/* conditional rendering of tournament based on the number of players in the contstants List.  */}
		{numberofcontestants > 0
			? (
				<div className="animated fadeIn">
					<div className="contain">
						<h1>Tournament</h1>
					</div>
					<div className="tournament-container">
						{
							//loop over rounds, taking each array.
							rounds.map((round, i) => (
								<ul key={ i } className="no-bullets">{
								round.map((match, x) => (
									<li key={x}>
										<button className={match.get("result") === 1 ? "player1 btn btn-warning" : 'player1 btn' } onMouseDown={ () => playerWin(x, 1, match.get("player1"), match.get("nextround"), match.get("matchId"))  } onClick={ () => playerPush(x, 1, match.get("player1"), match.get("nextround"), match.get("matchId")) } >{match.get("player1")}</button>
										<p className="vs">
											Vs
										</p>
										<button className={match.get("result") === 2 ? "player2 btn btn-warning" : 'player2 btn' } onMouseDown={ () => playerWin(x, 2, match.get("player2"), match.get("nextround"), match.get("matchId")) } onClick={ () => playerPush(x, 2, match.get("player2"), match.get("nextround"), match.get("matchId")) } >{match.get("player2")}</button>
									</li>
								))
							}	</ul>
							))
							// generate dom objects for each match within the array, second loop

						}
					</div>
				</div>
			)
			: <p></p>}
	</div>
);
