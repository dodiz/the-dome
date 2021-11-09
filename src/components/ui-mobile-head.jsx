import React from "react"
import { FrameCorners } from "@arwes/core"

import Brand from "./brand"
import Icon from "./common/icon"
import homeIcon from "../media/icons/home.svg"

const MobileHeadUI = ({ onExpand, isExpanded }) => {
	return (
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
						secondary={isExpanded}
						padding
						className="ui__head-icon"
						src={homeIcon}
						onClick={onExpand}
					/>
				</div>
			</FrameCorners>
		</div>
	)
}

export default MobileHeadUI
