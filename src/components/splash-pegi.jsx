import React, { Component } from "react"
import anime from "animejs"
import withSound from "../hoc/withSound"
import Icon from "./common/icon"

import languagePegi from "../media/icons/pegi/bad-language.png"
import discriminationPegi from "../media/icons/pegi/discrimination.png"
import drugsPegi from "../media/icons/pegi/drugs.png"
import sexPegi from "../media/icons/pegi/sex.png"
import violentPegi from "../media/icons/pegi/violent.png"

const PegiList = [
	{
		src: languagePegi,
		alt: "Linguaggio volgare"
	},
	{
		src: discriminationPegi,
		alt: "Discriminazione"
	},
	{
		src: drugsPegi,
		alt: "Utilizzo di droga"
	},
	{
		src: sexPegi,
		alt: "Contenuti a sfondo sessuale"
	},
	{
		src: violentPegi,
		alt: "Violenza"
	}
]

class Pegi extends Component {
	componentDidMount() {
		this.animateEnter()
	}

	animateEnter() {
		const delay = 2000
		const duration = 300
		const space = 150

		anime({
			targets: ".pegi__icon",
			easing: "easeOutCubic",
			translateY: {
				delay,
				duration,
				value: ["200%", 0]
			},
			opacity: {
				delay,
				duration,
				value: [0, 1]
			},
			translateX: {
				value: (_, i, t) => `${space * i - (space * (t - 1)) / 2}%`,
				delay: delay + duration,
				duration
			}
		})
		setTimeout(() => this.props.sounds.assemble.play(), delay)
	}

	render() {
		return (
			<div className="pegi">
				{PegiList.map(pegi => (
					<Icon
						key={pegi.alt}
						src={pegi.src}
						alt={pegi.alt}
						className="pegi__icon"
					/>
				))}
			</div>
		)
	}
}

export default withSound(Pegi)
