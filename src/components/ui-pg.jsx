import React, { useEffect, useState } from "react"
import { FrameHexagon } from "@arwes/core"
import anime from "animejs"

const BarUI = ({ id, label, flip, level, levelClass }) => {
	const [bars, setBars] = useState([])

	useEffect(() => {
		const _bars = Array(15)
			.fill(0)
			.map(() => Math.floor(Math.random() * 10) + 15)

		setBars(_bars)
	}, [])

	function animateBars() {
		anime({
			targets: `#${id} .ui__bar`,
			easing: "linear",
			direction: "alternate",
			loop: true,
			height: {
				value: "-=2",
				duration: 50,
				delay: (_, i) => i * 20
			}
		})
	}

	useEffect(() => {
		if (bars.length) animateBars()
	}, [bars])

	return (
		<div
			id={id}
			className={`ui__indicator ${flip ? "flip" : ""} ${levelClass}`}>
			<div className="ui__bars-title">
				{label}: {level}
			</div>
			<div className="ui__bars">
				{bars.map((bar, i) => (
					<div key={i} className="ui__bar" style={{ height: `${bar}px` }} />
				))}
			</div>
		</div>
	)
}

const PgUI = ({ health, stamina, onClick }) => {
	const healthLevelClass = health < 15 ? "danger" : health < 70 ? "warning" : ""
	const staminaLevelClass =
		stamina < 15 ? "danger" : stamina < 70 ? "warning" : ""

	return (
		<FrameHexagon hover onClick={onClick} className="ui__pg">
			<div className="flex">
				<img
					alt=""
					className="ui__avatar"
					src="https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"
				/>
				<div className=" ui__indicators">
					<BarUI
						id="health"
						label="Salute"
						level={health}
						levelClass={healthLevelClass}
					/>
					<div className="line extend" />
					<BarUI
						id="stamina"
						label="Vigore"
						level={stamina}
						levelClass={staminaLevelClass}
						flip
					/>
				</div>
			</div>
		</FrameHexagon>
	)
}

export default PgUI
