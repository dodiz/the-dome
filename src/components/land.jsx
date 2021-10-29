import React, { Component } from "react"
import Menu from "./menu"
import Map from "./map"
import UI from "./ui"

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
