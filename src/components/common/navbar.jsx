import React, { useEffect } from "react"
import anime from "animejs"

import Brand from "../brand"
import SplashMenu from "../splash/menu"

import withSound from "../../hoc/withSound"

const Navbar = props => {
	useEffect(() => {
		anime({
			targets: ".navbar",
			translateY: [-200, 0],
			duration: 1000
		})
		props.sounds.assemble.play()
	}, [])

	return (
		<nav className="navbar">
			<div className="navbar__logo" onClick={() => props.history.push("/")}>
				<Brand />
			</div>
			<SplashMenu />
		</nav>
	)
}

export default withSound(Navbar)
