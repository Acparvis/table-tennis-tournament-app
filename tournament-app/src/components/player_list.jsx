import React from "react";
import Player from "./player_input";

export default ({ tasks, onClick, onChange }) => (
	<div>
		{ tasks.map(( player, i ) => ( 
			<Player>
			</Player>
		)) }	
	</div>
);