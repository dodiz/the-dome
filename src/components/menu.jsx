import React from "react"
import anime from "animejs"
import { withRouter } from "react-router"

import Icon from "./common/icon"

import MenuIcon from "../media/icons/menu.svg"
import ShopIcon from "../media/icons/cart.svg"
import SettingsIcon from "../media/icons/settings.svg"
import QuestIcon from "../media/icons/calendar.svg"
import GuideIcon from "../media/icons/book.svg"
import GroupsIcon from "../media/icons/suitcase.svg"
import LogoutIcon from "../media/icons/power.svg"
import AddPgIcon from "../media/icons/user-add.svg"

import { logout } from "../services/authService"

import "../css/menu.css"

const menu = [
	{
		label: "Negozio",
		icon: ShopIcon
	},
	{
		label: "Settings",
		path: "impostazione",
		icon: SettingsIcon
	},
	{
		label: "Agenda",
		icon: QuestIcon
	},
	{
		label: "Manuale",
		icon: GuideIcon
	},
	{
		label: "Corporazioni",
		icon: GroupsIcon
	},
	{
		label: "Crea un pg",
		path: "crea-pg",
		icon: AddPgIcon
	},
	{
		label: "Gestione",
		path: "manage",
		icon: AddPgIcon
	}
]

const MenuOption = ({ label, src, ...rest }) => (
	<div className="menu__icon menu__icon--animate" {...rest}>
		<div className="menu__icon-text">{label}</div>
		<Icon padding secondary src={src} />
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
		const space = 5
		const targets = ".menu__icon--animate"
		const easing = "easeOutCubic"
		anime({
			targets,
			easing,
			opacity: open ? 0 : 1,
			bottom: {
				value: open ? 0 : (_, i) => `${space * (i + 1)}rem`,
				duration,
				delay: (_, i, t) => delay * (open ? i : t - i)
			}
		})

		this.setState({ open: !open })
	}

	onMenuSelected = path => {
		this.toggleMenu()
		this.props.history.push(path)
	}

	render() {
		return (
			<div className="menu">
				{this.state.open && (
					<div className="overlay" onClick={this.toggleMenu} />
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
				{menu.map(item => (
					<MenuOption
						key={item.label}
						onClick={() =>
							this.onMenuSelected(
								`/land/${item.path ? item.path : item.label.toLowerCase()}`
							)
						}
						label={item.label}
						src={item.icon}
					/>
				))}
				<MenuOption onClick={logout} label="Logout" src={LogoutIcon} />
			</div>
		)
	}
}

export default withRouter(Menu)
