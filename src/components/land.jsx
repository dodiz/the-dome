import React, { Component } from "react"
import {
	FrameCorners,
	FrameHexagon,
	FrameLines,
	FramePentagon,
	Figure
} from "@arwes/core"
import anime from "animejs"
import Icon from "./common/icon"

class Land extends Component {
	componentDidMount() {
		const delay = 2000
		const duration = 400
		const space = 50
		anime({
			targets: ".menu__icon",
			easing: "easeOutCubic",
			opacity: {
				delay,
				duration,
				value: [0, 1]
			},
			top: {
				value: (_, i, t) => `${space * i}%`,
				delay: delay + duration * 2,
				duration
			}
		})
	}

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
				<FrameCorners className="menu" palette="secondary">
					<Icon
						className="menu__icon"
						secondary
						src="/images/pegi/violent.png"
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						className="menu__icon"
						secondary
						src="/images/pegi/drugs.png"
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						className="menu__icon"
						src="/images/pegi/discrimination.png"
						secondary
						style={{ width: "40px" }}
					/>
					<br />
					<br />
					<Icon
						className="menu__icon"
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
