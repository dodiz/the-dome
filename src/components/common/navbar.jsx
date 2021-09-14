import React, { useEffect, useState } from "react"
import anime from "animejs"

import Brand from "../brand"
import SplashMenu from "../splash/menu"

import withSound from "../../hoc/withSound"

const Navbar = props => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		anime({
			targets: ".nav",
			translateY: [-200, 0],
			duration: 1000
		})
		props.sounds.assemble.play()
	}, [])

	return (
		<nav className={`nav ${!open && "collapse"}`}>
			<span className="nav__logo" onClick={() => props.history.push("/")}>
				<Brand />
			</span>
			<span
				className={`nav__toggler ${open && "active"}`}
				onClick={() => setOpen(prev => !prev)}
			/>
			<div className="nav__list collapse">
				<SplashMenu />
			</div>
		</nav>
	)
}

export default withSound(Navbar)
