import React, { Component } from "react"
import anime from "animejs"
import { FrameCorners } from "@arwes/core"

import "../css/map.css"

class Map extends Component {
	state = {
		hCells: 0,
		vCells: 0
	}

	mapRef = React.createRef()

	componentDidMount() {
		this.draw()
	}

	draw = () => {
		const width = this.mapRef.current.offsetWidth
		const height = this.mapRef.current.offsetHeight
		this.setState({
			hCells: Math.floor(height / 100) + 1,
			vCells: Math.floor(width / 150) + 1
		})
		const duration = 500
		const easing = "easeOutCubic"

		anime({
			targets: ".map__pattern",
			easing,
			opacity: {
				value: 1,
				duration
			},
			scale: {
				value: [0, 1],
				delay: duration,
				duration
			}
		})
		anime({
			targets: ".map",
			easing,
			opacity: {
				value: [0, 1],
				delay: 500
			}
		})
	}

	render() {
		//const { hCells, vCells } = this.state
		return (
			<FrameCorners
				origins={["left", "top", "right", "bottom"]}
				palette="secondary"
				cornerWidth={3}
				cornerLength={50}
				showContentLines
				hideShapes
				hover
				className="map-box">
				<div ref={this.mapRef} className="map">
					<div className="map__pattern" />
				</div>
			</FrameCorners>
		)
	}
}

export default Map
