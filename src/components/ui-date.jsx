import React from "react"
import { Text } from "@arwes/core"

class DateUI extends React.Component {
	printDate() {
		const date = new Date(Date.now())
		return `${date.getDate()} / ${date.getMonth() + 1} / ${
			date.getFullYear() + 50
		}`
	}

	render() {
		return <Text as="div">{this.printDate()}</Text>
	}
}

export default DateUI
