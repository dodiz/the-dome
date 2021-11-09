import {
	applyActionCode,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	verifyPasswordResetCode,
	confirmPasswordReset
} from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"

const db = getFirestore()

function addUserToFirestore(id, email, username) {
	setDoc(doc(db, "users", id), {
		email,
		username,
		date: new Date(Date.now())
	})
}

export function signup(username, email, password) {
	const auth = getAuth()
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async userCredential => {
				try {
					await updateProfile(userCredential.user, {
						displayName: username
					})
					await sendEmailVerification(userCredential.user)
					await addUserToFirestore(userCredential.user.uid, email, username)
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
export function verifyEmail(code) {
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
export function sendPasswordReset(email) {
	const auth = getAuth()
	return sendPasswordResetEmail(auth, email)
}
export function authListener(cb) {
	const auth = getAuth()
	return onAuthStateChanged(auth, cb)
}
export async function login(email, password) {
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
export function logout() {
	const auth = getAuth()
	return signOut(auth)
}
export function resetPassword(code, newPassword) {
	const auth = getAuth()
	return new Promise((resolve, reject) => {
		verifyPasswordResetCode(auth, code)
			.then(() => {
				confirmPasswordReset(auth, code, newPassword)
					.then(() => resolve())
					.catch(() =>
						reject(
							"Errore generico, ripeti la procedura di reimpostazione password"
						)
					)
			})
			.catch(() =>
				reject("Il codice indicato non è valido, ripeti la procedura")
			)
	})
}
