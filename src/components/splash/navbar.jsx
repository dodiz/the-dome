import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import anime from "animejs"

import Brand from "../brand"
import SplashMenu from "../splash/splashMenu"

import withSound from "../../hoc/withSound"

const Navbar = props => {
	const [open, setOpen] = useState(false)
	const history = useHistory()
	const { show, sounds, stick } = props

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
		<nav
			className={`nav ${open && show && "collapsible--expanded"} ${
				stick && "nav--static"
			}`}>
			<span className="nav__logo" onClick={() => history.push("/")}>
				<Brand />
			</span>
			<span className="collapsible__icon" onClick={toggleOpen} />
			<div className="nav__list collapsible__content" onClick={toggleOpen}>
				<SplashMenu />
			</div>
		</nav>
	)
}

export default withSound(Navbar)
