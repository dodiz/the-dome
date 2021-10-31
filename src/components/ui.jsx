import React from "react"
import Brand from "./brand"
import Icon from "./common/icon"
import HeaderUI from "./ui-header"
import "../css/ui.css"

import { FrameCorners } from "@arwes/core"

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
					<HeaderUI />
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
					tempore similique? Vel assumenda deleniti soluta dolore error adipisci
					optio. Labore perspiciatis maiores, reiciendis laudantium numquam
					dolorem aut amet debitis eaque mollitia facilis recusandae ratione
					tempore, iure officia laborum veniam dolores explicabo. Quibusdam,
					praesentium quo eos consequatur obcaecati quae illo dolores.
				</div>
			</div>
		)
	}
}

export default UI
