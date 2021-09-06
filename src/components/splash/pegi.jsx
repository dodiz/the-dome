import React, { Component } from "react"

class Pegi extends Component {
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
