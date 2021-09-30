import React, { Component } from "react"
import { FrameHexagon, FrameLines } from "@arwes/core"
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
					gridTemplate: "1fr / 300px 1fr 70px",
					gridGap: "2rem"
				}}>
				<FrameHexagon>UI</FrameHexagon>
				<FrameLines>mappa</FrameLines>
				<Menu />
			</div>
		)
	}
}

export default Land
