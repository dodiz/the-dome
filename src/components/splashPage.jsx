import React from "react"

import Brand from "./brand"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"

const SplashPage = () => {
	return (
		<main className="main">
			<Brand />
			<Menu />
			<Pegi />
		</main>
	)
}

export default SplashPage