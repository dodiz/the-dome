import React from "react"

import Link from "../common/link"

export default function SplashMenu() {
	return (
		<div className="splash-menu">
			<Link to={"/info"}>Info</Link>
			<Link to={"/login"}>Accedi</Link>
			<Link to={"/privacy"}>Privacy</Link>
		</div>
	)
}
