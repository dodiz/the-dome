import React from "react"
import { Text, FrameLines } from "@arwes/core"

import SunIcon from "../media/icons/weather/sun.svg"
import dome from "../media/dome.png"
import "../css/weather.css"

class WeatherUI extends React.Component {
	printDate() {
		const date = new Date(Date.now())
		return `${date.getDate()} / ${date.getMonth() + 1} / ${
			date.getFullYear() + 50
		}`
	}
	render() {
		return (
			<FrameLines
				largeLineWidth={2}
				smallLineWidth={4}
				smallLineLength={20}
				hideShapes
				className="ui__header">
				<div className="flex">
					<img
						alt="logo"
						className="ui__logo animate__animated animate__bounceIn animate__delay-1s"
						src={dome}
					/>
					<div className="flex__extend">
						<div className="flex center">
							<Text as="div">27°C</Text>
							<img alt="" src={SunIcon} className="weather__icon" />
						</div>
						<div className="line" />
						<Text as="div">{this.printDate()}</Text>
					</div>
				</div>
			</FrameLines>
		)
	}
}

export default WeatherUI
