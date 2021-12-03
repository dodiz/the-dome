import humanImage from "../media/races/humans.jpg"
import mutantImage from "../media/races/mutants.jpg"
import robotImage from "../media/races/robots.jpg"

export const misc = {
	minNameLength: 4,
	maxNameLength: 10,
	maxStatLevel: 5,
	minStatLevel: 1,
	totalStatsLevels: 18,
	totalSkillLevels: 35,
	maxSkillLevel: 10,
	buyableSkills: 15,
	maxSkillLevelOnCreate: 6
}

export const height = {
	max: 200,
	min: 120
}
export const weight = {
	max: 300,
	min: 40
}

export const jobs = [
	{
		_id: "job1",
		label: "Lavoro 1"
	},

	{
		_id: "job2",
		label: "Lavoro 2"
	},
	{
		_id: "job3",
		label: "Lavoro 3"
	},
	{
		_id: "job4",
		label: "Lavoro 4"
	}
]
export const races = [
	{
		_id: "human",
		label: "Umano",
		img: humanImage,
		description: (
			<>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
				dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
				reprehenderit tempora expedita!
			</>
		)
	},
	{
		_id: "mutant",
		label: "Mutante",
		img: mutantImage,
		description: (
			<>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
				dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
				reprehenderit tempora expedita!
			</>
		)
	},
	{
		_id: "robot",
		label: "Robot",
		img: robotImage,
		description: (
			<>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
				dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
				reprehenderit tempora expedita!
			</>
		)
	}
]
export const factions = [
	{
		_id: "faction 1",
		label: "Netturbino",
		img: humanImage,
		description: (
			<>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
				tenetur blanditiis corrupti expedita mollitia dolor iste delectus
				voluptates possimus?
			</>
		)
	},
	{
		_id: "faction 2",
		label: "Sindaco leghista",
		img: mutantImage,
		description: (
			<>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
				tenetur blanditiis corrupti expedita mollitia dolor iste delectus
				voluptates possimus?
			</>
		)
	}
]
