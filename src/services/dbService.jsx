import {
	getFirestore,
	updateDoc,
	doc,
	getDoc,
	deleteField
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
				.catch(e => reject(e))
		})
	}
	getFromId = id => {
		return new Promise(async (resolve, reject) => {
			this.get()
				.then(items => {
					const filtered = items.find(item => item._id === id)
					resolve(filtered)
				})
				.catch(e => reject(e))
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
	update = async (id, data) => {
		return new Promise((resolve, reject) => {
			updateDoc(this.docRef, { [id]: data })
				.then(() => resolve())
				.catch(ex => reject(ex))
		})
	}
	remove = async id => {
		return updateDoc(this.docRef, {
			[id]: deleteField()
		})
	}
}

export const skillService = new DbService("skills", "category")
export const powerService = new DbService("powers", "race")
export const shopService = new DbService("items", "category")
