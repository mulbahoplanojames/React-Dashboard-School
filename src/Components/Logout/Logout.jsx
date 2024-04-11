import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
	return (
		<div>
			Logout
			<h1>I am logout</h1>
			<Link to='/'>Back to Home</Link>
		</div>
	);
};

export default Logout;
