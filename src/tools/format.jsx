export function formatToId(text) {
	return text
		.replaceAll(" ", "_")
		.replaceAll("à", "a")
		.replaceAll("è", "e")
		.replaceAll("ì", "i")
		.replaceAll("ò", "o")
		.replaceAll("ù", "u")
		.replaceAll("é", "e")
		.replaceAll("'", "_")
		.toLowerCase()
}
