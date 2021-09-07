import React, { Component } from "react"
import { Text } from "@arwes/core"

class Logo extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="brand">
				<svg className="brand__logo" viewBox="0 0 500 40">
					<use xlinkHref="images/sprite.svg#logo"></use>
				</svg>
				<Text
					animator={{ duration: { enter: 500, delay: 3000 } }}
					className="brand__subtitle"
					as="h2">
					An rpg scifi play by chat
				</Text>
			</div>
		)
	}
}

export default Logo
