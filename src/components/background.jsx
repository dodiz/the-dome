import React from "react"

class Background extends React.Component {
	state = {
		horizontalLines: 0
	}

	horizontalLineSpace = 15

	componentDidMount() {
		const horizontalLines =
			Math.floor(window.innerHeight / this.horizontalLineSpace) + 1
		this.setState({
			horizontalLines
		})
	}

	render() {
		const { horizontalLines } = this.state

		return (
			<div className="background">
				<div className="background__radial">
					<div className="background__horizontals">
						{Array(horizontalLines)
							.fill()
							.map((_, index) => (
								<div
									key={index}
									style={{ top: `${index * this.horizontalLineSpace}px` }}
									className="background__horizontal-line"
								/>
							))}
					</div>
				</div>
			</div>
		)
	}
}

export default Background
