import React from "react"
import withSound from "../../hoc/withSound"

const Icon = ({
	sounds,
	alt,
	round,
	className,
	secondary,
	pulse,
	padding,
	onClick,
	src,
	...rest
}) => {
	const Image = (
		<img className="icon__image" src={src} alt={alt || ""} {...rest} />
	)

	const classNameString = `icon ${secondary ? "icon--secondary" : ""} ${
		padding ? "icon--padding" : ""
	} ${pulse ? "icon--pulse" : ""} ${round ? "icon--round" : "icon--clipper"} ${
		className || ""
	}`

	return (
		<span
			onMouseOver={() => sounds.hover.play()}
			onClick={() => {
				sounds.click.play()
				if (onClick) onClick()
			}}
			className={classNameString}>
			{round ? Image : <span className="icon__sub">{Image}</span>}
		</span>
	)
}

export default withSound(Icon)
