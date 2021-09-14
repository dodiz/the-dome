import React from "react"

import Link from "../common/link"

export default function SplashMenu() {
	return (
		<ul className="list splash-menu">
			<li className="splash-menu__item">
				<Link className="splash-menu__link" to="/info">
					Info
				</Link>
			</li>
			<li className="splash-menu__item">
				<Link className="splash-menu__link" to="/login">
					Accedi
				</Link>
			</li>
			<li className="splash-menu__item">
				<Link className="splash-menu__link" to="/privacy">
					Privacy
				</Link>
			</li>
		</ul>
	)
}
