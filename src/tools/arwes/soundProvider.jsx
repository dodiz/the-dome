import React from "react"
import { BleepsProvider } from "@arwes/sounds"

const SOUND_OBJECT_URL = "/sounds/object.mp3"
const SOUND_TYPE_URL = "/sounds/type.mp3"
const SOUND_ASSEMBLE_URL = "/sounds/assemble.mp3"
const SOUND_CLICK_URL = "/sounds/click.mp3"

const audioSettings = { common: { volume: 0.5 } }

const playersSettings = {
	object: { src: [SOUND_OBJECT_URL] },
	assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
	type: { src: [SOUND_TYPE_URL], loop: true },
	click: { src: [SOUND_CLICK_URL] }
}
const bleepsSettings = {
	assemble: { player: "assemble" },
	type: { player: "type" },
	click: { player: "click" }
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
