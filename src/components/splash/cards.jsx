import React from "react"
import { Card, Text, Button } from "@arwes/core"

const CardComponent = () => (
	<Card
		animator={{ animate: false }}
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

const Cards = () => {
	return (
		<section class="cards-container">
			<Text as="h1">Scegli la tua razza</Text>
			<div className="cards">
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</div>
		</section>
	)
}

export default Cards
