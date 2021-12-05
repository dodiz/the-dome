import {
	getFirestore,
	updateDoc,
	doc,
	getDoc,
	deleteField
} from "firebase/firestore"

const db = getFirestore()
const skillsRef = doc(db, "private/skills")

async function getFromCategory(category) {
	return new Promise(async (resolve, reject) => {
		get()
			.then(skills => {
				const filtered = skills.filter(skill => skill.category === category)
				resolve(filtered)
			})
			.catch(e => reject(e))
	})
}
function getFromId(id) {
	return new Promise(async (resolve, reject) => {
		get()
			.then(skills => {
				const filtered = skills.find(skill => skill._id === id)
				resolve(filtered)
			})
			.catch(e => reject(e))
	})
}
function get() {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await getDoc(skillsRef)
			const skills = result.data()
			const _skills = []
			Object.keys(skills).map(key => {
				_skills.push({
					_id: key,
					...skills[key]
				})
			})

			resolve(_skills)
		} catch (e) {
			reject("Si è verificato un errore")
		}
	})
}
function update(id, data) {
	return new Promise((resolve, reject) => {
		updateDoc(skillsRef, { [id]: data })
			.then(() => resolve())
			.catch(ex => reject(ex))
	})
}
async function remove(id) {
	return updateDoc(skillsRef, {
		[id]: deleteField()
	})
}
const skillService = {
	getFromCategory,
	get,
	getFromId,
	update,
	remove
}

export default skillService
