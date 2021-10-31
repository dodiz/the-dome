import React from "react"
import { FrameCorners, Text } from "@arwes/core"

const MenuUI = () => {
	return (
		<div className="ui__menu">
			<FrameCorners hover>
				<Text>Presenti</Text>
			</FrameCorners>
			<FrameCorners hover>
				<Text>Social</Text>
			</FrameCorners>
			<FrameCorners hover>
				<Text>Forum</Text>
			</FrameCorners>
			<FrameCorners hover>
				<Text>Messaggi</Text>
			</FrameCorners>
		</div>
	)
}

export default MenuUI
