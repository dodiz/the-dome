import React, { Component } from "react"
import anime from "animejs"
import withSound from "../../hoc/withSound"

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
				<span className="icon-wrapper pegi__icon">
					<span className="icon-clipper">
						<img
							className="icon"
							src="/images/pegi/bad-language.png"
							alt="Bad Language"
						/>
					</span>
				</span>
				<span className="icon-wrapper pegi__icon">
					<span className="icon-clipper">
						<img
							className="icon"
							src="/images/pegi/discrimination.png"
							alt="Discrimination"
						/>
					</span>
				</span>
				<span className="icon-wrapper pegi__icon">
					<span className="icon-clipper">
						<img className="icon " src="/images/pegi/drugs.png" alt="Drugs" />
					</span>
				</span>
				<span className="icon-wrapper pegi__icon">
					<span className=" icon-clipper ">
						<img className="icon " src="/images/pegi/sex.png" alt="Sex" />
					</span>
				</span>
				<span className="icon-wrapper pegi__icon">
					<span className="icon-clipper">
						<img
							className="icon"
							src="/images/pegi/violent.png"
							alt="Violent"
						/>
					</span>
				</span>
			</div>
		)
	}
}

export default withSound(Pegi)
