import React from "react"
import anime from "animejs"

import Icon from "../common/icon"

class Menu extends React.Component {
	state = {
		open: false
	}

	toggleMenu = () => {
		const duration = 400
		const space = 65
		const targets = ".menu__icon--animate"
		const easing = "easeOutCubic"

		!this.state.open
			? anime({
					targets,
					easing,
					top: {
						value: (_, i, __) => `${space * (1 + i)}px`,
						duration
					}
			  })
			: anime({
					targets,
					easing,
					top: {
						value: 0,
						duration
					}
			  })
		this.setState({ open: !this.state.open })
	}
	render() {
		return (
			<div className="menu">
				<Icon
					className="menu__icon menu__icon--first"
					secondary
					src="/images/icons/power.svg"
					style={{
						padding: ".5rem",
						zIndex: "9999"
					}}
					onClick={this.toggleMenu}
				/>
				<Icon
					className="menu__icon menu__icon--animate"
					secondary
					src="/images/icons/cart.svg"
					style={{ padding: ".5rem" }}
				/>
				<Icon
					className="menu__icon menu__icon--animate"
					secondary
					src="/images/icons/settings.svg"
					style={{ padding: ".5rem" }}
				/>
				<Icon
					className="menu__icon menu__icon--animate"
					secondary
					src="/images/icons/user-add.svg"
					style={{ padding: ".5rem" }}
				/>
			</div>
		)
	}
}

export default Menu
