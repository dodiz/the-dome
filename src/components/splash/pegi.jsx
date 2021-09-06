import React, { Component } from "react"

class Pegi extends Component {
	render() {
		return (
			<div className="pegi">
				<span className="icon-wrapper pegi__icon">
					<img
						className="icon"
						src="/images/pegi/bad-language.png"
						alt="Bad Language"
					/>
				</span>
				<span className="icon-wrapper pegi__icon">
					<img
						className="icon"
						src="/images/pegi/discrimination.png"
						alt="Discrimination"
					/>
				</span>
				<span className=" icon-wrapper pegi__icon">
					<img className="icon " src="/images/pegi/drugs.png" alt="Drugs" />
				</span>
				<span className=" icon-wrapper pegi__icon  ">
					<img className="icon " src="/images/pegi/sex.png" alt="Sex" />
				</span>
				<span className=" icon-wrapper pegi__icon">
					<img className="icon " src="/images/pegi/violent.png" alt="Violent" />
				</span>
			</div>
		)
	}
}

export default Pegi
