import React, { Component } from "react"
import anime from "animejs"
import { FrameCorners } from "@arwes/core"

import "../css/map.css"

const locations = [
	{
		_id: "gulf_of_whales",
		label: "Gulf of whales",
		x: 800,
		y: 150,
		centerX: 875,
		centerY: 140
	},
	{
		_id: "deadly_beach",
		label: "Deadly Beach",
		x: 350,
		y: 250,
		centerX: 410,
		centerY: 240
	}
]

const rect = 100
const smallRect = 20
const viewPort = {
	x: 1980,
	y: 1080
}

class Map extends Component {
	state = {
		x: viewPort.x / 2,
		y: viewPort.y / 2
	}

	mapRef = React.createRef()

	componentDidMount() {
		this.draw()
		this.mapRef.current.addEventListener("click", this.handleTracking)
	}

	componentWillUnmount() {
		this.mapRef.current.removeEventListener("click", this.handleTracking)
	}

	handleTracking = e => {
		var rect = e.target.getBoundingClientRect()
		var x = ((e.clientX - rect.left) * 1980) / rect.width
		var y = ((e.clientY - rect.top) * 1080) / rect.height
		this.setState({ x, y })
	}

	draw = () => {
		anime({
			targets: ".map__indicator-square, .map__indicator-line",
			stroke: [0, 7],
			duration: 1000,
			delay: 500
		})
		anime({
			targets: ".map__pattern",
			scale: {
				value: [0, 1],
				delay: 300,
				duration: 300
			}
		})
		anime({
			targets: ".map",
			opacity: {
				value: [0, 1],
				delay: 500
			}
		})
	}

	handleIndicator = (x, y) => {
		this.setState({ x, y })
	}

	render() {
		const { x, y } = this.state
		return (
			<FrameCorners
				origins={["left", "top", "right", "bottom"]}
				palette="secondary"
				cornerWidth={2}
				animator={{ animate: this.state.animate }}
				cornerLength={40}
				showContentLines
				hideShapes>
				<div ref={this.mapRef} className="map">
					<div className="map__pattern" />
					<svg
						preserveAspectRatio="none"
						className="map__indicator"
						viewBox={`0 0 ${viewPort.x} ${viewPort.y}`}>
						<linearGradient id="text-grad" x1="0%" x2="0%" y1="100%" y2="100%">
							<stop offset="0%" style={{ stopColor: "white" }} />
							<stop offset="100%" style={{ stopColor: "white" }} />
						</linearGradient>
						<path
							d={"M " + x + " 0 " + "V 1080"}
							className="map__indicator-line"
						/>
						<path d={"M 0 " + y + " H 1980"} className="map__indicator-line" />
						{locations.map(location => (
							<text
								x={location.x}
								onClick={() =>
									this.handleIndicator(location.centerX, location.centerY)
								}
								y={location.y}
								className="map__indicator-text"
								fill="url(#text-grad)">
								{location.label}
							</text>
						))}
						<rect
							x={x - rect / 2}
							y={y - rect / 2}
							width={rect}
							height={rect}
							className="map__indicator-square small"
						/>
						<rect
							style={{ strokeDasharray: rect / 2, strokeDashoffset: rect / 4 }}
							x={x - rect / 2}
							y={y - rect / 2}
							width={rect}
							height={rect}
							className="map__indicator-square"
						/>
						<circle
							cx={x}
							cy={y}
							r={smallRect}
							className="map__indicator-square"
						/>
					</svg>
				</div>
			</FrameCorners>
		)
	}
}

export default Map
