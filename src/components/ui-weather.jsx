import React from "react"
import { Text } from "@arwes/core"

import SunIcon from "../media/icons/weather/sun.svg"
import "../css/weather.css"

class WeatherUI extends React.Component {
	render() {
		return (
			<div className="flex center">
				<Text as="div">27°C</Text>
				<img alt="" src={SunIcon} className="weather__icon" />
			</div>
		)
	}
}

export default WeatherUI
