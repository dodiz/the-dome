import {
	getFirestore,
	updateDoc,
	doc,
	getDoc,
	getDocs,
	deleteField,
	setDoc,
	query,
	where,
	deleteDoc,
	collection
} from "firebase/firestore"

const db = getFirestore()

class DbService {
	constructor(docName, categoryLabel = "category") {
		this.docRef = doc(db, "private/" + docName)
		this.categoryLabel = categoryLabel
	}
	getFromCategory = async category => {
		return new Promise(async (resolve, reject) => {
			this.get()
				.then(items => {
					const filtered = items.filter(
						item => item[this.categoryLabel] === category
					)
					resolve(filtered)
				})
				.catch(e =>
					reject(
						"Si è verificato un errore, impossibile recuperare gli elementi"
					)
				)
		})
	}
	getFromId = id => {
		return new Promise(async (resolve, reject) => {
			this.get()
				.then(items => {
					const filtered = items.find(item => item._id === id)
					resolve(filtered)
				})
				.catch(e => reject("Si è verificato un errore"))
		})
	}
	get = async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await getDoc(this.docRef)
				const items = result.data()
				const _items = []
				Object.keys(items).map(key => {
					_items.push({
						_id: key,
						...items[key]
					})
				})
				const sorted = _items.sort((a, b) => (a._id < b._id ? -1 : 1))

				resolve(sorted)
			} catch (e) {
				reject("Si è verificato un errore")
			}
		})
	}
	update = (id, data) => {
		return new Promise((resolve, reject) => {
			updateDoc(this.docRef, { [id]: data })
				.then(() => resolve())
				.catch(ex => reject("Si è verificato un errore con l'aggiornamento"))
		})
	}
	remove = id => {
		return new Promise(async (resolve, reject) => {
			try {
				await updateDoc(this.docRef, {
					[id]: deleteField()
				})
				resolve()
			} catch (e) {
				reject("Si è verificato un errore con l'eliminazione")
			}
		})
	}
}

class DbServiceMultiple {
	constructor(collectionName, categoryLabel = "category") {
		this.collectionRef = collection(db, collectionName)
		this.categoryLabel = categoryLabel
		this.collectionName = collectionName
	}
	getFromCategory = category => {
		return new Promise(async (resolve, reject) => {
			const q = query(
				this.collectionRef,
				where(this.categoryLabel, "==", category)
			)
			try {
				const querySnapshot = await getDocs(q)
				const items = []
				querySnapshot.forEach(doc => items.push({ _id: doc.id, ...doc.data() }))
				resolve(items)
			} catch {
				reject("Si è verificato un errore")
			}
		})
	}
	getFromId = id => {
		return new Promise(async (resolve, reject) => {
			try {
				const data = await getDoc(doc(db, this.collectionName, id))
				resolve(data.data())
			} catch (e) {
				reject("Elemento non trovato")
			}
		})
	}
	get = async () => {
		return new Promise(async (resolve, reject) => {
			const q = query(this.collectionRef)
			try {
				const querySnapshot = await getDocs(q)
				const items = []
				querySnapshot.forEach(doc => items.push({ _id: doc.id, ...doc.data() }))
				resolve(items)
			} catch {
				reject("Si è verificato un errore")
			}
		})
	}

	update(id, data) {
		return new Promise(async (resolve, reject) => {
			try {
				await setDoc(doc(this.collectionRef, id), data)
				resolve()
			} catch (e) {
				reject("Impossibile aggiornare l'elemento")
			}
		})
	}
	remove(id) {
		return new Promise(async (resolve, reject) => {
			try {
				await deleteDoc(doc(db, this.collectionName, id))
				resolve()
			} catch (e) {
				reject("Si è verificato un errore con l'eliminazione")
			}
		})
	}
}

export const skillService = new DbService("skills")
export const powerService = new DbService("powers", "race")
export const effectService = new DbService("effects")
export const shopService = new DbService("items")
export const chatService = new DbServiceMultiple("chats", "location")
