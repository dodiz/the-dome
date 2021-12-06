import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "../common/m-form"

import { effectService, skillService } from "../../services/dbService"
import { effectsCategories } from "../../config/categoriesData"

import { formatToId } from "../../tools/format"

class EffectsForm extends ManageForm {
	constructor() {
		super()
		this.service = effectService
		this.path = "/land/manage/effetti"
	}
	state = {
		id: "",
		_skills: [],
		data: {
			label: "",
			description: "",
			category: "",
			skills: [],
			malus: 0,
			staminaLoss: 0,
			healthLoss: 0,
			durationInHours: false,
			duration: 0,
			stopRegeneration: false
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		description: Joi.string().allow(""),
		category: Joi.string().allow(""),
		skills: Joi.array(),
		malus: Joi.number(),
		staminaLoss: Joi.number(),
		healthLoss: Joi.number(),
		durationInHours: Joi.boolean(),
		duration: Joi.number(),
		stopRegeneration: Joi.boolean()
	})

	mount = async () => {
		skillService
			.get()
			.then(_skills => {
				const _knowledges = _skills.filter(skill => skill.knowledge)
				this.setState({ _knowledges, _skills })
			})
			.catch(e => toast.error(e))
	}

	render() {
		const { label, durationInHours, skills } = this.state.data
		const { _skills } = this.state
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica effetto</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderSelect("category", "Categoria", effectsCategories)}
					{this.renderList("Skill affette", _skills, skills, "affected")}
					{this.renderInput("malus", "Malus", "", "number")}
					{this.renderInput("staminaLoss", "Perdita vigore per turno")}
					{this.renderInput("healthLoss", "Perdita danno per turno")}
					{this.renderCheckbox(
						"durationInHours",
						durationInHours ? "Durata in ore" : "Durata in turni"
					)}
					{this.renderInput("duration", "Durata", "", "number")}
					{this.renderCheckbox(
						"stopRegeneration",
						"Impedisci rigenerazione",
						"",
						"number"
					)}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default EffectsForm
