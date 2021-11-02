import React from "react"
import { Text } from "@arwes/core"

import SunIcon from "../media/icons/weather/sun.svg"

class WeatherUI extends React.Component {
	render() {
		return (
			<div className="ui__weather">
				<Text as="div">27°C</Text>
				<img alt="" src={SunIcon} className="ui__weather-icon" />
			</div>
		)
	}
}

export default WeatherUI
