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
		horizontalLinesPositions: []
	}

	horizontalLineSpace = 15
	verticalLineSpace = 150

	componentDidMount() {
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

		this.setState({
			horizontalLines,
			verticalLinesPositions,
			horizontalLinesPositions
		})
	}
	getLinesPositions(width, space) {
		const length = Math.floor(width / space)

		const itemsPositions = []

		for (let index = 0; index < length; index++) {
			const itemPosition = getRandomNumber(index * space, index * space + space)
			itemsPositions.push(itemPosition)
		}
		return itemsPositions
	}

	render() {
		const {
			horizontalLines,
			verticalLinesPositions,
			horizontalLinesPositions
		} = this.state

		const height = window.innerHeight
		const width = window.innerWidth

		return (
			<div className="background">
				<div className="background__linear-container">
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
					className="background__dotted-container"
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

				<div className="background__radial" />
			</div>
		)
	}
}

export default Background
