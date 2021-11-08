import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	applyActionCode,
	signInWithEmailAndPassword,
	signOut
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
function verifyEmail(code) {
	return new Promise((resolve, reject) => {
		const auth = getAuth()
		applyActionCode(auth, code)
			.then(() => {
				resolve()
			})
			.catch(e => {
				if (e.code === "auth/invalid-action-code")
					reject("Il codice inserito non è valido")
				else reject(e.message)
			})
	})
}
function authListener(cb) {
	const auth = getAuth()
	return onAuthStateChanged(auth, cb)
}

async function login(email, password) {
	return new Promise((resolve, reject) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				resolve()
			})
			.catch(e => {
				reject(e.message)
			})
	})
}

function logout() {
	const auth = getAuth()
	return signOut(auth)
}

export default {
	signup,
	login,
	logout,
	authListener,
	verifyEmail
}
