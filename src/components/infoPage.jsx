import React from "react"
import Navbar from "./common/navbar"
import { FrameBox } from "@arwes/core"

const InfoPage = props => {
	return (
		<div>
			<Navbar {...props} />
			<div className="box-container">
				<FrameBox
					animator={{ duration: { enter: 1000 } }}
					className="box__info"
				/>
			</div>
		</div>
	)
}

export default InfoPage
