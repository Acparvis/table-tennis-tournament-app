import React from "react";

export default({
	contestants,
	numberofrounds,
	numberofcontestants,
	firstroundmatches,
	rounds,
	biPlayer,
	playerWin
}) => (
	<div>
		{/* conditional rendering of tournament based on the number of players in the contstants List.  */}
		{numberofcontestants > 0
			? (
				<div>
					<div className="contain">
						<h1>Tournament</h1>
					</div>
					<ul className="no-bullets">
						{// This loop iterates over each player in the list and creates a list item with the value.



						rounds.map((round, i) => (
							<li key={i}>
								<button className={round.get("result") == 1 ? "player1 btn btn-warning" : 'player1 btn' } onClick={ () => playerWin(i, 1) }>{round.get("player1")}</button>
								<p className="vs">
									Vs
								</p>
								<button className={round.get("result") == 2 ? "player2 btn btn-warning" : 'player2 btn' } onClick={ () => playerWin(i, 2) }>{round.get("player2")}</button>
							</li>
						))
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

				</div>
			)
			: <p></p>}
	</div>
);
