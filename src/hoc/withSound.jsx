import React from "react"
import { useBleeps } from "@arwes/sounds"

function withSound(Component) {
	return function WithSound() {
		const bleeps = useBleeps()
		return <Component sounds={bleeps} />
	}
}

export default withSound
