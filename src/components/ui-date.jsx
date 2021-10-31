import React from "react"
import { Text } from "@arwes/core"

class HeaderUI extends React.Component {
	printDate() {
		const date = new Date(Date.now())
		return `${date.getDate()} / ${date.getMonth() + 1} / ${
			date.getFullYear() + 50
		}`
	}

	render() {
		return (
			<Text as="div" className="ui__date">
				{this.printDate()}
			</Text>
		)
	}
}

export default HeaderUI
