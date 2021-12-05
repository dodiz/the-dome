import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import skillService from "../../services/skillService"
import { skillsCategories, stats } from "../../config/skillsData"

import { formatToId } from "../../tools/format"

class SkillsForm extends ManageForm {
	constructor() {
		super()
		this.service = skillService
		this.path = "/land/manage/skills"
	}
	state = {
		id: "",
		skills: [],
		knowledges: [],
		data: {
			label: "",
			description: "",
			stat: "",
			category: "",
			stamina: 0,
			offensive: false,
			toolOnly: false,
			knowledge: false,
			reliance: "",
			relianceLv: 0,
			defense: []
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		category: Joi.string().required(),
		stamina: Joi.number().min(0).required(),
		stat: Joi.string().required(),
		description: Joi.any(),
		offensive: Joi.boolean(),
		toolOnly: Joi.boolean(),
		knowledge: Joi.boolean(),
		reliance: Joi.any(),
		relianceLv: Joi.number(),
		defense: Joi.array()
	})

	mount = async () => {
		try {
			const _skills = await skillService.get()
			const skills = _skills.map(skill => ({
				label: skill.label,
				value: skill._id
			}))
			const knowledges = skills.filter(skill => skill.knowledge)
			this.setState({ knowledges, skills })
		} catch (e) {
			toast.error("Impossibile recuperare le skill")
		}
	}

	handleDefenseSelection = id => {
		const { data } = this.state
		const { defense: _defense } = data
		const defense = [..._defense]
		if (defense.find(d => d === id)) {
			const index = defense.indexOf(id)
			delete defense[index]
		} else defense.push(id)
		this.setState({ data: { ...data, defense } })
	}

	render() {
		const { label, reliance, knowledge, defense } = this.state.data
		const { knowledges, skills } = this.state
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica Skill</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("category", "Categoria", skillsCategories)}
					{this.renderSelect("stat", "Statistica", stats)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderInput("stamina", "Stamina utilizzata", "", "number")}
					{this.renderCheckbox("offensive", "Offensiva")}
					{this.renderCheckbox("toolOnly", "Solo con oggetto")}
					{this.renderCheckbox("knowledge", "Disciplina")}
					{!knowledge &&
						this.renderSelect("reliance", "Dipendenza", knowledges)}
					{reliance &&
						this.renderInput("relianceLv", "Livello minimo", "", "number")}
					<div className="mtb-1">
						<h3>Difesa</h3>
						<div className="flex start wrap">
							{skills.map(skill => (
								<div
									onClick={() => this.handleDefenseSelection(skill.value)}
									className={`p-small m-small label ${
										defense.find(d => d === skill.value) ? "selected" : ""
									}`}>
									{skill.label}
								</div>
							))}
						</div>
					</div>
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default SkillsForm
