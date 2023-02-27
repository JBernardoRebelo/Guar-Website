/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { _NavBar } from "../Style";

import guar_logo from "../Images/guaricon.png";

function Navbar() {
	return (
		<_NavBar>
			{/* Logo and Title */}
			<div className="navbarTitle">
				<img
					src={guar_logo}
					className="navBarLogo"
					width={40}
					height={40}
					alt="guarlogo"
				/>
				<h1>Guar</h1>
			</div>
			<nav className="navbarElements">
				<a href="/#Home" className="navBarElement">
					Home
				</a>
				<a href="/#Intro" className="navBarElement">
					Intro
				</a>
				<a href="/#Story" className="navBarElement">
					Story
				</a>
				<a a href="/#Gameplay" className="navBarElement">
					Gameplay
				</a>
				<a href="/#Contacts" className="navBarElement">
					Contacts
				</a>
			</nav>
		</_NavBar>
	);
}

export default Navbar;
