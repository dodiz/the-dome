import React, { Component } from "react"
import { Text, Button, FrameCorners } from "@arwes/core"

class Assemble extends Component {
	state = {
		activate: true
	}

	activate = () => {
		const { onAssemble } = this.props
		this.setState({ activate: false })
		setTimeout(onAssemble, 300)
	}

	render() {
		const { activate } = this.state

		return (
			<div className="fullview">
				<FrameCorners animator={{ activate }}>
					<div className="assemble__popup">
						<Text className="assemble__text" animator={{ activate }} as="div">
							The Dome Project utilizza suoni
						</Text>
						<Button onClick={this.activate} animator={{ activate }}>
							<Text className="assemble__button">Accedi</Text>
						</Button>
					</div>
				</FrameCorners>
			</div>
		)
	}
}

export default Assemble
