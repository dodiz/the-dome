import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

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
		skills: [],
		knowledges: [],
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

	mount = async () => {
		try {
			const _skills = await skillService.get()
			const skills = _skills.map(skill => ({
				label: skill.label,
				value: skill._id,
				knowledge: skill.knowledge
			}))
			const knowledges = skills.filter(skill => skill.knowledge)
			console.log(skills)
			this.setState({ knowledges, skills })
		} catch (e) {
			toast.error("Impossibile recuperare le skill")
		}
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
					{this.renderInput("damageMin", "Danno minimo", "", "number")}
					{this.renderInput("damageMax", "Danno massimo", "", "number")}
					{this.renderCheckbox("targetPgs", "Utilizza su personaggi")}
					{this.renderCheckbox("targetAmbience", "Utilizza su ambiente")}
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
									onClick={() =>
										this.handleListSelection("defense", skill.value)
									}
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
