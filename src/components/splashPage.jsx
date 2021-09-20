import React, { Component } from "react"

import Brand from "./brand"
import FeatureComponent from "./splash/featureComponent"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"

class SplashPage extends Component {
	state = {
		show: false
	}

	checkScroll() {
		if (window.scrollY > 200) {
			window.removeEventListener("scroll", this.checkScroll)
		}
		console.log(window.scrollY)
	}

	componentDidMount() {
		window.addEventListener("scroll", this.checkScroll)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.checkScroll)
	}

	render() {
		return (
			<div>
				<main className="splash">
					<Brand />
					<Menu />
					<Pegi />
					<Explore />
				</main>
				<a name="explore" />
				<FeatureComponent />
			</div>
		)
	}
}

export default SplashPage
