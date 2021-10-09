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
	children,
	padding,
	onClick,
	...rest
}) => {
	const Image = children || (
		<img className="icon__image" src={src} alt={alt || ""} {...rest} />
	)

	return (
		<span
			onMouseOver={() => sounds.hover.play()}
			onClick={() => {
				sounds.click.play()
				if (onClick) onClick()
			}}
			className={`icon ${padding && "icon--padding"} ${
				pulse && "icon--pulse"
			} ${secondary && "icon--secondary"} ${
				round ? "icon--round" : "icon--clipper"
			} ${className || ""}`}>
			{round ? Image : <span className="icon__sub">{Image}</span>}
		</span>
	)
}

export default withSound(Icon)
