const description =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque facilis ad exercitationem eos suscipit hic ab. Dolorum quibusdam eaque delectus, quos, adipisci libero molestiae in architecto numquam iure, laboriosam vero. Nobis cum, cupiditate id explicabo praesentium repellendus nostrum dicta tempora est? Porro sit dolorum sunt deleniti laborum corrupti quis?"
const powers = [
	{
		_id: "sputo_acido",
		label: "Sputo acido",
		description,
		stat: "strength",
		race: "mutant"
	},
	{
		_id: "super_salto",
		label: "Super salto",
		description,
		stat: "agility",
		race: "mutant"
	},
	{
		_id: "urlo_sonico",
		label: "Urlo sonico",
		description,
		stat: "strength",
		race: "mutant"
	},
	{
		_id: "emp",
		label: "EMP",
		description,
		stat: "strength",
		race: "robot"
	},
	{
		_id: "riparazione",
		label: "Riparazione",
		description,
		stat: "strength",
		race: "robot"
	},
	{
		_id: "Riconoscimeto",
		label: "riconoscimento",
		description,
		stat: "strength",
		race: "robot"
	}
]

export function getPowers(race) {
	return powers.filter(power => power.race === race)
}
