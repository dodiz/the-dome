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
	},
	{
		_id: "freedome",
		label: "Freedome",
		chats: [],
		path: "M 770 195 L 804 194 L 827 228 L 822 256 L 803 289 L 759 301 L 729 268 L 737 219 L 770 195",
		x: 775,
		y: 240
	},
	{
		_id: "bazar",
		label: "Bazar",
		chats: [],
		path: "M 348 603 L 377 539 L 517 615 L 494 663 L 449 670 L 377 619 L 348 603",
		x: 414,
		y: 588
	},
	{
		_id: "deserto",
		label: "Il diocristo di deserto",
		chats: [],
		path: "M 900 529 L 901 531 L 888 575 L 912 606 L 955 591 L 988 586 L 1033 602 L 1043 624 L 1040 634 L 1040 646 L 1057 651 L 1081 638 L 1100 641 L 1128 675 L 1148 700 L 1176 713 L 1198 689 L 1208 681 L 1227 685 L 1245 709 L 1265 725 L 1307 741 L 1335 751 L 1374 759 L 1390 751 L 1400 741 L 1428 737 L 1458 727 L 1434 757 L 1432 771 L 1453 779 L 1491 779 L 1524 790 L 1543 805 L 1569 813 L 1599 813 L 1622 816 L 1678 831 L 1682 820 L 1690 816 L 1701 801 L 1712 771 L 1712 749 L 1708 730 L 1708 719 L 1712 700 L 1712 696 L 1712 685 L 1705 670 L 1697 651 L 1690 647 L 1675 617 L 1671 610 L 1671 599 L 1656 572 L 1652 565 L 1641 542 L 1629 535 L 1592 520 L 1569 501 L 1551 490 L 1539 463 L 1502 448 L 1453 430 L 1400 411 L 1359 407 L 1310 407 L 1280 400 L 1258 388 L 1231 354 L 1213 328 L 1190 294 L 1160 272 L 1141 261 L 1077 249 L 1059 231 L 1021 212 L 1002 197 L 980 159 L 976 155 L 942 163 L 916 197 L 905 249 L 871 306 L 800 313 L 777 321 L 709 328 L 638 257 L 619 208 L 608 178 L 578 174 L 529 178 L 473 174 L 454 152 L 417 152 L 379 152 L 368 159 L 341 185 L 311 189 L 300 201 L 289 227 L 300 287 L 319 328 L 308 381 L 319 411 L 360 433 L 428 490 L 480 512 L 582 538 L 687 569 L 770 587 L 901 531",
		x: 900,
		y: 500
	}
]

const SvgMap = ({ x, y, onSelectLocation, location }) => (
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
		{locations.map(_location => (
			<g
				className={`map__location ${location == _location ? " selected" : ""}`}
				onClick={() => onSelectLocation(_location)}>
				<path d={_location.path} className="map__path" />
				<text
					className="map__text"
					dominant-baseline="middle"
					fontSize={30}
					x={_location.x}
					y={_location.y}
					text-anchor="middle">
					{_location.label}
				</text>
			</g>
		))}
	</svg>
)

const BoxMap = ({ location }) => (
	<div className="map__box">
		<FrameBox>
			<Text as="h4">{location.label}</Text>
			<ul>
				{location.chats.map(chat => (
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
		location: null,
		chats: []
	}

	componentDidMount() {
		setTimeout(() => this.setState({ x: offset, y: viewPort.y - offset }), 1000)
	}

	handleZoneSelection = location => {
		const { x, y } = location
		this.props.sounds.assemble.play()
		this.setState({ x, y, location })
	}
	render() {
		const { x, y, location } = this.state
		return (
			<>
				{location && <BoxMap location={location} />}
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
							onSelectLocation={this.handleZoneSelection}
						/>
					</div>
				</FrameCorners>
			</>
		)
	}
}

export default withSound(Map)
