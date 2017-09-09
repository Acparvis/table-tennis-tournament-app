import React from "react";


export default ({ player, onClick, onChange }) => (
	<div>
		
		<ul>
			{ player.map(( player, i ) => ( 
				<li key={ i } >
					{ player.get("value") }
				</li>
			)) }	
		
		</ul>
		
	</div>
);