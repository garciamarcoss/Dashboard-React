import React from "react";
import logo from "../assets/images/favicon-96x96.png"

function Header() {
	return (
		<>
			<header className="header">
				<div className="img-logo-header">
					<a href="/home"><img id="logo-header" src={logo} alt="GameStore" /></a>
				</div>
			</header>
			<div id="relleno"></div>
		</>
	)

}

export default Header