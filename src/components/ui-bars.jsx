import React from "react"

const BarsUI = ({ secondary, title }) => {
	const bars = Array(10)
		.fill(0)
		.map(() => Math.floor(Math.random() * 6) + 5)

	return (
		<div className={`ui__health ${secondary ? "ui__health--secondary" : ""}`}>
			{bars.map(bar => (
				<div className="ui__bar" style={{ height: `${bar * 4}px` }} />
			))}
		</div>
	)
}

export default BarsUI
