import React from "react"
import Navbar from "./common/navbar"
import { FrameBox, Text } from "@arwes/core"

const InfoPage = props => {
	return (
		<div>
			<Navbar {...props} />
			<div className="box">
				<FrameBox
					className="arwes-framebox"
					animator={{ duration: { enter: 1000 } }}
					hideShapes>
					<div className="box__info">
						<Text as="h2" className="box__title">
							Login
						</Text>
						<FrameBox palette="secondary" style={{ display: "block" }}>
							<input />
						</FrameBox>
					</div>
				</FrameBox>
			</div>
		</div>
	)
}

export default InfoPage
