import React, { Component } from "react"
import { Route, Switch } from "react-router"
import PgProvider from "./../context/pgContext"

import Menu from "./menu"
import UI from "./ui"

import Map from "./map"
import CreatePg from "./create-pg"
import Manage from "./manage"

import "../css/land.css"

class Land extends Component {
	render() {
		return (
			<PgProvider>
				<main className="land">
					<UI />
					<div className="land__content">
						<Switch>
							<Route path="/land/crea-pg" component={CreatePg} />
							<Route path="/land/manage" component={Manage} />
							<Route exact path="/land" component={Map} />
						</Switch>
					</div>
					<Menu />
				</main>
			</PgProvider>
		)
	}
}

export default Land
