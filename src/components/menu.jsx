import React from "react"
import anime from "animejs"

import Icon from "./common/icon"

import MenuIcon from "../media/icons/menu.svg"
import ShopIcon from "../media/icons/cart.svg"
import SettingsIcon from "../media/icons/settings.svg"
import QuestIcon from "../media/icons/calendar.svg"
import GuideIcon from "../media/icons/book.svg"
import GroupsIcon from "../media/icons/suitcase.svg"
import LogoutIcon from "../media/icons/power.svg"
import AddPgIcon from "../media/icons/user-add.svg"

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
						src={MenuIcon}
						onClick={this.toggleMenu}
						padding
					/>
				</div>

				<MenuOption title="Negozio" src={ShopIcon} />
				<MenuOption title="Settings" src={SettingsIcon} />
				<MenuOption title="Agenda" src={QuestIcon} />
				<MenuOption title="Manuale" src={GuideIcon} />
				<MenuOption title="Corporazioni" src={GroupsIcon} />
				<MenuOption title="Logout" src={LogoutIcon} />
				<MenuOption title="Crea un pg" src={AddPgIcon} />
			</div>
		)
	}
}

export default Menu
