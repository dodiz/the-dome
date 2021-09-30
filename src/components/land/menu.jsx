import React from "react"
import anime from "animejs"
import { FrameCorners } from "@arwes/core"

import Icon from "../common/icon"

class Menu extends React.Component {
	componentDidMount() {
		const delay = 2000
		const duration = 400
		const space = 65
		anime({
			targets: ".menu__icon",
			easing: "easeOutCubic",
			opacity: {
				delay: (_, i, __) => (i * duration) / 2,
				duration,
				value: [0, 1]
			},
			top: {
				value: (_, i, __) => `${space * i}px`,
				delay: (_, __, t) => duration * t,
				duration
			}
		})
	}
	render() {
		return (
			<FrameCorners className="menu" palette="secondary">
				<Icon
					className="menu__icon"
					secondary
					src="/images/icons/power.svg"
					style={{
						padding: ".5rem"
					}}
				/>
				<Icon
					className="menu__icon"
					secondary
					src="/images/icons/cart.svg"
					style={{ padding: ".5rem" }}
				/>
				<Icon
					className="menu__icon"
					secondary
					src="/images/icons/settings.svg"
					style={{ padding: ".5rem" }}
				/>
				<Icon
					className="menu__icon"
					secondary
					src="/images/icons/user-add.svg"
					style={{ padding: ".5rem" }}
				/>
			</FrameCorners>
		)
	}
}

export default Menu
