import React, { Component } from "react"
import anime from "animejs"
import { Text } from "@arwes/core"

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
				return i * 60
			}
		})
	}

	soundEnter() {
		const { sounds } = this.props
		sounds.typing.play()
		setTimeout(() => sounds.typing.stop(), 700)
	}

	render() {
		return (
			<div className="brand">
				<svg className="brand__logo" viewBox="0 0 317 25">
					{/* THE */}
					<path d="M 1 1 H 13 V 5 H 5 V 25 H 1 V 1" />
					<path d="M 17 25 V 15 L 21 11 H 33 V 1 H 37 V 25 H 33 V 15 H 21 V 25 H 17" />
					<path d="M 41 25 H 56 V 21 H 45 L 41 25 M 41 1 H 56 V 5 H 45 L 41 1 M 41 11 H 56 V 15 H 41 V 11" />
					{/* DOME */}
					<path d="M 67 1 H 75 C 89 1 89 25 75 25 H 67 L 71 21 H 75 C 84 21 84 5 75 5 H 70 L 67 1" />
					<path d="M 102 1 A 1 1 0 0 0 102 25 A 1 1 0 0 0 102 1 M 102 5 A 1 1 0 0 0 102 21 A 1 1 0 0 0 102 5" />
					<path d="M 118 1 L 130 13 L 142 1 V 25 H 138 V 10 L 130 18 L 118 6 V 1" />
					<path d="M 146 1 H 161 V 5 H 150 L 146 1 M 146 11 H 161 V 15 H 146 V 11 M 150 21 H 161 V 25 H 146 L 150 21" />

					{/* PROJECT */}
					<path d="M 172 1 H 184 Q 196 9 184 17 H 176 V 25 H 172 V 13 H 183 Q 189 9 183 5 H 176 L 172 1" />
					<path d="M 194 1 L 196 5 H 203 Q 209 9 203 13 H 200 L 206 25 H 210 L 206 17 Q 216 9 206 1 H 194" />
					<path d="M 227 1 A 1 1 0 0 0 227 25 A 1 1 0 0 0 227 1 M 227 5 a 1 1 0 0 0 0 16 a 1 1 0 0 0 0 -16" />
					<path d="M 243 23 L 246 20 C 247 21 249 21 249 21 V 25 C 249 25 244 25 243 23 M 253 1 V 1 H 257 V 16 C 257 16 257 20 255 21 L 252 18 C 253 17 253 16 253 16 V 1" />
					<path d="M 261 1 L 265 5 H 276 V 1 H 261 M 261 11 H 276 V 15 H 261 V 11 M 261 25 L 265 21 H 276 V 25 H 261" />
					<path d="M 292 1 A 1 1 0 0 0 292 25 C 294 25 295 24 295 24 L 292 21 C 281 21 281 5 292 5 C 292 5 295 5 297 7 L 300 4 C 296 1 292 1 292 1" />
					<path d="M 304 1 H 316 V 5 H 308 V 25 H 304 V 1" />
				</svg>
				<Text
					animator={{ duration: { enter: 200, delay: 1500 } }}
					className="brand__subtitle"
					as="p">
					cyberpunk rpg play by chat
				</Text>
			</div>
		)
	}
}

export default withSound(Logo)
