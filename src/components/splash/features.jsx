import React from "react"
import { FrameBox, Figure, Text } from "@arwes/core"

import withScrollAnimation from "../../hoc/withScrollAnimation"

const EXPLORE__WHEN__URL = "/images/explore/how.png"
const EXPLORE__WHERE__URL = "/images/explore/where.png"
const EXPLORE__HOW__URL = "/images/explore/when.png"

const Feature = props => (
	<article className="feature grid">
		<div className="feature__image">
			<Figure src={props.image} palette="secondary" alt="A nebula" fluid />
		</div>
		<FrameBox
			className="arwes-framebox feature__content"
			animator={{ duration: { enter: 1000 } }}
			hideShapes
			linesWidths={[2, 0, 2, 0]}
			palette="secondary">
			<div className="feature__box">
				<Text as="h2" className="h2">
					{props.title}
				</Text>
				<Text as="p">{props.children}</Text>
			</div>
		</FrameBox>
	</article>
)
const FeatureComponent = () => {
	return (
		<section className="features">
			<div className="splash__title">
				<Text className="h1" as="h1">
					Esplora un mondo distopico
				</Text>
			</div>
			<Feature image={EXPLORE__WHEN__URL} title="What's left of us">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
				repudiandae, nemo molestiae sequi expedita officia ullam perspiciatis
				quis corrupti et neque nulla commodi animi, inventore dolore architecto
				eius! Cum maiores vel delectus amet facilis laboriosam accusantium
				aliquid eum eveniet qui laudantium, exercitationem voluptatibus corrupti
				recusandae. Ipsum cumque pariatur expedita.
			</Feature>
			<Feature
				image={EXPLORE__WHERE__URL}
				title="The world ends, the dome stands">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
				deserunt voluptates! Voluptatem autem magni amet cum nihil harum id
				sequi illum vero maiores ipsa ex aut porro accusantium optio, nam
				voluptates iure odio corrupti quas explicabo excepturi qui possimus.
				Ipsum obcaecati assumenda doloribus aliquam officia praesentium est!
				Repellendus, modi provident.
			</Feature>
			<Feature image={EXPLORE__HOW__URL} title="Mankind adjusted">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
				ducimus nihil molestiae dignissimos doloribus minima ex at autem?
				Voluptatibus reiciendis, id sequi officia consectetur accusantium quam
				odit doloremque? Laborum nesciunt eum optio eveniet doloribus laboriosam
				saepe maiores perspiciatis quos, odio sit id at itaque repudiandae
				quisquam quo suscipit sint molestias.
			</Feature>
		</section>
	)
}
export default withScrollAnimation(FeatureComponent)
