import React from "react";


export default ({ contestants, numberofrounds, numberofcontestants, firstroundmatches }) => (
	<div>
		<h1>Tournament Tree</h1>
		<p>Number of Rounds { numberofrounds }</p>
		<p>Number of players { numberofcontestants }</p>
		<p>Number of matches in First Round { firstroundmatches }</p>



		<p>Contestants:</p>

			{
				console.log("contestants: ", contestants)}{
				//reducer takes the contestants and splits them into arrays of two
				contestants = contestants.reduce(function(result, value, index, array) {
					if (index % 2 === 0)
						result.push(array.slice(index, index + 2));
					return result;
				}, [])

			}
			<ul>
{		console.log(contestants)
				//This loop iterates over each player in the list and creates a list item with the value.
				// contestants.map(( contestant, i ) => (
				// 	<li key={ i } >
				// 		{ contestant.get(["players"], contestant.get('value')) }
				// 	</li>
				// ))
			}
		</ul>

	</div>
);
