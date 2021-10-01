import React, { Component } from "react"
import Menu from "./land/menu"
import Map from "./land/map"
import UI from "./land/ui"

class Land extends Component {
	render() {
		return (
			<main className="land">
				<UI />
				<Map />
				<Menu />
			</main>
		)
	}
}

export default Land
