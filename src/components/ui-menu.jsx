import React from "react"
import withSound from "../hoc/withSound"
import { FrameCorners, Text } from "@arwes/core"

const MenuUI = ({ selectedMenu, onSelect, sounds }) => {
	function selectMenu(i) {
		sounds.click.play()
		onSelect(i)
	}

	return (
		<div className="ui__menu">
			<FrameCorners
				hover
				onClick={() => selectMenu(1)}
				palette={selectedMenu === 1 && "secondary"}>
				<Text>Presenti</Text>
			</FrameCorners>
			<FrameCorners
				hover
				onClick={() => selectMenu(2)}
				palette={selectedMenu === 2 && "secondary"}>
				<Text>Social</Text>
			</FrameCorners>
			<FrameCorners
				hover
				onClick={() => selectMenu(3)}
				palette={selectedMenu === 3 && "secondary"}>
				<Text>Forum</Text>
			</FrameCorners>
			<FrameCorners
				hover
				onClick={() => selectMenu(4)}
				palette={selectedMenu === 4 && "secondary"}>
				<Text>Messaggi</Text>
			</FrameCorners>
		</div>
	)
}

export default withSound(MenuUI)
