import React from "react"
import Brand from "./brand"
import Icon from "./common/icon"
import "../css/ui.css"

import { FrameCorners } from "@arwes/core"

const MenuIcons = [
	{ src: "/images/icons/globe.svg", label: "Info" },
	{ src: "/images/icons/person.svg", label: "Pg" },
	{ src: "/images/icons/group.svg", label: "Online" }
]

class UI extends React.Component {
	state = {
		mobileSelection: 0
	}

	toggleExpand = i => {
		this.setState({ mobileSelection: i === this.state.mobileSelection ? 0 : i })
	}

	render() {
		const { mobileSelection } = this.state
		return (
			<FrameCorners
				hideShapes
				cornerWidth={1}
				cornerLength={20}
				showContentLines
				contentLineWidth={1}
				className={`ui ${mobileSelection > 0 ? "collapsible--expanded" : ""}`}>
				<section className="ui__container">
					<div className="collapsible__head ui__toggler">
						<div className="ui__head-menu">
							<div className="ui__head-menu-item">
								<Icon
									padding
									className="ui__head-icon"
									src="/images/icons/home.svg"
								/>
								Home
							</div>
							{MenuIcons.map((item, i) => (
								<div className="ui__head-menu-item" key={i}>
									<Icon
										secondary={i + 1 === mobileSelection}
										onClick={() => this.toggleExpand(i + 1)}
										padding
										className="ui__head-icon"
										src={item.src}
									/>
									{item.label}
								</div>
							))}
						</div>
					</div>
					<div className="ui__content collapsible__content">
						<Brand hideSub />
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
						deleniti quaerat magnam voluptates reiciendis? Provident, minima
						quae corporis esse qui saepe maxime inventore labore, ab aliquam
						doloribus nesciunt recusandae natus! Ullam, impedit? Ipsam delectus
						doloribus in et sequi tempora molestias, iusto magnam. Molestias
						doloremque nobis, repellendus dolores consequuntur incidunt
						perferendis deleniti laboriosam sunt illum eius, labore harum
						commodi nemo maiores architecto quisquam dolore debitis. Fuga iusto
						ipsum voluptatibus debitis delectus repellendus eum maiores non
						voluptas suscipit tempora omnis, fugit perspiciatis dolorem,
						praesentium placeat ea et corrupti eligendi. Hic commodi, quaerat
						corporis sequi, a fugit ullam maxime dolor laudantium beatae labore
						inventore velit neque porro. Unde expedita reprehenderit praesentium
						molestias est, consequuntur magni porro sequi, iusto sed sit,
						consectetur blanditiis inventore quaerat vitae amet? Consectetur,
					</div>
				</section>
			</FrameCorners>
		)
	}
}

export default UI
