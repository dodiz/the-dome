import React from "react"
import Modal from "react-bootstrap/Modal"

import MobileHeadUI from "./ui-mobile-head"
import HeaderUI from "./ui-header"
import PgUI from "./ui-pg"
import PgMenuUI from "./ui-pg-menu"
import MenuUI from "./ui-menu"
import NewsUI from "./ui-news"

import MessagesUI from "./ui-messages"
import SocialUI from "./ui-social"
import OnlineUI from "./ui-online"
import ForumUI from "./ui-forum"

import "../css/ui.css"

class UI extends React.Component {
	state = {
		expandMobile: false,
		showPgMenu: false,
		health: 0,
		stamina: 0,
		selectedMenu: 1,
		showOnline: false
	}

	toggleExpand = () => {
		this.setState(prev => ({ expandMobile: !prev.expandMobile }))
	}
	togglePgMenu = () => {
		this.setState(prev => ({ showPgMenu: !prev.showPgMenu }))
	}
	toggleOnline = () => {
		this.setState(prev => ({ showOnline: !prev.showOnline }))
	}

	selectMenu = i => {
		this.setState({ selectedMenu: i })
	}

	render() {
		const { expandMobile, showPgMenu, selectedMenu, showOnline } = this.state
		return (
			<>
				{showOnline && (
					<Modal centered show onHide={this.toggleOnline}>
						<OnlineUI />
					</Modal>
				)}
				<div className={`ui ${expandMobile ? "collapsible--expanded" : ""}`}>
					{showPgMenu && (
						<PgMenuUI show={showPgMenu} onClose={this.toggleShowPgMenu} />
					)}
					<MobileHeadUI
						isExpanded={expandMobile}
						onExpand={this.toggleExpand}
					/>
					<div className="ui__content collapsible__content">
						<HeaderUI />
						<PgUI health={10} stamina={50} onClick={this.togglePgMenu} />
						<MenuUI selectedMenu={selectedMenu} onSelect={this.selectMenu} />
						{selectedMenu === 1 && <OnlineUI onOpen={this.toggleOnline} />}
						{selectedMenu === 2 && <SocialUI />}
						{selectedMenu === 3 && <ForumUI />}
						{selectedMenu === 4 && <MessagesUI />}
						<NewsUI />
					</div>
				</div>
			</>
		)
	}
}

export default UI
