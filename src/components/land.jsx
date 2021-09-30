import React, { Component } from "react"
import {
	FrameCorners,
	FrameHexagon,
	FrameLines,
	FramePentagon,
	Figure
} from "@arwes/core"
import Icon from "./common/icon"

class Land extends Component {
	render() {
		return (
			<div
				style={{
					display: "grid",
					boxSizing: "border-box",
					padding: ".6rem",
					height: "100vh",
					gridTemplate: "1fr / 200px 1fr 80px",
					gridGap: "2rem"
				}}>
				<FrameHexagon>UI</FrameHexagon>
				<FrameLines>mappa</FrameLines>
				<FrameCorners palette="secondary" style={{ textAlign: "center" }}>
					<Icon
						secondary
						src="/images/pegi/violent.png"
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						secondary
						src="/images/pegi/drugs.png"
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						src="/images/pegi/discrimination.png"
						secondary
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						secondary
						src="/images/pegi/sex.png"
						style={{ width: "40px" }}
					/>
				</FrameCorners>
			</div>
		)
	}
}

export default Land
