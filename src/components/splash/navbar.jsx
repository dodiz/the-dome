import React, { useEffect, useState } from "react"
import anime from "animejs"

import Brand from "../brand"
import SplashMenu from "../splash/menu"

import withSound from "../../hoc/withSound"

const Navbar = props => {
	const [open, setOpen] = useState(false)
	const { show, sounds } = props

	const animateNavbar = () => {
		anime({
			targets: ".nav",
			translateY: show ? [-200, 0] : [0, -200],
			duration: 1000
		})
		sounds.assemble.play()
	}

	const toggleOpen = () => {
		sounds.click.play()
		setOpen(prev => !prev)
	}

	useEffect(animateNavbar, [show, sounds])

	return (
		<nav className={`nav ${open && show && "collapsible--expanded"}`}>
			<span className="nav__logo">
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
