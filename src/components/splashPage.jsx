import React from "react"

import Brand from "./brand"
import FeatureComponent from "./splash/featureComponent"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"

const SplashPage = () => {
	return (
		<div>
			<main className="splash">
				<Brand />
				<Menu />
				<Pegi />
			</main>
			<FeatureComponent />
		</div>
	)
}

export default SplashPage
