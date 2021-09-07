import React, { Component } from "react"
import { Text } from "@arwes/core"

class Logo extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="brand">
				<svg className="brand__logo">
					<use xlinkHref="images/sprite.svg#logo"></use>
				</svg>
				<Text className="brand__subtitle" as="div">
					A cyberpunk play by chat
				</Text>
			</div>
		)
	}
}

export default Logo
