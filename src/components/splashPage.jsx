import React, { Component } from "react"

import Brand from "./brand"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"
import Navbar from "./splash/navbar"
import Cards from "./splash/cards"
import Features from "./splash/features"
import SplashMenu from "./splash/splashMenu"

import "../css/splash.css"

class SplashPage extends Component {
	state = {
		activateFeatures: false,
		showNavbar: false
	}

	animateNavbar = () => {
		const showNavbar = window.pageYOffset >= window.innerHeight - 200
		this.setState({ showNavbar })

		if (window.scrollY > 10 && !this.state.activate)
			this.setState({ activate: true })
	}

	componentDidMount() {
		window.addEventListener("scroll", this.animateNavbar)
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.animateNavbar)
	}

	render() {
		return (
			<div>
				<Navbar show={this.state.showNavbar} />
				<main className="splash" onClick={this.firstScroll}>
					<Brand />
					<SplashMenu />
					<Pegi />
					<Explore />
				</main>
				<Features />
				<Cards />
			</div>
		)
	}
}

export default SplashPage
