import React from "react"
import Navbar from "./common/navbar"
import { FrameBox, Figure, Text } from "@arwes/core"

const InfoPage = props => {
	return (
		<div>
			<Navbar {...props} />
			<div className="box grid">
				<Figure
					className="box__preview"
					src={"/images/preview.png"}
					alt="A nebula"
					fluid>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
					dignissimos ipsa, architecto distinctio quis aliquid fugit pariatur
					illum corrupti quasi.
				</Figure>

				<FrameBox
					className="arwes-framebox box__info"
					animator={{ duration: { enter: 1000 } }}
					hideShapes>
					<Text as="h2" className="box__title">
						The world ends, the dome stands
					</Text>
					<Text as="p">
						Lorem ipsum <em>dolor sit</em>, amet consectetur adipisicing elit.
						Explicabo ad, nulla doloribus illum nam aliquam temporibus molestias
						nesciunt laboriosam omnis! Modi ullam similique consequuntur
						quibusdam? Error, eum nulla dignissimos eos commodi quibusdam
						provident reprehenderit quis quia quaerat fugit minus doloribus
						repudiandae, ad architecto excepturi animi cum earum minima! Vero
						nisi suscipit temporibus <em>consequuntur</em> nihil incidunt atque
						consequatur, iure asperiores at, quod delectus id magni distinctio
						sunt nulla placeat voluptatibus ab alias nobis consectetur, quas
						velit dolorum! Autem cumque velit sapiente unde facere rem et
						voluptates recusandae quam, ab provident sint, sunt possimus earum,
						incidunt dolor. Vel ratione qui impedit aliquam!
					</Text>
				</FrameBox>
			</div>
		</div>
	)
}

export default InfoPage
