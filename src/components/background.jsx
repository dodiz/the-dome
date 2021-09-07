import React from "react"

function getRandomNumber(min = 0, max = 1, decimal) {
	let random = Math.random() * (max - min)
	if (!decimal) {
		random = Math.round(random)
	}
	return min + random
}

class Background extends React.Component {
	state = {
		horizontalLines: 0,
		verticalLinesPositions: [],
		horizontalLinesPositions: [],
		circuitLines: []
	}

	horizontalLineSpace = 10
	verticalLineSpace = 100

	componentDidMount() {
		this.draw()
		window.addEventListener("resize", this.draw)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.draw)
	}
	draw = () => {
		const height = window.innerHeight
		const width = window.innerWidth

		const horizontalLines = Math.floor(height / this.horizontalLineSpace) + 1

		const verticalLinesPositions = this.getLinesPositions(
			width,
			this.verticalLineSpace
		)
		const horizontalLinesPositions = this.getLinesPositions(
			height,
			this.verticalLineSpace
		)

		const circuitLines = this.getCircuitLines()

		this.setState({
			horizontalLines,
			verticalLinesPositions,
			horizontalLinesPositions,
			circuitLines
		})
	}
	getLinesPositions = (width, space) => {
		const length = Math.floor(width / space)

		const itemsPositions = []

		for (let index = 0; index < length; index++) {
			const itemPosition = getRandomNumber(index * space, index * space + space)
			itemsPositions.push(itemPosition)
		}
		return itemsPositions
	}
	getCircuitLines() {
		const width = window.innerWidth
		const height = window.innerHeight

		const widthOriginal = 1000
		const heightOriginal = 600

		const widthScale = width / widthOriginal
		const heightScale = height / heightOriginal

		// Lines go from left to right when they start in the left half.
		// And go from right to left when they start in the right half.

		let linesOriginal = [
			[
				[31, 80],
				[45, 98],
				[478, 98]
			],
			[
				[-10, 136],
				[567, 136],
				[597, 96],
				[867, 96]
			],
			[
				[923, 21],
				[507, 21],
				[496, 33],
				[98, 33],
				[65, -10]
			],
			[
				[38, 267],
				[157, 267]
			],
			[
				[1010, 225],
				[566, 225],
				[503, 307],
				[295, 307]
			],
			[
				[88, 340],
				[362, 340],
				[372, 354],
				[854, 354]
			],
			[
				[1010, 368],
				[908, 368]
			],
			[
				[219, 491],
				[236, 512],
				[484, 512]
			],
			[
				[981, 447],
				[725, 448],
				[688, 495]
			],
			[
				[855, 536],
				[618, 535],
				[579, 485],
				[-10, 485]
			],
			[
				[71, 448],
				[104, 405],
				[292, 405]
			],
			[
				[34, 610],
				[63, 560],
				[147, 560],
				[173, 520]
			],
			[
				[1010, 176],
				[658, 176]
			]
		]

		const lines = linesOriginal.map(line => {
			return line.map(([x, y]) => [x * widthScale, y * heightScale])
		})

		return lines
	}

	render() {
		const {
			horizontalLines,
			verticalLinesPositions,
			horizontalLinesPositions,
			circuitLines
		} = this.state

		const height = window.innerHeight
		const width = window.innerWidth

		return (
			<div className="background">
				<div className="background__container background__linear-container">
					{Array(horizontalLines)
						.fill()
						.map((_, index) => (
							<div
								key={index}
								style={{ top: `${index * this.horizontalLineSpace}px` }}
								className="background__linear-line"
							/>
						))}
				</div>
				<svg
					className="background__container background__dotted-container"
					xmlns="http://www.w3.org/2000/svg">
					{verticalLinesPositions.map((value, index) => (
						<line
							className="background__dotted-line"
							key={index}
							x1={`${value}px`}
							x2={`${value}px`}
							y1="0px"
							y2={`${height}px`}
						/>
					))}
					{horizontalLinesPositions.map((value, index) => (
						<line
							className="background__dotted-line"
							key={index}
							x1="0px"
							x2={`${width}px`}
							y1={`${value}px`}
							y2={`${value}px`}
						/>
					))}
				</svg>
				<svg
					className="background__container background__circuit-container"
					xmlns="http://www.w3.org/2000/svg">
					{circuitLines.map((line, index) => (
						<g className="classes.circuit" key={index} data-index={index}>
							<path
								className="background__circuit-line"
								d={line
									.map(
										([x, y], pIndex) => `${pIndex === 0 ? "M" : "L"}${x},${y}`
									)
									.join(" ")}
							/>
							<path
								className={"background__circuit-line-light"}
								d={line
									.map(
										([x, y], pIndex) => `${pIndex === 0 ? "M" : "L"}${x},${y}`
									)
									.join(" ")}
							/>
							<circle
								className={"background__circuit-dot"}
								cx={`${line[0][0]}px`}
								cy={`${line[0][1]}px`}
								r="3px"
							/>
							<circle
								className={"background__circuit-dot"}
								cx={`${line[line.length - 1][0]}px`}
								cy={`${line[line.length - 1][1]}px`}
								r="3px"
							/>
						</g>
					))}
				</svg>
				<div className="background__container background__radial" />
			</div>
		)
	}
}

export default Background
