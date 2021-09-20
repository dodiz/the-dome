import React from "react"
import withSound from "../../hoc/withSound"

const Icon = ({ sounds, src, alt, round, className, children }) => {
	const Image = children || <img className="icon" src={src} alt={alt} />

	return (
		<span
			onMouseOver={() => sounds.hover.play()}
			onClick={() => sounds.click.play()}
			className={`icon-wrapper ${
				round ? "icon-wrapper--round" : "icon-wrapper--clipper"
			} ${className || ""}`}>
			{round ? Image : <span className="icon-sub">{Image}</span>}
		</span>
	)
}

export default withSound(Icon)
