import React from "react"

import Icon from "../common/icon"

const Explore = () => {
	return (
		<div className="splash__explore">
			<Icon className="splash__explore-icon" round>
				<a href="#explore">
					<svg className="icon" viewBox="0 0 10 10">
						<path d="M 0 0 L 5 7 L 10 0" />
					</svg>
				</a>
			</Icon>
		</div>
	)
}

export default Explore
