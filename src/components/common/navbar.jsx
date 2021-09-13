import React, { useEffect, useState } from "react"
import anime from "animejs"

import Brand from "../brand"
import SplashMenu from "../splash/menu"

import withSound from "../../hoc/withSound"

const Navbar = props => {
	const [open, setOpen] = useState(false)

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
			<span className="navbar__logo" onClick={() => props.history.push("/")}>
				<Brand />
			</span>
			<span
				className={`navbar__toggler ${open && "active"}`}
				onClick={() => setOpen(prev => !prev)}
			/>
			<div className={`navbar__collapse ${!open && "collapse"}`}>
				<SplashMenu />
			</div>
		</nav>
	)
}

export default withSound(Navbar)
