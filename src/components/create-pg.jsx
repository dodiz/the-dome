import React from "react"
import { Text, Card, Button } from "@arwes/core"
import { toast } from "react-toastify"
import Joi from "../classes/joi"

import Form from "./common/form"
import Bar from "./common/bar"
import Modal from "./common/modal"

import { skillService, powerService } from "../services/dbService"

import { jobs, misc, height, weight } from "../config/gdrData"

import {
	bonuses,
	maluses,
	skillsCategories,
	stats,
	races,
	factions
} from "../config/categoriesData"

import "../css/create.css"

const step1 = ["first", "last", "gender", "born", "job"]
const step2 = ["height", "weight", "eyesColor", "hairColor"]

class CreatePg extends Form {
	state = {
		modalInfo: null,
		skills: [],
		powers: [],
		currentStep: 1,
		steps: 7,
		data: {
			first: "",
			last: "",
			born: "",
			gender: "male",
			job: jobs[0]._id,
			height: 0,
			weight: 0,
			eyesColor: "",
			hairColor: "",
			race: "",
			faction: "",
			strength: 1,
			agility: 1,
			endurance: 1,
			mind: 1,
			charisma: 1,
			handcraft: 1,
			statPoints: 6,
			skillPoints: 0,
			bonus: null,
			malus: null
		},
		errors: {
			statPoints: "//"
		}
	}

	schema = Joi.object({
		first: Joi.string()
			.min(misc.minNameLength)
			.max(misc.maxNameLength)
			.required(),
		last: Joi.string()
			.min(misc.minNameLength)
			.max(misc.maxNameLength)
			.required(),
		born: Joi.date().required(),
		gender: Joi.any(),
		height: Joi.number().min(height.min).max(height.max).required(),
		weight: Joi.number().min(weight.min).max(weight.max).required(),
		eyesColor: Joi.string().required(),
		hairColor: Joi.string().required(),
		job: Joi.any().required(),
		race: Joi.string().required(),
		faction: Joi.string().required(),
		statPoints: Joi.number()
			.min(misc.totalStatsLevels)
			.max(misc.totalStatsLevels),
		skillPoints: Joi.number()
			.min(misc.totalSkillLevels)
			.max(misc.totalSkillLevels),
		bonus: Joi.object(),
		malus: Joi.object()
	})

	handleStatSelect = (value, name) => {
		const data = { ...this.state.data }
		data[name] = value
		data.statPoints = stats.reduce((p, stat) => p + data[stat._id], 0)

		const target = {
			name: "statPoints",
			value: data.statPoints
		}

		const errors = this.handleError(target)

		this.setState({ data, errors })
	}

	handleSkillError = value => {
		if (value > misc.maxSkillLevelOnCreate)
			return "Non può superare il livello " + misc.maxSkillLevelOnCreate
		const { skills, powers } = this.state
		const selectedSkills = skills.filter(skill => skill.value > 0).length
		const selectedPowers = powers.filter(skill => skill.value > 0).length

		if (selectedSkills + selectedPowers > misc.buyableSkills - 1 && value !== 0)
			return "Non puoi selezionare più 15 tra abilità e poteri"
		return ""
	}

	handleSkillSelect = (id, value, name) => {
		const items = [...this.state[name]]
		const item = items.find(_item => _item._id === id)

		const error = this.handleSkillError(value)
		if (error) {
			toast.error(error)
			return
		}

		const index = items.indexOf(item)
		const _value = items[index].value || 0

		const data = { ...this.state.data }

		data.skillPoints += value - _value
		items[index].value = value

		const target = {
			name: "skillPoints",
			value: data.skillPoints
		}
		const errors = this.handleError(target)

		this.setState({ [name]: items, data, errors })
	}
	handlePerkSelect = (perk, name) => {
		const data = { ...this.state.data }
		data[name] = perk
		this.setState({ data })
	}
	showInfo = info => {
		const modalInfo = info ? { ...info } : null
		this.setState({ modalInfo })
	}
	loadSkills = async () => {
		const skills = await skillService.get()
		this.setState({ skills })
	}
	loadPowers = race => {
		const powers = powerService.getFromCategory(race)
		this.setState({ powers })
	}
	componentDidMount() {
		this.loadSkills()
	}

	doSubmit = () => {
		toast.error("funzione non disponibile")
	}

	render() {
		const { statPoints, skillPoints, bonus, malus } = this.state.data
		const { modalInfo, skills, powers } = this.state

		return (
			<div className="form-full arwes-custom">
				{modalInfo && (
					<Modal
						show
						title={modalInfo.label}
						onHide={() => this.showInfo(null)}>
						{modalInfo.stat ? (
							<div className="mtb-1">
								<em>Statistica di riferimento: </em>
								{stats.find(stat => modalInfo.stat === stat._id).label}
							</div>
						) : null}
						{modalInfo.description}
					</Modal>
				)}
				<div className="form-box">
					<this.RenderStep step={1} fields={step1}>
						<Text as="h2" className="m-auto">
							Crea il tuo personaggio
						</Text>
						<Text as="div" className="mb-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
							explicabo praesentium sapiente laboriosam nemo fuga porro amet
							natus totam recusandae temporibus fugit velit, est ipsa ratione ab
							vitae nostrum nobis voluptates, culpa debitis repudiandae. Dolor,
							libero. Illum repudiandae dolore consequuntur voluptas aspernatur.
							Atque sapiente corrupti distinctio provident tenetur eum aliquam?
						</Text>
						{this.renderInput("first", "Nome", "Nome del tuo personaggio")}
						{this.renderInput("last", "Cognome", "Cognome del tuo personaggio")}
						{this.renderSelect("gender", "Sesso", [
							{ _id: "male", label: "Maschio" },
							{ _id: "female", label: "Femmina" }
						])}
						{this.renderInput("born", "Data di nascita", "", "date")}
						{this.renderSelect("job", "Occupazione", jobs)}
					</this.RenderStep>
					<this.RenderStep step={2} fields={step2}>
						<Text as="h2" className="m-auto">
							Fisionomia
						</Text>
						{this.renderInput(
							"height",
							"Altezza (cm)",
							"Altezza in centimetri"
						)}
						{this.renderInput("weight", "Peso (Kg)", "Peso in kilogrammi")}
						{this.renderInput("eyesColor", "Colore occhi")}
						{this.renderInput("hairColor", "Colore capelli")}
					</this.RenderStep>
					<this.RenderStep step={3} fields={["race"]}>
						<Text as="h2" className="m-auto">
							Scegli una razza
						</Text>
						<section className="flex cards">
							{races.map(race => (
								<Card
									className={`card ${
										race._id === this.state.data.race && "active"
									}`}
									key={race._id}
									image={{ src: race.img }}
									title={<h2 className="h2">{race.label}</h2>}
									options={
										<Button
											className="card__button"
											onClick={() => {
												this.handleChange({
													target: { name: "race", value: race._id }
												})
												this.loadPowers(race._id)
											}}
											palette="secondary">
											<Text>Seleziona</Text>
										</Button>
									}>
									<Text>{race.description}</Text>
								</Card>
							))}
						</section>
					</this.RenderStep>
					<this.RenderStep step={4} fields={["faction"]}>
						<section className="flex cards">
							{factions.map((faction, i) => (
								<Card
									className={`card ${
										faction._id === this.state.data.faction && "active"
									}`}
									key={faction._id}
									image={{ src: faction.img }}
									title={<h2 className="h2">{faction.label}</h2>}
									options={
										<Button
											className="card__button"
											onClick={() =>
												this.handleChange({
													target: { name: "faction", value: faction._id }
												})
											}
											palette="secondary">
											<Text>Seleziona</Text>
										</Button>
									}>
									<Text>{faction.description}</Text>
								</Card>
							))}
						</section>
					</this.RenderStep>
					<this.RenderStep step={5} fields={["statPoints"]}>
						<Text as="h2" className="m-auto">
							Statistiche
						</Text>
						<Text as="div" className="mb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
							explicabo praesentium sapiente laboriosam nemo fuga porro amet
							natus totam recusandae temporibus fugit velit,. Atque sapiente
							corrupti distinctio provident tenetur eum aliquam? + avvertenza
						</Text>
						<em>
							Punti distribuiti: {statPoints} / {misc.totalStatsLevels}
						</em>
						<div className="grid mbt-2 stats-grid">
							{stats.map(stat => (
								<div key={stat._id}>
									<div>
										{stat.label} {this.state.data[stat._id]}
									</div>
									<Bar
										width={200}
										length={misc.maxStatLevel}
										value={this.state.data[stat._id]}
										onSelect={v => this.handleStatSelect(v, stat._id)}
									/>
								</div>
							))}
						</div>
					</this.RenderStep>
					<this.RenderStep step={6} fields={["skillPoints"]}>
						<Text as="h2" className="m-auto">
							Abilità
						</Text>
						<Text as="div" className="mb-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
							explicabo praesentium sapiente laboriosam nemo fuga porro amet
							natus totam recusandae temporibus fugit velit, est ipsa ratione ab
							vitae nostrum nobis voluptates, culpa debitis repudiandae. Dolor,
							libero. Illum repudiandae dolore consequuntur voluptas aspernatur.
							Atque sapiente corrupti distinctio provident tenetur eum aliquam?
						</Text>
						<em>
							Punti distribuiti: {skillPoints} / {misc.totalSkillLevels}
						</em>
						<div className="mt-1 grid skills-grid">
							{skillsCategories.map(category => (
								<div className="p-1 arwes-custom nobg" key={category._id}>
									<h4>{category.label}</h4>
									{skills
										.filter(skill => skill.category === category._id)
										.map(skill => (
											<div key={skill._id} className="mb-1">
												<div
													className="link"
													onClick={() => this.showInfo(skill)}>
													{skill.label}
												</div>
												<div className="flex">
													<Bar
														onSelect={v =>
															this.handleSkillSelect(skill._id, v, "skills")
														}
														length={misc.maxSkillLevel}
														width={150}
														value={skill.value || 0}
													/>
													<div
														className="link secondary"
														onClick={() =>
															this.handleSkillSelect(skill._id, 0, "skills")
														}>
														Reset
													</div>
												</div>
											</div>
										))}
								</div>
							))}
						</div>
						{powers.length ? (
							<div className="mt-1 p-1 arwes-custom nobg">
								<h4>
									Poteri{" "}
									{races.find(race => race._id === this.state.data.race).label}
								</h4>
								{powers.map(power => (
									<div key={power._id} className="mb-1">
										<div className="link" onClick={() => this.showInfo(power)}>
											{power.label}
										</div>
										<div className="flex">
											<Bar
												onSelect={v =>
													this.handleSkillSelect(power._id, v, "powers")
												}
												length={misc.maxSkillLevel}
												width={150}
												value={power.value || 0}
											/>
											<div
												className="link secondary"
												onClick={() =>
													this.handleSkillSelect(power._id, 0, "powers")
												}>
												Reset
											</div>
										</div>
									</div>
								))}
							</div>
						) : null}

						<div className="mt-1">
							<em>
								Punti distribuiti: {skillPoints} / {misc.totalSkillLevels}
							</em>
						</div>
					</this.RenderStep>
					<this.RenderStep step={7} fields={[]}>
						<Text as="h2" className="m-auto">
							Perks
						</Text>
						<Text as="div" className="mb-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
							explicabo praesentium sapiente laboriosam nemo fuga porro amet
							natus totam recusandae temporibus fugit velit, est ipsa ratione ab
							vitae nostrum nobis voluptates, culpa debitis repudiandae. Dolor,
							libero. Illum repudiandae dolore consequuntur voluptas aspernatur.
							Atque sapiente corrupti distinctio provident tenetur eum aliquam?
						</Text>
						<div className="mt-1 perks-grid grid">
							<div>
								{bonuses.map(_bonus => (
									<div
										key={_bonus._id}
										className={`mb-1 p-1 arwes-custom flex nobg ${
											_bonus === bonus ? "secondary" : ""
										}`}>
										<div className="link" onClick={() => this.showInfo(_bonus)}>
											{_bonus.label}
										</div>
										<div
											className="link secondary"
											onClick={() => this.handlePerkSelect(_bonus, "bonus")}>
											Seleziona
										</div>
									</div>
								))}
							</div>
							<div>
								{maluses.map(_malus => (
									<div
										key={_malus._id}
										className={`mb-1 p-1 arwes-custom flex nobg ${
											_malus === malus ? "secondary" : ""
										}`}>
										<div className="link" onClick={() => this.showInfo(_malus)}>
											{_malus.label}
										</div>
										<div
											className="link secondary"
											onClick={() => this.handlePerkSelect(_malus, "malus")}>
											Seleziona
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="mt-1">{this.renderButton("Invia richiesta")}</div>
					</this.RenderStep>
				</div>
			</div>
		)
	}
}

export default CreatePg
