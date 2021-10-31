import React, { useEffect } from "react"
import anime from "animejs"

import Icon from "./common/icon"

const Explore = () => {
	useEffect(() => {
		const delay = 2000
		const duration = 300

		anime({
			targets: ".explore-container",
			easing: "easeOutCubic",
			bottom: {
				delay,
				duration,
				value: ["-50%", "10%"]
			},
			opacity: {
				delay,
				duration,
				value: [0, 1]
			}
		})
	}, [])

	return (
		<div className="explore-container">
			<a href="#explore">
				<Icon
					pulse
					secondary
					round
					Icon="/images/icons/arrow-down.svg"
					className="icon--arrow-down"
				/>
			</a>
			<div id="explore" />
		</div>
	)
}

export default Explore
