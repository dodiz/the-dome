import React from "react"
import { FrameLines, FrameBox, Text } from "@arwes/core"

import MobileHeadUI from "./ui-mobile-head"
import DateUI from "./ui-date"
import WeatherUI from "./ui-weather"
import PgUI from "./ui-pg"
import PgMenuUI from "./ui-pg-menu"
import MenuUI from "./ui-menu"
import NewsUI from "./ui-news"

import MessagesUI from "./ui-messages"
import SocialUI from "./ui-social"
import OnlineUI from "./ui-online"
import ForumUI from "./ui-forum"

import dome from "../media/dome.png"
import "../css/ui.css"

class UI extends React.Component {
	state = {
		expandMobile: false,
		showPgMenu: false,
		health: 0,
		stamina: 0,
		selectedMenu: 1
	}

	toggleExpand = () => {
		this.setState(prev => ({ expandMobile: !prev.expandMobile }))
	}
	toggleShowPgMenu = () => {
		this.setState(prev => ({ showPgMenu: !prev.showPgMenu }))
	}

	selectMenu = i => {
		this.setState({ selectedMenu: i })
	}

	render() {
		const { expandMobile, showPgMenu, selectedMenu } = this.state
		return (
			<div className={`ui ${expandMobile ? "collapsible--expanded" : ""}`}>
				{showPgMenu && (
					<PgMenuUI show={showPgMenu} onClose={this.toggleShowPgMenu} />
				)}
				<MobileHeadUI isExpanded={expandMobile} onExpand={this.toggleExpand} />
				<div className="ui__content collapsible__content">
					<FrameLines
						largeLineWidth={2}
						smallLineWidth={4}
						smallLineLength={20}
						hideShapes
						className="ui__header">
						<div className="flex">
							<img
								alt="logo"
								className="ui__logo animate__animated animate__bounceIn animate__delay-1s"
								src={dome}
							/>
							<div className="flex__extend">
								<WeatherUI />
								<div className="line" />
								<DateUI />
							</div>
						</div>
					</FrameLines>
					<PgUI health={10} stamina={50} onClick={this.toggleShowPgMenu} />
					<MenuUI selectedMenu={selectedMenu} onSelect={this.selectMenu} />
					{selectedMenu === 1 && <OnlineUI />}
					{selectedMenu === 2 && <SocialUI />}
					{selectedMenu === 3 && <ForumUI />}
					{selectedMenu === 4 && <MessagesUI />}
					<NewsUI />
				</div>
			</div>
		)
	}
}

export default UI
