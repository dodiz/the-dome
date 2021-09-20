import React, { Component } from "react"

import Brand from "./brand"
import FeatureComponent from "./splash/features"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"
import Navbar from "./common/navbar"

class SplashPage extends Component {
	state = {
		activate: false,
		showNavbar: false
	}

	startAnimations = () => {
		const showNavbar = window.pageYOffset >= window.innerHeight - 50
		this.setState({ showNavbar })

		if (window.scrollY > 10 && !this.state.activate)
			this.setState({ activate: true })
	}

	componentDidMount() {
		window.addEventListener("scroll", this.startAnimations)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.startAnimations)
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
				<a name="explore" />
				<FeatureComponent activate={this.state.activate} />
			</div>
		)
	}
}

export default SplashPage
