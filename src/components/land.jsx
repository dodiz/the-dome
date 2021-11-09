import React, { Component } from "react"
import { Route, Switch } from "react-router"
import PgProvider from "./../context/pgContext"

import Menu from "./menu"
import Map from "./map"
import UI from "./ui"
import CreatePg from "./create-pg"

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
