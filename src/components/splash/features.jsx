import React from "react"
import { FrameBox, Figure, Text } from "@arwes/core"
import { Animator } from "@arwes/animation"

import withScrollAnimation from "../../hoc/withScrollAnimation"

const Feature = props => (
	<article className="feature grid">
		<Figure
			className="feature__image"
			src={props.image}
			palette="secondary"
			alt="A nebula"
			fluid
		/>
		<FrameBox
			className="arwes-framebox feature__content"
			animator={{ duration: { enter: 1000 } }}
			hideShapes
			linesWidths={[2, 0, 2, 0]}
			palette="secondary">
			<div className="feature__box">
				<Text as="h2" className="feature__title">
					{props.title}
				</Text>
				<Text as="p">{props.children}</Text>
			</div>
		</FrameBox>
	</article>
)
const FeatureComponent = props => {
	const { forwardedRef, inViewport } = props
	return (
		<section className="features" ref={forwardedRef}>
			<div className="splash__title">
				<Text as="h1">Esplora un mondo distopico</Text>
			</div>
			<Animator animator={{ activate: inViewport }}>
				<Feature image="/images/preview.png" title="What's left of us">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
					repudiandae, nemo molestiae sequi expedita officia ullam perspiciatis
					quis corrupti et neque nulla commodi animi, inventore dolore
					architecto eius! Cum maiores vel delectus amet facilis laboriosam
					accusantium aliquid eum eveniet qui laudantium, exercitationem
					voluptatibus corrupti recusandae. Ipsum cumque pariatur expedita.
				</Feature>
				<Feature
					image="/images/meteorite.jpg"
					title="The world ends, the dome stands">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
					deserunt voluptates! Voluptatem autem magni amet cum nihil harum id
					sequi illum vero maiores ipsa ex aut porro accusantium optio, nam
					voluptates iure odio corrupti quas explicabo excepturi qui possimus.
					Ipsum obcaecati assumenda doloribus aliquam officia praesentium est!
					Repellendus, modi provident.
				</Feature>
				<Feature image="/images/ship.jpg" title="Mankind adjusted">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
					ducimus nihil molestiae dignissimos doloribus minima ex at autem?
					Voluptatibus reiciendis, id sequi officia consectetur accusantium quam
					odit doloremque? Laborum nesciunt eum optio eveniet doloribus
					laboriosam saepe maiores perspiciatis quos, odio sit id at itaque
					repudiandae quisquam quo suscipit sint molestias.
				</Feature>
			</Animator>
		</section>
	)
}
export default withScrollAnimation(FeatureComponent)
