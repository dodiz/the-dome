import React, { Component } from "react"
import { FrameBox, Text } from "@arwes/core"

import ListGroup from "./common/listGroup"
import Navbar from "./splash-navbar"

import items from "../config/info"

class InfoPage extends Component {
	state = {
		selectedInfo: items[0]
	}

	handleInfoSelect = selectedInfo => {
		this.setState({ selectedInfo })
	}

	render() {
		return (
			<div>
				<Navbar stick show={true} />
				<section className="grid info">
					<ListGroup
						items={items}
						onItemSelect={this.handleInfoSelect}
						selectedItem={this.state.selectedInfo}
					/>
					<FrameBox
						className="arwes-custom-background"
						hideShapes
						linesWidths={[2, 0, 2, 0]}
						palette="secondary">
						<Text as="h2" className="h2" style={{ display: "block" }}>
							{this.state.selectedInfo.name}
						</Text>
						<Text as="p">{this.state.selectedInfo.content}</Text>
					</FrameBox>
				</section>
			</div>
		)
	}
}

export default InfoPage
