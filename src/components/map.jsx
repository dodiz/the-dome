import React, { Component } from "react"
import anime from "animejs"
import { FrameCorners, FrameBox, Text, List } from "@arwes/core"

import withSound from "./../hoc/withSound"

//import { locations } from "../config/locations"

import "../css/map.css"

const rect = 50
const smallRect = 20
const viewPort = {
	x: 1980,
	y: 1080
}
const offset = 100

const locations = [
	{
		_id: "mera",
		label: "mera",
		chats: [],
		path: "M 37 681 L 112 622 L 223 587 L 295 591 L 374 617 L 457 679 L 501 746 L 521 842 L 421 946 L 36 916 L 8 769 L 37 681 M 0 1140",
		x: 250,
		y: 810
	},
	{
		_id: "honiara",
		label: "Honiara",
		chats: [],
		path: "M 0 228 L 49 175 L 75 166 L 197 207 L 192 252 L 182 293 L 170 318 L 137 340 L 120 376 L 113 433 L 51 443 L 1 444",
		x: 100,
		y: 267
	}
]

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
				strokeDasharray={(Math.PI * rect) / 4}
				strokeDashoffset={Math.PI * rect * 2}
				className="map__indicator-square"
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
			<g className="map__location" onClick={() => onSelectLocation(location)}>
				<path d={location.path} className="map__path" />
				<text
					className="map__text"
					dominant-baseline="middle"
					fontSize={23}
					x={location.x}
					y={location.y}
					text-anchor="middle">
					{location.label}
				</text>
			</g>
		))}
	</svg>
)

const BoxMap = ({ location, chats }) => (
	<div className="map__box">
		<FrameBox>
			<Text as="h3">{location}</Text>
			<ul>
				{chats.map(chat => (
					<li key={chat._id}>{chat.label}</li>
				))}
			</ul>
		</FrameBox>
	</div>
)

class Map extends Component {
	state = {
		x: offset,
		y: offset,
		location: "",
		chats: []
	}

	componentDidMount() {
		setTimeout(() => this.setState({ x: offset, y: viewPort.y - offset }), 1000)
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
