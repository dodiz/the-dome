import { toast } from "react-toastify"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

async function signUp(username, email, password) {
	const auth = getAuth()
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			toast.success("Welcome to the dome")
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message
			// ..
		})
}

async function login(email, password) {
	return {
		displayName: email
	}
}

export default {
	login
}
