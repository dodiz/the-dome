import React, { useState } from "react"
import { Text } from "@arwes/core"

import Icon from "../common/icon"

const Explore = () => {
	const [show, setShow] = useState(false)

	return (
		<div className="splash__explore" onMouseOver={() => setShow(true)}>
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
			{show && (
				<Text as="h1" className="splash__explore-heading">
					Esplora
				</Text>
			)}
		</div>
	)
}

export default Explore
