import {
	getFirestore,
	updateDoc,
	doc,
	getDoc,
	setDoc,
	deleteField
} from "firebase/firestore"

const db = getFirestore()
const docRef = doc(db, "private/powers")
const categoryLabel = "race"

async function getFromCategory(category) {
	return new Promise(async (resolve, reject) => {
		get()
			.then(items => {
				const filtered = items.filter(item => item[categoryLabel] === category)
				resolve(filtered)
			})
			.catch(e => reject(e))
	})
}
function getFromId(id) {
	return new Promise(async (resolve, reject) => {
		get()
			.then(items => {
				const filtered = items.find(item => item._id === id)
				resolve(filtered)
			})
			.catch(e => reject(e))
	})
}
function get() {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await getDoc(docRef)
			const items = result.data()
			const _items = []
			Object.keys(items).map(key => {
				_items.push({
					_id: key,
					...items[key]
				})
			})

			resolve(_items)
		} catch (e) {
			reject("Si è verificato un errore")
		}
	})
}
function update(id, data) {
	return new Promise((resolve, reject) => {
		updateDoc(docRef, { [id]: data })
			.then(() => resolve())
			.catch(ex => reject(ex))
	})
}
async function remove(id) {
	return updateDoc(docRef, {
		[id]: deleteField()
	})
}

const powerService = {
	getFromCategory,
	get,
	getFromId,
	update,
	remove
}

export default powerService
