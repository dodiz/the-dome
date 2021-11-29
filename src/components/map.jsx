import React, { Component } from "react"
import anime from "animejs"
import { FrameCorners } from "@arwes/core"

import "../css/map.css"

const locations = [
	{
		_id: "deadly_beach",
		label: "Deadly Beach",
		x: 440,
		y: 250
	},
	{
		_id: "gulf_of_whales",
		label: "Gulf of whales",
		x: 870,
		y: 100
	},
	{
		_id: "muddy_lake",
		label: "Muddy lake",
		x: 990,
		y: 300
	},
	{
		_id: "tide_sand",
		label: "Tide sand",
		x: 1200,
		y: 330
	},
	{
		_id: "barren_canyon",
		label: "Barren canyon",
		x: 700,
		y: 400
	},
	{
		_id: "dirty_waters",
		label: "Dirty waters",
		x: 1050,
		y: 410
	},
	{
		_id: "rocky_plain",
		label: "Rocky plain",
		x: 1500,
		y: 450
	},
	{
		_id: "fireflies_forest",
		label: "Fireflies forest",
		x: 850,
		y: 550
	},
	{
		_id: "the_hole",
		label: "The Hole",
		x: 1170,
		y: 580
	},
	{
		_id: "shady_valley",
		label: "Shady valley",
		x: 870,
		y: 700
	},
	{
		_id: "sharp_mountains",
		label: "Sharp Mountains",
		x: 1100,
		y: 970
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
		x: 100,
		y: 100
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
		this.handleIndicator(x, y)
	}

	draw = () => {
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
						<linearGradient
							spreadMethod="pad"
							id="text-grad"
							x1="0%"
							y1="100%"
							x2="0%"
							y2="0%">
							<stop offset="0%" style={{ stopColor: "#666", stopOpacity: 1 }} />
							<stop
								offset="80%"
								style={{ stopColor: "#fff", stopOpacity: 1 }}
							/>
						</linearGradient>

						<g className="map__indicator-group">
							{/* VERTICAL LINE */}
							<path
								d={"M " + x + " 0 " + "V 1080"}
								className="map__indicator-line"
							/>
							{/* HORIZONTAL LINE */}
							<path
								d={"M 0 " + y + " H 1980"}
								className="map__indicator-line"
							/>
							{/* INDICATOR */}
							<rect
								x={x - rect / 2}
								y={y - rect / 2}
								width={rect}
								height={rect}
								className="map__indicator-square small"
							/>
							<rect
								style={{
									strokeDasharray: rect / 2,
									strokeDashoffset: rect / 4
								}}
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
						</g>
						{/* TEXT LOCATIONS */}
						{locations.map(location => (
							<text
								className="map__indicator-text"
								dominant-baseline="middle"
								fontSize={23}
								onClick={() => this.handleIndicator(location.x, location.y)}
								x={location.x}
								y={location.y}
								text-anchor="middle">
								{location.label}
							</text>
						))}
					</svg>
				</div>
			</FrameCorners>
		)
	}
}

export default Map
