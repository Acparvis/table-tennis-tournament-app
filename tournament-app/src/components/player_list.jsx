import React from "react";
import { List } from 'immutable';

export default ({ player, onClick, onChange }) => (
	<div>
		<ul>
			{ player.map(( player, i ) => (
				<li key={ i } >
					{ player.get("value") }
				</li>
			)) }

		</ul>
		<button onClick={ () => { console.log(player.toList()) } } >Start Tournament!!!</button>
	</div>
);
