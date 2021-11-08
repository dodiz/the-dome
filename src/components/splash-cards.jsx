import React from "react"
import { Card, Text, Button } from "@arwes/core"

import withScrollAnimation from "../hoc/withScrollAnimation"

import humansImage from "../media/races/humans.jpg"
import mutantsImage from "../media/races/mutants.jpg"
import robotsImage from "../media/races/robots.jpg"

const CardComponent = ({ src, title, children }) => (
	<Card
		image={{
			src
		}}
		title={<h2 className="h2">{title}</h2>}
		className="card"
		options={
			<Button className="card__button" palette="secondary">
				<Text>Scopri</Text>
			</Button>
		}>
		<Text as="p">{children}</Text>
	</Card>
)

const Cards = () => {
	return (
		<section className="cards-container">
			<div className="splash__title">
				<Text as="h1" className="h1">
					Scegli la tua razza
				</Text>
			</div>
			<div className="cards">
				<CardComponent src={humansImage} title="Umani">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					atque consequuntur veniam explicabo voluptatibus vel perferendis rem
					quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
					reiciendis consectetur neque. Error, quod voluptate recusandae
					accusamus et animi incidunt
				</CardComponent>
				<CardComponent src={mutantsImage} title="Mutanti">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					atque consequuntur veniam explicabo voluptatibus vel perferendis rem
					quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
					reiciendis consectetur neque. Error, quod voluptate recusandae
					accusamus et animi incidunt
				</CardComponent>
				<CardComponent src={robotsImage} title="Sintetici">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					atque consequuntur veniam explicabo voluptatibus vel perferendis rem
					quisquam repudiandae qui natus fugiat voluptas, inventore laboriosam
					reiciendis consectetur neque. Error, quod voluptate recusandae
					accusamus et animi incidunt
				</CardComponent>
			</div>
		</section>
	)
}

export default withScrollAnimation(Cards)
