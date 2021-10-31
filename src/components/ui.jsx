import React from "react"
import { FrameCorners, FrameHexagon, FrameLines } from "@arwes/core"

import Brand from "./brand"
import Icon from "./common/icon"

import DateUI from "./ui-date"
import WeatherUI from "./ui-weather"
import BarsUI from "./ui-bars"

import dome from "../media/dome.png"
import "../css/ui.css"

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
				</div>
			</div>
		)
	}
}

export default UI
