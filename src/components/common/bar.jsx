import React from "react"
import withSound from "../../hoc/withSound"

const Bar = ({ onSelect, length, value, sounds, width = 100 }) => {
	function handleSelect(index) {
		sounds.click.play()
		onSelect(index)
	}

	return (
		<div className="bar" style={{ width: `${width}px` }}>
			{Array(length)
				.fill()
				.map((_, index) => (
					<div
						style={{ width: `${width / length}%` }}
						key={index}
						className={`bar__q ${onSelect ? "hover" : ""} ${
							index < value ? "active" : ""
						}`}
						onClick={() => onSelect && handleSelect(index + 1)}
					/>
				))}
		</div>
	)
}

export default withSound(Bar)
