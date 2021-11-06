import React from "react"
import Modal from "./common/modal"
import { FrameBox } from "@arwes/core"
import PgPopup from "./common/pg-popup"

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
		health: 0,
		stamina: 0,
		selectedMenu: 1,
		expandMobile: false,
		expandPgMenu: false,
		expandOnline: false,
		expandNews: false,
		selectedPg: null
	}
	toggleExpand = item => {
		this.setState(prev => ({ expandMobile: false, [item]: !prev[item] }))
	}
	handlePgClick = selectedPg => {
		this.setState({ expandOnline: false, selectedPg })
	}
	selectMenu = i => {
		this.setState({ selectedMenu: i })
	}

	render() {
		const {
			selectedMenu,
			expandMobile,
			expandPgMenu,
			expandOnline,
			expandNews,
			selectedPg
		} = this.state
		return (
			<>
				{selectedPg && (
					<PgPopup data={selectedPg} onClose={() => this.handlePgClick(null)} />
				)}
				{expandOnline && (
					<Modal
						centered
						show
						onHide={() => this.toggleExpand("expandOnline")}
						title="Utenti online">
						<OnlineUI onSelectUser={this.handlePgClick} />
					</Modal>
				)}
				{expandNews && (
					<Modal
						centered
						show
						onHide={() => this.toggleExpand("expandNews")}
						palette="secondary"
						title="Ultime notizie">
						<NewsUI />
					</Modal>
				)}
				<div className={`ui ${expandMobile ? "collapsible--expanded" : ""}`}>
					{expandPgMenu && (
						<PgMenuUI
							show={expandPgMenu}
							onClose={() => this.toggleExpand("expandPgMenu")}
						/>
					)}
					<MobileHeadUI
						isExpanded={expandMobile}
						onExpand={() => this.toggleExpand("expandMobile")}
					/>
					<div className="ui__content collapsible__content">
						<HeaderUI />
						<PgUI
							health={90}
							stamina={80}
							onClick={() => this.toggleExpand("expandPgMenu")}
						/>
						<MenuUI selectedMenu={selectedMenu} onSelect={this.selectMenu} />
						{selectedMenu === 1 && (
							<FrameBox className="ui__box">
								<h4
									className="ui__title"
									onClick={() => this.toggleExpand("expandOnline")}>
									Mostra tutti
								</h4>
								<OnlineUI
									title="Mostra tutti"
									onSelectUser={this.handlePgClick}
								/>
							</FrameBox>
						)}
						{selectedMenu === 2 && <SocialUI onPgSelect={this.handlePgClick} />}
						{selectedMenu === 3 && <ForumUI />}
						{selectedMenu === 4 && <MessagesUI />}
						<FrameBox palette="secondary" className="ui__box">
							<h4
								onClick={() => this.toggleExpand("expandNews")}
								className="ui__title">
								News
							</h4>
							<NewsUI />
						</FrameBox>
					</div>
				</div>
			</>
		)
	}
}

export default UI
