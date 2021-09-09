import React from "react"
import { BleepsProvider } from "@arwes/sounds"
import soundConfig from "../../config/sound.json"

const SOUND_OBJECT_URL = "/sounds/object.mp3"
const SOUND_TYPE_URL = "/sounds/type.mp3"
const SOUND_ASSEMBLE_URL = "/sounds/assemble.mp3"
const SOUND_CLICK_URL = "/sounds/click.mp3"

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
