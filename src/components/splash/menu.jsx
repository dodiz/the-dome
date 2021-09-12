import React from "react"

import Link from "../common/link"

export default function SplashMenu() {
	return (
		<div className="splash-menu">
			<Link className="splash-menu__link" to={"/info"}>
				Info
			</Link>
			<em className="splash-menu__link-line" />
			<Link className="splash-menu__link" to={"/login"}>
				Accedi
			</Link>
			<em className="splash-menu__link-line" />
			<Link className="splash-menu__link" to={"/privacy"}>
				Privacy
			</Link>
		</div>
	)
}
