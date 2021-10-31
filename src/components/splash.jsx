import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Brand from "./brand"
import Pegi from "./splash-pegi"
import Explore from "./splash-explore"
import Navbar from "./splash-navbar"
import Cards from "./splash-cards"
import Features from "./splash-features"
import SplashMenu from "./splash-menu"

import InfoPage from "./infoPage"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import PrivacyPage from "./privacyPage"
import Background from "./background"

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
				<Background />
				<Navbar
					show={this.state.showNavbar || this.props.location.pathname !== "/"}
				/>
				<Switch>
					<Route path="/info" component={InfoPage} />
					<Route path="/privacy" component={PrivacyPage} />
					<Route path="/login" component={LoginForm} />
					<Route path="/register" component={RegisterForm} />
					<Route exact path="/">
						<main className="splash" onClick={this.firstScroll}>
							<Brand />
							<SplashMenu />
							<Pegi />
							<Explore />
						</main>
						<Features />
						<Cards />
					</Route>
				</Switch>
			</div>
		)
	}
}

export default SplashPage
