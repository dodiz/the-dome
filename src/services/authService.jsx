import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification
} from "firebase/auth"

function signup(username, email, password) {
	const auth = getAuth()
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async userCredential => {
				try {
					await sendEmailVerification(userCredential.user)
					resolve()
				} catch (e) {
					reject(e.message)
				}
			})
			.catch(e => {
				if (e.code === "auth/email-already-in-use")
					reject("La mail selezionata è già in uso")
				else reject(e.message)
			})
	})
}

function authListener(cb) {
	const auth = getAuth()
	return onAuthStateChanged(auth, cb)
}

async function login(email, password) {
	return {
		displayName: email
	}
}

export default {
	signup,
	login,
	authListener
}
