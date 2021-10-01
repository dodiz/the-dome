import React, { Component } from "react"
import { Card, FrameCorners } from "@arwes/core"
import Menu from "./land/menu"
import Map from "./land/map"
import Brand from "./brand"

class Land extends Component {
	render() {
		return (
			<main className="land">
				<FrameCorners className="ui" animator={{ duration: 1000, delay: 1000 }}>
					<Brand hideSub />
					<Card image={"https://i.ibb.co/gP4crDc/nomi-mappa.jpg"} />
				</FrameCorners>
				<FrameCorners
					origins={["left", "top", "right", "bottom"]}
					palette="secondary"
					cornerWidth={3}
					cornerLength={50}
					showContentLines
					hideShapes
					hover
					className="map-frame">
					<Map />
				</FrameCorners>
				<Menu />
			</main>
		)
	}
}

export default Land
