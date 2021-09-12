import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Text } from "@arwes/core"

import withSound from "../../hoc/withSound"

function LinkComponent(props) {
	const className = props.className || ""
	const location = useLocation()

	return (
		<Link
			onMouseOver={() => props.sounds.hover.play()}
			onClick={() => {
				props.sounds.click.play()
			}}
			to={props.to}
			className={`link ${
				props.to === location.pathname && "link--active"
			} ${className}`}>
			<Text>{props.children}</Text>
		</Link>
	)
}

export default withSound(LinkComponent)
