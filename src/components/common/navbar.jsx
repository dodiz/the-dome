import React from "react"
import Brand from "../brand"
import SplashMenu from "../splash/menu"

const Navbar = props => {
	return (
		<nav class="navbar">
			<div class="navbar__logo" onClick={() => props.history.push("/")}>
				<Brand />
			</div>
			<SplashMenu />
		</nav>
	)
}

export default Navbar
