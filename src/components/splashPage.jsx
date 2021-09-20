import React from "react"

import Brand from "./brand"
import FeatureComponent from "./splash/featureComponent"
import Menu from "./splash/menu"
import Pegi from "./splash/pegi"
import Explore from "./splash/explore"
import { Text } from "@arwes/core"

const SplashPage = () => {
	return (
		<div>
			<main className="splash">
				<Brand />
				<Menu />
				<Pegi />
				<Explore />
			</main>
			<a name="explore" />
			<FeatureComponent />
		</div>
	)
}

export default SplashPage
