import React from "react"
import { Link } from "react-router-dom"
import { Text } from "@arwes/core"

import withSound from "../../hoc/withSound"

function LinkComponent(props) {
	return (
		<Link
			onMouseover={() => props.sounds.hover.play()}
			to={props.to}
			className="link">
			<Text>{props.children}</Text>
		</Link>
	)
}

export default withSound(LinkComponent)
