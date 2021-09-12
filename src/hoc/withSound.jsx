import React from "react"
import { useBleeps } from "@arwes/sounds"

function withSound(Component) {
	return function WithSound(props) {
		const bleeps = useBleeps()
		return (
			<Component sounds={bleeps} {...props}>
				{props.children}
			</Component>
		)
	}
}

export default withSound
