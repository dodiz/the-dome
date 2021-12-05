import {
	getFirestore,
	setDoc,
	doc,
	getDoc,
	query,
	where,
	getDocs,
	deleteDoc,
	collection
} from "firebase/firestore"

const db = getFirestore()
const chatsPath = "chats"
const chatsRef = collection(db, chatsPath)

function update(id, data) {
	return setDoc(doc(chatsRef, id), data)
}
function getFromId(id) {
	return new Promise(async (resolve, reject) => {
		try {
			const chat = await getDoc(doc(db, chatsPath, id))
			resolve(chat.data())
		} catch (e) {
			reject("Chat non trovata")
		}
	})
}
async function getFromCategory(id) {
	const q = query(chatsRef, where("location", "==", id))
	const querySnapshot = await getDocs(q)
	const _chats = []
	querySnapshot.forEach(doc => _chats.push({ _id: doc.id, ...doc.data() }))
	return _chats
}

async function remove(id) {
	return deleteDoc(doc(db, chatsPath, id))
}

const chatService = {
	update,
	getFromCategory,
	getFromId,
	remove
}

export default chatService
