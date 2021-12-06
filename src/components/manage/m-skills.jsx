import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "../common/m-form"

import { skillService } from "../../services/dbService"
import { skillsCategories, stats } from "../../config/categoriesData"

import { formatToId } from "../../tools/format"

class SkillsForm extends ManageForm {
	constructor() {
		super()
		this.service = skillService
		this.path = "/land/manage/skills"
	}
	state = {
		id: "",
		_skills: [],
		_knowledges: [],
		data: {
			label: "",
			description: "",
			stat: "",
			category: "",
			stamina: 0,
			targetPgs: false,
			targetAmbience: false,
			toolOnly: false,
			damageMin: 0,
			damageMax: 0,
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
		description: Joi.string().allow(""),
		targetPgs: Joi.boolean(),
		targetAmbience: Joi.boolean(),
		damageMin: Joi.number(),
		damageMax: Joi.number(),
		toolOnly: Joi.boolean(),
		knowledge: Joi.boolean(),
		reliance: Joi.string().allow(""),
		relianceLv: Joi.number(),
		defense: Joi.array()
	})

	mount = () => {
		skillService
			.get()
			.then(_skills => {
				const _knowledges = _skills.filter(skill => skill.knowledge)
				this.setState({ _knowledges, _skills })
			})
			.catch(e => toast.error(e))
	}

	render() {
		const { label, reliance, knowledge, defense } = this.state.data
		const { _knowledges, _skills } = this.state
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
					{this.renderInput("damageMin", "Danno minimo", "", "number")}
					{this.renderInput("damageMax", "Danno massimo", "", "number")}
					{this.renderCheckbox("targetPgs", "Utilizza su personaggi")}
					{this.renderCheckbox("targetAmbience", "Utilizza su ambiente")}
					{this.renderCheckbox("toolOnly", "Solo con oggetto")}
					{this.renderCheckbox("knowledge", "Disciplina")}
					{!knowledge &&
						this.renderSelect("reliance", "Dipendenza", _knowledges)}
					{reliance &&
						this.renderInput("relianceLv", "Livello minimo", "", "number")}

					{this.renderList("Difesa", _skills, defense, "defense")}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default SkillsForm
