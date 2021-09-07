import React from "react"
import { BleepsProvider } from "@arwes/sounds"

const SOUND_OBJECT_URL = "/sounds/object.mp3"
const SOUND_TYPE_URL = "/sounds/type.mp3"
const audioSettings = { common: { volume: 0.25 } }
const playersSettings = {
	object: { src: [SOUND_OBJECT_URL] },
	type: { src: [SOUND_TYPE_URL], loop: true }
}
const bleepsSettings = {
	object: { player: "object" },
	type: { player: "type" }
}

const SoundProvider = ({ children }) => {
	return (
		<BleepsProvider
			audioSettings={audioSettings}
			playersSettings={playersSettings}
			bleepsSettings={bleepsSettings}>
			{children}
		</BleepsProvider>
	)
}

export default SoundProvider
