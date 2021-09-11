import React, { useState } from "react"
import { Text } from "@arwes/core"

export default function SplashMenu() {
	return (
		<div class="splash-menu">
			<Text className="link splash-menu__link">Info</Text>
			<Text className="link splash-menu__link">Accedi</Text>
			<Text className="link splash-menu__link">Privacy</Text>
		</div>
	)
}
