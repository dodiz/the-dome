import React from "react"
import { FrameLines, FrameBox, Text } from "@arwes/core"

import MobileHeadUI from "./ui-mobile-head"
import DateUI from "./ui-date"
import WeatherUI from "./ui-weather"
import PgUI from "./ui-pg"
import PgMenuUI from "./ui-pg-menu"
import MenuUI from "./ui-menu"
import NewsUI from "./ui-news"

import dome from "../media/dome.png"
import "../css/ui.css"

class UI extends React.Component {
	state = {
		expandMobile: false,
		showPgMenu: false,
		health: 0,
		stamina: 0
	}

	toggleExpand = () => {
		this.setState(prev => ({ expandMobile: !prev.expandMobile }))
	}
	toggleShowPgMenu = () => {
		this.setState(prev => ({ showPgMenu: !prev.showPgMenu }))
	}

	componentDidMount() {}

	render() {
		const { expandMobile, showPgMenu } = this.state
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
						<div className="ui__flex">
							<img
								alt="logo"
								className="ui__logo animate__animated animate__bounceIn animate__delay-1s"
								src={dome}
							/>
							<div className="ui__flex-extend">
								<WeatherUI />
								<div className="line" />
								<DateUI />
							</div>
						</div>
					</FrameLines>
					<PgUI health={10} stamina={50} onClick={this.toggleShowPgMenu} />
					<MenuUI />
					<FrameBox className="ui__box ui__flex-extend">
						<div className="ui__preview">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							nemo fugiat vero ipsum ab voluptates quam dicta iste veniam
							accusantium eveniet expedita, asperiores quia, id nesciunt tempora
							illum harum eos. Inventore, nam at praesentium non dignissimos
							nemo ea laboriosam autem itaque cupiditate neque culpa ullam
							quidem ex officiis, harum et iusto reiciendis ducimus assumenda!
							Ipsum, ullam. Voluptas quisquam asperiores odio iusto harum
							eveniet illum ipsa quidem! Quod quaerat, ad aliquam est sint quis
							sunt rerum sequi dignissimos consequuntur exercitationem
							voluptates corrupti soluta sit ut dicta commodi praesentium magnam
							culpa debitis veritatis qui, quas, molestiae numquam! Neque
							eveniet suscipit, ad dolore voluptatem placeat at deserunt
							aspernatur soluta blanditiis maxime. Nobis voluptas saepe
							exercitationem doloremque sunt deleniti eaque, ex pariatur
							repellendus illo, ipsa nisi. Porro repudiandae ipsa consectetur
							corporis sit? Amet tempora placeat illum nostrum qui id fugit
							omnis dolorum earum! Optio excepturi similique possimus dolorem
							voluptatum porro quasi. Velit delectus non deserunt quasi aperiam
							magnam, voluptate dolores doloribus doloremque porro eius repellat
							placeat obcaecati ratione ipsum corrupti enim dolorum
							exercitationem tempora rerum vitae accusamus. Incidunt molestias
							maxime minus, dolorem optio illo. Repudiandae fugit consequuntur
							rerum, rem beatae aperiam ratione provident unde libero porro
							architecto eos aliquid numquam distinctio incidunt eius
							dignissimos?
						</div>
					</FrameBox>
					<NewsUI />
				</div>
			</div>
		)
	}
}

export default UI
