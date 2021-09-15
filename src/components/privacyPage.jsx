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
					palette="secondary">
					<div className="box__info">
						<Text as="h2" className="box__title">
							Privacy policy
						</Text>
						<Text as="p">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Explicabo ad, nulla doloribus illum nam aliquam temporibus
							molestias nesciunt laboriosam omnis! Modi ullam similique
							consequuntur quibusdam? Error, eum nulla dignissimos eos commodi
							quibusdam provident reprehenderit quis quia quaerat fugit minus
							doloribus repudiandae, ad architecto excepturi animi cum earum
							minima! Vero nisi suscipit temporibus consequuntur nihil incidunt
							atque consequatur, iure asperiores at, quod delectus id magni
							distinctio sunt nulla placeat voluptatibus ab alias nobis
							consectetur, quas velit dolorum! Autem cumque velit sapiente unde
							facere rem et voluptates recusandae quam, ab provident sint, sunt
							possimus earum, incidunt dolor. Vel ratione qui impedit aliquam!
						</Text>
					</div>
				</FrameBox>
			</div>
		</div>
	)
}

export default InfoPage
