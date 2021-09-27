import React, { useEffect } from "react"
import anime from "animejs"

import Icon from "../common/icon"

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
			<Icon className="explore-icon" secondary round>
				<a href="#explore">
					<svg className="icon__image" viewBox="0 0 10 10">
						<path d="M 0 0 L 5 7 L 10 0" />
					</svg>
				</a>
			</Icon>
			<div id="explore" />
		</div>
	)
}

export default Explore
