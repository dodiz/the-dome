import React, { useState, useEffect } from "react"
import { Animator } from "@arwes/animation"
import { Text, Figure } from "@arwes/core"

export default function SplashMenu() {
	const [activate, setActivate] = useState(true)

	useEffect(() => {
		setTimeout(() => setActivate(prev => !prev), 1000)
	}, [activate])

	return (
		<Animator animator={{ activate, manager: "stagger" }}>
			<Text as="h1">Nebula</Text>
			<Text as="p">
				A nebula is an interstellar cloud of dust, hydrogen, helium and other
				ionized gases. Originally, the term was used to describe any diffused
				astronomical object, including galaxies beyond the Milky Way. The
				Andromeda Galaxy, for instance, was once referred to as the Andromeda
				Nebula (and spiral galaxies in general as "spiral nebulae") before the
				true nature of galaxies was confirmed in the early 20th century by Vesto
				Slipher, Edwin Hubble and others.
			</Text>
			<Figure src={""} alt="A nebula">
				A nebula is an interstellar cloud of dust, hydrogen, helium and other
				ionized gases. Originally, the term was used to describe any diffused
				astronomical object, including galaxies beyond the Milky Way.
			</Figure>
			<Text as="p">
				Most nebulae are of vast size; some are hundreds of light-years in
				diameter. A nebula that is visible to the human eye from Earth would
				appear larger, but no brighter, from close by. The Orion Nebula, the
				brightest nebula in the sky and occupying an area twice the angular
				diameter of the full Moon, can be viewed with the naked eye but was
				missed by early astronomers. Although denser than the space surrounding
				them, most nebulae are far less dense than any vacuum created on Earth –
				a nebular cloud the size of the Earth would have a total mass of only a
				few kilograms.
			</Text>
		</Animator>
	)
}
