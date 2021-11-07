import { toast } from "react-toastify"

import { auth } from "../fire"

async function signUp(username, email, password) {
	try {
		throw new Error("Non è possibile registrarsi")
	} catch (e) {
		console.log(e)
		toast.error(e)
	}
}

async function login(email, password) {
	return {
		displayName: email
	}
}

export default {
	signUp,
	login
}
