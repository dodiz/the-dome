import React, { Component } from "react"
import anime from "animejs"

class Pegi extends Component {
	componentDidMount() {
		const pegis = document.querySelectorAll(".pegi__icon")

		anime({
			targets: pegis,
			easing: "easeOutCubic",
			translateX: (link, index) => [[-120, -60, 0, 60, 120][index], 0],
			delay: 1000,
			duration: 1000,
			complete: () => {}
		})
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

export default Pegi
