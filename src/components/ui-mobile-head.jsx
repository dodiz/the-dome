import React from "react"
import { FrameCorners } from "@arwes/core"

import Brand from "./brand"
import Icon from "./common/icon"

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
						src="/images/icons/globe.svg"
						onClick={onExpand}
					/>
				</div>
			</FrameCorners>
		</div>
	)
}

export default MobileHeadUI
