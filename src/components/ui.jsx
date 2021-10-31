import React from "react"
import {
	FrameCorners,
	FrameHexagon,
	FrameLines,
	FrameBox,
	Text
} from "@arwes/core"

import Brand from "./brand"
import Icon from "./common/icon"

import DateUI from "./ui-date"
import WeatherUI from "./ui-weather"
import BarsUI from "./ui-bars"

import dome from "../media/dome.png"
import "../css/ui.css"
import MenuUI from "./ui-menu"

class UI extends React.Component {
	state = {
		expandMobile: false
	}

	toggleExpand = () => {
		this.setState(prev => ({ expandMobile: !prev.expandMobile }))
	}

	render() {
		const { expandMobile } = this.state
		return (
			<div className={`ui ${expandMobile ? "collapsible--expanded" : ""}`}>
				<div className="collapsible__head ui__toggler">
					<FrameCorners
						hideShapes
						cornerWidth={1}
						cornerLength={20}
						showContentLines
						contentLineWidth={1}>
						<div className="ui__head-menu">
							<Brand hideSub />
							<Icon
								secondary={expandMobile}
								padding
								className="ui__head-icon"
								src="/images/icons/globe.svg"
								onClick={this.toggleExpand}
							/>
						</div>
					</FrameCorners>
				</div>
				<div className="ui__content collapsible__content">
					<FrameLines
						largeLineWidth={2}
						smallLineWidth={4}
						smallLineLength={20}
						hideShapes
						className="ui__header ui__box">
						<div className="ui__flex">
							<img
								className="ui__logo animate__animated animate__bounceIn animate__delay-1s"
								src={dome}
							/>
							<div className="ui__flex-content">
								<WeatherUI />
								<div className="ui__line" />
								<DateUI />
							</div>
						</div>
					</FrameLines>
					<FrameHexagon className="ui__box">
						<div className="ui__flex">
							<img
								className="ui__pg"
								src="https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"
							/>
							<div className="ui__box">
								<BarsUI />
								<BarsUI secondary />
							</div>
						</div>
					</FrameHexagon>
					<MenuUI />
					<FrameBox className="ui__box">
						<div
							style={{
								height: "200px",
								overflow: "auto"
							}}>
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
					<FrameBox
						palette="secondary"
						className="ui__box"
						style={{ marginTop: "2rem" }}>
						<div style={{ height: "100px", overflow: "auto" }}>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
								non pariatur odio autem quibusdam eligendi quasi eius magnam,
								quam cupiditate.
							</Text>
						</div>
					</FrameBox>
				</div>
			</div>
		)
	}
}

export default UI
