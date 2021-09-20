import React, { Component } from "react"
import anime from "animejs"
import withSound from "../../hoc/withSound"
import Icon from "../common/icon"

const PegiList = [
	{
		src: "/images/pegi/bad-language.png",
		alt: "Linguaggio volgare"
	},
	{
		src: "/images/pegi/discrimination.png",
		alt: "Discriminazione"
	},
	{
		src: "/images/pegi/drugs.png",
		alt: "Utilizzo di droga"
	},
	{
		src: "/images/pegi/sex.png",
		alt: "Contenuti a sfondo sessuale"
	},
	{
		src: "/images/pegi/violent.png",
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
