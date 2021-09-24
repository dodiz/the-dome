import React from "react"

import Icon from "../common/icon"

const Explore = () => {
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
