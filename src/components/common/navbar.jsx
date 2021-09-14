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

	const toggleOpen = () => {
		props.sounds.click.play()
		setOpen(prev => !prev)
	}

	return (
		<nav className={`nav ${open && "collapsible--expanded"}`}>
			<span className="nav__logo" onClick={() => props.history.push("/")}>
				<Brand />
			</span>
			<span className="nav__toggler collapsible__icon" onClick={toggleOpen} />
			<div className="nav__list collapsible__content" onClick={toggleOpen}>
				<SplashMenu />
			</div>
		</nav>
	)
}

export default withSound(Navbar)
