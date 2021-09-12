import React from "react"
import { Link } from "react-router-dom"
import { Text } from "@arwes/core"

import withSound from "../../hoc/withSound"

function LinkComponent(props) {
	return (
		<Link
			onMouseOver={() => props.sounds.hover.play()}
			onClick={() => props.sounds.click.play()}
			to={props.to}
			className="link">
			<Text>{props.children}</Text>
		</Link>
	)
}

export default withSound(LinkComponent)
