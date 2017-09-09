import React from "react";

export default ({ textChange, value}) => (
	<div>
        <input onChange={ (e) => textChange(e.target.value) } />
		<p>{value}</p>
		<button type="submit">Enter</button>
    </div>
);


