import React from "react"
import { BleepsProvider } from "@arwes/sounds"
import soundConfig from "../../config/sound.json"

const SoundProvider = ({ children }) => {
	return (
		<BleepsProvider
			audioSettings={soundConfig.common}
			playersSettings={soundConfig.players}
			bleepsSettings={soundConfig.bleeps}>
			{children}
		</BleepsProvider>
	)
}

export default SoundProvider
