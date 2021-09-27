import React from "react"
import { Animator } from "@arwes/animation"
import { Card, Text, Button } from "@arwes/core"
import withScrollAnimation from "../../hoc/withScrollAnimation"

const CardComponent = props => (
	<Card
		image={{
			src: props.image
		}}
		title={props.title}
		className="card"
		options={
			<Button className="card__button" palette="secondary">
				<Text>Scopri</Text>
			</Button>
		}
		style={{ maxWidth: 400 }}>
		<Text>{props.children}</Text>
	</Card>
)

const Cards = props => {
	const { forwardedRef, inViewport } = props
	return (
		<section className="cards-container" ref={forwardedRef}>
			<div className="splash__title">
				<Text as="h1">Scegli la tua razza</Text>
			</div>
			<div className="cards">
				<Animator animator={{ activate: inViewport }}>
					<CardComponent image="/images/races/humans.jpg" title="Umani">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						atque consequuntur veniam explicabo voluptatibus vel perferendis rem
						quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
						reiciendis consectetur neque. Error, quod voluptate recusandae
						accusamus et animi incidunt
					</CardComponent>
					<CardComponent title="Mutanti" image="/images/races/mutants.png">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						atque consequuntur veniam explicabo voluptatibus vel perferendis rem
						quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
						reiciendis consectetur neque. Error, quod voluptate recusandae
						accusamus et animi incidunt
					</CardComponent>
					<CardComponent image="/images/races/robots.png" title="Sintetici">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						atque consequuntur veniam explicabo voluptatibus vel perferendis rem
						quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
						reiciendis consectetur neque. Error, quod voluptate recusandae
						accusamus et animi incidunt
					</CardComponent>
				</Animator>
			</div>
		</section>
	)
}

export default withScrollAnimation(Cards)
