import React from "react";
import "./style/style.css";

function Navbar() {
	return (
		<div className='topnav'>
			<a className='active' href='/'>
				Home
			</a>
			<a href='form'>Form</a>
		</div>
	);
}

export default Navbar;
