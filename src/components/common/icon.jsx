import React from "react"
import withSound from "../../hoc/withSound"

const Icon = ({
	sounds,
	src,
	alt,
	round,
	className,
	secondary,
	pulse,
	children
}) => {
	const Image = children || (
		<img className="icon__image" src={src} alt={alt || ""} />
	)

	return (
		<span
			onMouseOver={() => sounds.hover.play()}
			onClick={() => sounds.click.play()}
			className={`icon ${pulse && "icon--pulse"} ${
				secondary && "icon--secondary"
			} ${round ? "icon--round" : "icon--clipper"} ${className || ""}`}>
			{round ? Image : <span className="icon__sub">{Image}</span>}
		</span>
	)
}

export default withSound(Icon)
