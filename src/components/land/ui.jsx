import React from "react"
import Brand from "../brand"

import { FrameCorners, Card, Text } from "@arwes/core"

class UI extends React.Component {
	render() {
		return (
			<FrameCorners className="ui" animator={{ duration: 1000, delay: 1000 }}>
				<Brand hideSub />
				<Card image={"https://i.ibb.co/gP4crDc/nomi-mappa.jpg"}>
					<Text>Meteo</Text>
				</Card>
			</FrameCorners>
		)
	}
}

export default UI
