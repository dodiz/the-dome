import React from "react"

const Icon = ({ src, alt, className }) => {
	return (
		<span className={`icon-wrapper ${className || ""}`}>
			<span className="icon-clipper">
				<img className="icon" src={src} alt={alt} />
			</span>
		</span>
	)
}

export default Icon
