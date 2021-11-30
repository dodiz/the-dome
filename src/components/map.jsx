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
		path: "M 53 665 L 94 632 L 142 606 L 182 594 L 225 588 L 251 588 L 293 591 L 329 599 L 377 618 L 416 643 L 451 672 L 480 711 L 505 759 L 515 788 L 524 837 L 526 848 L 506 853 L 494 863 L 486 879 L 482 890 L 462 903 L 449 908 L 444 917 L 429 922 L 417 929 L 410 936 L 403 946 L 398 952 L 379 941 L 367 941 L 356 945 L 341 945 L 329 941 L 322 933 L 316 933 L 311 939 L 308 944 L 298 941 L 288 939 L 277 929 L 267 935 L 258 932 L 248 932 L 240 930 L 233 932 L 223 932 L 224 939 L 219 936 L 216 935 L 207 935 L 196 934 L 181 934 L 173 932 L 162 932 L 150 934 L 146 938 L 142 938 L 135 931 L 129 923 L 122 908 L 119 905 L 107 902 L 98 902 L 89 900 L 82 898 L 72 887 L 70 877 L 67 871 L 63 862 L 51 840 L 52 782 L 55 768 L 71 760 L 80 751 L 80 736 L 80 726 L 81 718 L 81 706 L 81 698 L 78 690 L 75 684 L 69 675 L 64 671 L 53 665",
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
		path: "M 606 167 L 619 208 L 629 236 L 638 257 L 651 271 L 709 328 L 777 321 L 800 313 L 872 306 L 905 249 L 915 197 L 869 118 L 850 127 L 841 135 L 831 144 L 816 148 L 807 156 L 797 158 L 781 163 L 770 166 L 755 165 L 749 156 L 746 147 L 740 138 L 728 132 L 719 135 L 715 136 L 706 138 L 692 138 L 680 141 L 667 144 L 661 146 L 654 149 L 646 153 L 640 156 L 631 157 L 625 159 L 619 161 L 616 165 L 616 167",
		x: 775,
		y: 210
	},
	{
		_id: "bazar",
		label: "Bazar",
		chats: [],
		path: "M 379 525 L 389 532 L 394 531 L 403 531 L 411 533 L 419 537 L 425 539 L 427 541 L 429 541 L 439 540 L 442 538 L 447 537 L 451 539 L 454 541 L 458 548 L 461 550 L 466 551 L 475 555 L 484 557 L 492 558 L 493 559 L 497 567 L 495 572 L 488 574 L 485 575 L 480 577 L 477 579 L 482 581 L 479 585 L 469 584 L 464 584 L 466 591 L 470 594 L 464 600 L 462 602 L 460 610 L 465 613 L 470 615 L 472 620 L 477 624 L 475 634 L 474 639 L 473 647 L 465 649 L 459 647 L 456 638 L 454 637 L 442 642 L 439 645 L 435 647 L 430 646 L 423 643 L 417 640 L 408 637 L 402 635 L 396 632 L 388 628 L 379 624 L 374 622 L 367 619 L 360 615 L 350 612 L 348 611 L 347 604 L 348 597 L 350 587 L 357 579 L 363 576 L 365 567 L 367 560 L 368 555 L 371 551 L 374 546 L 376 539 L 376 532 L 379 524",
		x: 414,
		y: 588
	},
	{
		_id: "deserto",
		label: "Deserto",
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
