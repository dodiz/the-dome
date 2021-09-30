import React, { Component } from "react"
import { FrameHexagon, Figure, FrameLines } from "@arwes/core"
import Menu from "./land/menu"

class Land extends Component {
	render() {
		return (
			<div
				style={{
					display: "grid",
					boxSizing: "border-box",
					padding: ".6rem",
					height: "100vh",
					gridTemplate: "1fr / 300px 1fr",
					gridGap: "2rem"
				}}>
				<FrameHexagon>UI</FrameHexagon>
				<FrameLines lineWidth={1} squareSize={40} hideShapes hover>
					<Menu />
				</FrameLines>
			</div>
		)
	}
}

export default Land
