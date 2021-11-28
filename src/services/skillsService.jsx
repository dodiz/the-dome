const description =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque facilis ad exercitationem eos suscipit hic ab. Dolorum quibusdam eaque delectus, quos, adipisci libero molestiae in architecto numquam iure, laboriosam vero. Nobis cum, cupiditate id explicabo praesentium repellendus nostrum dicta tempora est? Porro sit dolorum sunt deleniti laborum corrupti quis?"
const skills = [
	{
		_id: "difesa_ravvicinata",
		label: "Difesa ravvicinata",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "difesa_a_distanza",
		label: "Difesa a distanza",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "lotta",
		label: "Lotta",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "armi_da_mischia",
		label: "Armi da mischia",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "armi_da_tiro",
		label: "Armi da fuoco",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "armi_da_fuoco",
		label: "Armi da fuoco",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "esplosivi",
		label: "Esplosivi",
		description,
		category: "skill_combattive",
		stat: "strength"
	},
	{
		_id: "atleticita",
		label: "Atleticità",
		description,
		category: "skill_fisiche",
		stat: "strength"
	},
	{
		_id: "furtivita",
		label: "Atleticità",
		description,
		category: "skill_fisiche",
		stat: "strength"
	},
	{
		_id: "fuga",
		label: "Fuga",
		description,
		category: "skill_fisiche",
		stat: "strength"
	},
	{
		_id: "inseguimento",
		label: "Inseguimento",
		description,
		category: "skill_fisiche",
		stat: "strength"
	},
	{
		_id: "medicina",
		label: "Medicina",
		description,
		category: "skill_culturali",
		stat: "mind"
	},
	{
		_id: "elettronica",
		label: "Elettronica",
		description,
		category: "skill_culturali",
		stat: "mind"
	},
	{
		_id: "meccanica",
		label: "Meccanica",
		description,
		category: "skill_culturali",
		stat: "mind"
	},
	{
		_id: "chimica",
		label: "Chimica",
		description,
		category: "skill_culturali",
		stat: "mind"
	},
	{
		_id: "intimidire",
		label: "Intimidire",
		description,
		category: "skill_sociali",
		stat: "mind"
	},
	{
		_id: "persuasione",
		label: "Persuasione",
		description,
		category: "skill_sociali",
		stat: "mind"
	},
	{
		_id: "mentire",
		label: "Mentire",
		description,
		category: "skill_sociali",
		stat: "mind"
	},
	{
		_id: "autocontrollo",
		label: "Autocontrollo",
		description,
		category: "skill_sociali",
		stat: "mind"
	},
	{
		_id: "percepire_le_interazioni",
		label: "Percepire le interazioni",
		description,
		category: "skill_sociali",
		stat: "mind"
	},
	{
		_id: "camuffarsi",
		label: "Camuffarsi",
		description,
		category: "skill_tecniche",
		stat: "mind"
	},
	{
		_id: "furto",
		label: "Furto",
		description,
		category: "skill_tecniche",
		stat: "mind"
	},
	{
		_id: "contraffazione",
		label: "Contraffazione",
		description,
		category: "skill_tecniche",
		stat: "mind"
	},
	{
		_id: "sesto_senso",
		label: "Sesto senso",
		description,
		category: "skill_tecniche",
		stat: "mind"
	},
	{
		_id: "investigare",
		label: "Investigare",
		description,
		category: "skill_tecniche",
		stat: "mind"
	},
	{
		_id: "guida",
		label: "Guida",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "chirurgia",
		label: "Chirurgia",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "hacking",
		label: "Hacking",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "ingegnere_elettronico",
		label: "Ingegnere Elettronico",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "ingegnere_meccanico",
		label: "Ingegnere Meccanico",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "creazione_armi",
		label: "Creazione armi",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "produttore_di_droga",
		label: "Produttore di droga",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "creazione_di_esplosivi",
		label: "Creazione di esplosivi",
		description,
		category: "skill_pratiche",
		stat: "mind"
	},
	{
		_id: "biotecnologia",
		label: "Biotecnologia",
		description,
		category: "skill_pratiche",
		stat: "mind"
	}
]

export function getAllSkills() {
	return skills
}
