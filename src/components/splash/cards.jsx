import React from "react"
import { Animator } from "@arwes/animation"
import { Card, Text, Button } from "@arwes/core"
import handleViewport from "react-in-viewport"

const CardComponent = () => (
	<Card
		image={{
			src: "https://playground.arwes.dev/assets/images/wallpaper.jpg"
		}}
		title="Nebula"
		options={
			<Button palette="secondary">
				<Text>Learn More</Text>
			</Button>
		}
		style={{ maxWidth: 400 }}>
		<Text>
			A nebula is an interstellar cloud of dust, hydrogen, helium and other
			ionized gases. Originally, the term was used to describe any diffused
			astronomical object, including galaxies beyond the Milky Way.
		</Text>
	</Card>
)

const Cards = props => {
	return (
		<section className="cards-container" ref={props.forwardedRef}>
			<Text as="h1">Scegli la tua razza</Text>
			<div className="cards">
				<Animator animator={{ activate: props.enterCount > 0 }}>
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</Animator>
			</div>
		</section>
	)
}

export default handleViewport(Cards)
