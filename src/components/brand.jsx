import React, { Component } from "react"
import anime from "animejs"
import { Text } from "@arwes/core"

import { ReactComponent as Brand } from "../media/icons/brand.svg"
import withSound from "../hoc/withSound"

class Logo extends Component {
	componentDidMount() {
		this.animateEnter()
		this.soundEnter()
	}

	animateEnter() {
		anime({
			targets: ".brand__logo path",
			strokeDashoffset: [anime.setDashoffset, 0],
			fill: "#fff",
			strokeWidth: [5, 0],
			easing: "easeInOutSine",
			duration: 500,
			delay: function (_, i) {
				return i * 30
			}
		})
	}

	soundEnter() {
		const { sounds } = this.props
		sounds.typing.play()
		setTimeout(() => sounds.typing.stop(), 700)
	}

	render() {
		const { hideSub } = this.props

		return (
			<div className="brand">
				<Brand />
				{!hideSub && (
					<Text
						animator={{ duration: { delay: 1500 } }}
						className="brand__subtitle"
						as="p">
						cyberpunk rpg play by chat
					</Text>
				)}
			</div>
		)
	}
}

export default withSound(Logo)
