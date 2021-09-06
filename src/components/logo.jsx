import React, { Component } from "react"

import anime from "animejs"

class Logo extends Component {
	componentDidMount() {
		const paths = document.querySelectorAll("brand")

		anime({
			targets: this.svgElement,
			easing: "easeInCubic",
			duration: 200,
			opacity: 0
		})
		anime({
			targets: paths,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "linear",
			direction: "reverse",
			duration: 200,
			complete: () => {
				anime.set(this.svgElement, { opacity: 0 })
			}
		})
	}

	render() {
		return (
			<svg className="brand">
				<use xlinkHref="images/sprite.svg#logo"></use>
			</svg>
		)
	}
}

export default Logo
