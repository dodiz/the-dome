import React from "react"

const Icon = ({ src, alt, round, className, children }) => {
	return (
		<span
			className={`icon-wrapper ${
				round ? "icon-wrapper--round" : "icon-wrapper--clipper"
			} ${className || ""}`}>
			{round ? (
				children || <img className="icon" src={src} alt={alt} />
			) : (
				<span className="icon-sub">
					{children || <img className="icon" src={src} alt={alt} />}
				</span>
			)}
		</span>
	)
}

export default Icon
