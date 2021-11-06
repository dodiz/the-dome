import React from "react"

import Link from "./common/link"

const links = [
	{
		label: "Info",
		to: "/info"
	},
	{
		label: "Accedi",
		to: "/login"
	},
	{
		label: "Privacy",
		to: "/privacy"
	}
]

export default function SplashMenu() {
	return (
		<ul className="list splash-menu">
			{links.map(link => (
				<li key={link.label} className="splash-menu__item">
					<Link className="splash-menu__link" to={link.to}>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	)
}
