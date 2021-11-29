import React, { Component } from "react"
import anime from "animejs"
import { FrameCorners, FrameBox, Text, List } from "@arwes/core"

import withSound from "./../hoc/withSound"

import { locations } from "../config/locations"

import "../css/map.css"

const rect = 50
const smallRect = 20
const viewPort = {
	x: 1980,
	y: 1080
}

const SvgMap = ({ x, y, onSelectLocation }) => (
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
			<stop offset="80%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
		</linearGradient>

		<g className="map__indicator-g">
			{/* VERTICAL LINE */}
			<path d={"M " + x + " 0 " + "V 1080"} className="map__indicator-line" />
			{/* HORIZONTAL LINE */}
			<path d={"M 0 " + y + " H 1980"} className="map__indicator-line" />
			{/* INDICATOR */}
			<circle
				cx={x}
				cy={y}
				r={rect}
				width={rect}
				height={rect}
				strokeDasharray={`${rect} ${rect * 4 - rect}`}
				strokeDashoffset={rect * 4}
				className="map__indicator-square "
			/>
			<circle
				cx={x}
				cy={y}
				r={smallRect}
				className="map__indicator-circle map__indicator-line"
			/>
		</g>
		{/* TEXT LOCATIONS */}
		{locations.map(location => (
			<text
				className="map__indicator-text"
				dominant-baseline="middle"
				fontSize={23}
				onClick={() => onSelectLocation(location)}
				x={location.x}
				y={location.y}
				text-anchor="middle">
				{location.label}
			</text>
		))}
	</svg>
)

const BoxMap = ({ location, chats }) => (
	<FrameBox
		style={{
			position: "absolute",
			top: "15px",
			right: "15px",
			width: "300px",
			height: "200px",
			zIndex: 2
		}}>
		<Text as="h3">{location}</Text>
		<ul>
			{chats.map(chat => (
				<li key={chat._id}>{chat.label}</li>
			))}
		</ul>
	</FrameBox>
)

class Map extends Component {
	state = {
		x: 100,
		y: 100,
		location: "",
		chats: []
	}

	componentDidMount() {
		this.draw()
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

	handleZoneSelection = location => {
		const { x, y, label, chats } = location
		this.props.sounds.assemble.play()
		this.setState({ x, y, chats, location: label })
	}
	render() {
		const { x, y, location, chats } = this.state
		return (
			<>
				{location && <BoxMap location={location} chats={chats} />}
				<FrameCorners
					palette="secondary"
					cornerWidth={2}
					cornerLength={40}
					showContentLines
					hideShapes>
					<div className="map">
						<div className="map__pattern" />
						<SvgMap x={x} y={y} onSelectLocation={this.handleZoneSelection} />
					</div>
				</FrameCorners>
			</>
		)
	}
}

export default withSound(Map)
