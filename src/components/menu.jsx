import React from "react"
import anime from "animejs"

import Icon from "./common/icon"

import "../css/menu.css"

const MenuOption = ({ title, src, ...rest }) => (
	<div className="menu__icon menu__icon--animate">
		<div className="menu__icon-text">{title}</div>
		<Icon padding secondary src={src} {...rest} />
	</div>
)

class Menu extends React.Component {
	state = {
		open: false
	}

	toggleMenu = () => {
		const { open } = this.state
		const duration = 400
		const delay = 50
		const space = 9
		const targets = ".menu__icon--animate"
		const easing = "easeOutCubic"
		anime({
			targets,
			easing,
			opacity: open ? 0 : 1,
			bottom: {
				value: open ? 0 : (_, i) => `${space * (i + 1)}vh`,
				duration,
				delay: (_, i, t) => delay * (open ? i : t - i)
			}
		})

		this.setState({ open: !open })
	}
	render() {
		return (
			<div className="menu">
				{this.state.open && (
					<div className="menu__overlay" onClick={this.toggleMenu} />
				)}
				<div className="menu__icon menu__icon--first">
					<Icon
						pulse
						round
						secondary={!this.state.open}
						src="/images/icons/menu.svg"
						onClick={this.toggleMenu}
						padding
					/>
				</div>

				<MenuOption title="Negozio" src="/images/icons/cart.svg" />
				<MenuOption title="Settings" src="/images/icons/settings.svg" />
				<MenuOption title="Agenda" src="/images/icons/calendar.svg" />
				<MenuOption title="Manuale" src="/images/icons/book.svg" />
				<MenuOption title="Banca" src="/images/icons/bank.svg" />
				<MenuOption title="Corporazioni" src="/images/icons/suitcase.svg" />
				<MenuOption title="Logout" src="/images/icons/power.svg" />
				<MenuOption title="Crea un pg" src="/images/icons/user-add.svg" />
			</div>
		)
	}
}

export default Menu
