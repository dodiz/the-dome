import React from "react"

import { Text } from "@arwes/core"
import Icon from "../common/icon"

const Explore = () => {
	return (
		<div className="splash__explore">
			<Text as="h1">Explore</Text>

			<Icon className="splash__explore-icon" round>
				<a href="#explore">
					<svg
						className="icon"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
						viewBox="0 0 10 10">
						<path d="M 0 0 L 5 7 L 10 0" />
					</svg>
				</a>
			</Icon>
		</div>
	)
}

export default Explore
