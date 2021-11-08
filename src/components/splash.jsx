import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Brand from "./brand"
import Pegi from "./splash-pegi"
import Explore from "./splash-explore"
import Navbar from "./splash-navbar"
import Cards from "./splash-cards"
import Features from "./splash-features"
import SplashMenu from "./splash-menu"
import Verify from "./verify"

import InfoPage from "./splash-info"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import AccessGranted from "./splash-access-granted"
import PrivacyPage from "./splash-privacy"
import Background from "./background"

import { IsUserRedirect, ProtectedRoute } from "../tools/redirect"

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
		const isRootPath = this.props.location.pathname === "/"
		const stickyPaths =
			this.props.location.pathname === "/login" ||
			this.props.location.pathname === "/register" ||
			this.props.location.pathname === "/verify" ||
			this.props.location.pathname === "/accesso"

		return (
			<div>
				<Background />
				<Navbar
					stick={!isRootPath && !stickyPaths}
					show={this.state.showNavbar || !isRootPath}
				/>
				<Switch>
					<Route path="/info" component={InfoPage} />
					<Route path="/privacy" component={PrivacyPage} />
					<IsUserRedirect path="/login" component={LoginForm} />
					<ProtectedRoute path="/accesso" component={AccessGranted} />
					<Route path="/register" component={RegisterForm} />
					<Route path="/verify" component={Verify} />
					<Route exact path="/">
						<main className="splash">
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
