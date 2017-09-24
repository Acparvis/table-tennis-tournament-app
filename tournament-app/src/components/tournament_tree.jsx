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
							//loop over rounds, taking each array of matches.
							rounds.map((round, i) => (
								<ul key={ i } className="no-bullets round">{
								round.map((match, x) => (//loop over each match printing out the contestants.
									<li key={x}>
										<button className={match.get("result") === 1 || match.get("result") === 3 ? "player1 btn btn-warning" : 'player1 btn' }

											//Mark player as won.
											onMouseDown={ () => playerWin(x, 1, match.get("player1"), match.get("nextround"), match.get("matchId"), match.get("player2"))  }
											//Push player name to next round.
											onClick={ () => playerPush(x, 1, match.get("player1"), match.get("nextround"), match.get("matchId"), match.get("player2")) } >

											{match.get("player1")}
										</button>
										{/* Conditional rendering for second player. If "none" is the value, then the bracket is the winner */}
										<container className={match.get("player2") === "none" ? "no-display" : "" }>
											<p className="vs"> Vs </p>
											<button className={match.get("result") === 2 ? "player2 btn btn-warning" : 'player2 btn' }

												onMouseDown={ () => playerWin(x, 2, match.get("player2"), match.get("nextround"), match.get("matchId"), match.get("player1")) }
												onClick={ () => playerPush(x, 2, match.get("player2"), match.get("nextround"), match.get("matchId"), match.get("player1")) } >

												{match.get("player2")}
											</button>
										</container>
									</li>
								))
							}	</ul>
							))
						}
					</div>
				</div>
			)
			: <p></p>}
	</div>
);
