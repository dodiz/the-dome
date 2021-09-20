import React, { Component } from "react"

import Brand from "./brand"
import FeatureComponent from "./splash/featureComponent"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"

class SplashPage extends Component {
	state = {
		activate: false
	}

	checkScroll = () => {
		if (window.pageYOffset > 0) {
			window.removeEventListener("scroll", this.checkScroll)
			this.setState({ activate: true })
		}
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
				<FeatureComponent activate={this.state.activate} />
			</div>
		)
	}
}

export default SplashPage
