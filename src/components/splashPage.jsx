import React, { Component } from "react"

import Brand from "./brand"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"
import Navbar from "./splash/navbar"
import Cards from "./splash/cards"
import Features from "./splash/features"

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
					<Menu />
					<Pegi />
					<Explore />
				</main>
				<div id="explore" />
				<Features />
				<section className="">
					<Cards />
				</section>
			</div>
		)
	}
}

export default SplashPage
