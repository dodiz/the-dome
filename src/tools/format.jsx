export function formatToId(text) {
	return text.replaceAll(" ", "_").replaceAll("à", "a").toLowerCase()
}
