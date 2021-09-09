import React, { Component } from "react"
import { Text, Button, FrameBox } from "@arwes/core"

class Assemble extends Component {
	state = {
		activate: true
	}

	classes = {
		box: "assemble__popup"
	}

	activate = () => {
		const { onAssemble } = this.props
		this.setState({ activate: false })
		setTimeout(onAssemble, 1000)
	}

	render() {
		const { activate } = this.state

		return (
			<div className="assemble">
				<FrameBox animator={{ activate }}>
					<div className="assemble__popup">
						<Text className="assemble__text" animator={{ activate }} as="div">
							The dome project utilizza suoni
						</Text>
						<Button onClick={this.activate} animator={{ activate }}>
							<Text className="assemble__button">Inizia</Text>
						</Button>
					</div>
				</FrameBox>
			</div>
		)
	}
}

export default Assemble
