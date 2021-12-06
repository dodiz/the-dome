import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

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
		skills: [],
		data: {
			label: "",
			description: "",
			stopRegeneration: false,
			category: "",
			staminaLoss: 0,
			damageTaken: 0,
			durationInHours: false,
			duration: 0,
			malus: 0,
			affected: []
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		description: Joi.string().allow(""),
		stopRegeneration: Joi.boolean(),
		category: Joi.string().allow(""),
		staminaLoss: Joi.number(),
		damageTaken: Joi.number(),
		durationInHours: Joi.boolean(),
		duration: Joi.number(),
		malus: Joi.number()
	})

	mount = async () => {
		try {
			const _skills = await skillService.get()
			const skills = _skills.map(skill => ({
				label: skill.label,
				value: skill._id
			}))
			this.setState({ skills })
		} catch (e) {
			toast.error("Impossibile recuperare le skill")
		}
	}

	render() {
		const { label, durationInHours, affected } = this.state.data
		const { skills } = this.state
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica Skill</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderSelect("category", "Categoria", effectsCategories)}
					<div className="mtb-1">
						<h3>Skill affette</h3>
						<div className="flex start wrap">
							{skills.map(skill => (
								<div
									onClick={() =>
										this.handleListSelection("affected", skill.value)
									}
									className={`p-small m-small label ${
										affected.find(d => d === skill.value) ? "selected" : ""
									}`}>
									{skill.label}
								</div>
							))}
						</div>
					</div>
					{this.renderInput("malus", "Malus", "", "number")}
					{this.renderInput("staminaLoss", "Perdita vigore per turno")}
					{this.renderInput("damageTaken", "Perdita danno per turno")}
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
