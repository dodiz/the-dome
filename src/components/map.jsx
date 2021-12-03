import React, { Component } from "react"
import { FrameCorners, FrameLines, Text } from "@arwes/core"

import withSound from "./../hoc/withSound"
import chatService from "../services/chatService"
import { locations as _locations } from "../config/locations"

import "../css/map.css"

const rect = 50
const smallRect = 20
const viewPort = {
	x: 1980,
	y: 1080
}
const offset = 100

const SvgMap = ({ x, y, onSelectLocation, current, locations }) => (
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
			<g
				className={`map__location ${current == location ? " selected" : ""}`}
				onClick={() => onSelectLocation(location)}>
				<path d={location.path} className="map__path" />
				<text
					className="map__text"
					dominant-baseline="middle"
					fontSize={30}
					x={location.x}
					y={location.y}
					text-anchor="middle">
					{location.label}
				</text>
			</g>
		))}
	</svg>
)

const BoxMap = ({ chats, onClose, location }) => (
	<div className="map-box">
		<FrameLines>
			<div className="map-box-grid grid">
				<div className="flex">
					<Text as="h3">{location.label}</Text>
					<div className="link" onClick={onClose}>
						Chiudi
					</div>
				</div>
				<img className="map-box__image" src={location.img} alt="" />
				<div className="map-box__description">{location.description}</div>
				<div className="map-box__chats-container">
					<div className="map-box__chats">
						{chats.length
							? chats.map(chat => (
									<div className=" link map-box__chat" key={chat._id}>
										{chat.label}
									</div>
							  ))
							: "Nessuna chat presente"}
					</div>
				</div>
			</div>
		</FrameLines>
	</div>
)

class Map extends Component {
	state = {
		x: offset,
		y: offset,
		chats: [],
		location: null,
		locations: _locations
	}

	componentDidMount() {
		setTimeout(() => this.setState({ x: offset, y: viewPort.y - offset }), 1000)
	}

	handleZoneSelection = async location => {
		this.props.sounds.assemble.play()
		const chats = await chatService.get(location._id)
		const { x, y } = location
		this.setState({ x, y, location, chats })
	}
	handleCloseBox = () => {
		this.props.sounds.click.play()
		this.setState({ x: offset, y: offset, location: null, chats: [] })
	}
	render() {
		const { x, y, chats, locations, location } = this.state
		return (
			<>
				{location ? (
					<BoxMap
						chats={chats}
						location={location}
						onClose={this.handleCloseBox}
					/>
				) : null}

				<FrameCorners
					palette="secondary"
					cornerWidth={2}
					cornerLength={40}
					showContentLines
					hideShapes>
					<div className="map">
						<div className="map__pattern" />
						<SvgMap
							x={x}
							y={y}
							location={location}
							locations={locations}
							onSelectLocation={this.handleZoneSelection}
						/>
					</div>
				</FrameCorners>
			</>
		)
	}
}

export default withSound(Map)
