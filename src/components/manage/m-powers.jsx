import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import { skillService, powerService } from "../../services/dbService"
import { powersCategories, stats } from "../../config/categoriesData"

import { formatToId } from "../../tools/format"
class SkillsForm extends ManageForm {
	constructor() {
		super()
		this.service = powerService
		this.path = "/land/manage/poteri"
	}
	state = {
		id: "",
		skills: [],
		data: {
			defense: [],
			description: "",
			label: "",
			maxDamage: 0,
			minDamage: 0,
			race: "",
			stamina: 0,
			stat: "",
			targetAmbience: false,
			targetPgs: false
		},
		errors: {}
	}

	schema = Joi.object({
		defense: Joi.array(),
		description: Joi.any(),
		label: Joi.string().required(),
		maxDamage: Joi.number(),
		minDamage: Joi.number(),
		race: Joi.string().required(),
		stamina: Joi.number().min(0).required(),
		stat: Joi.string().required(),
		targetAmbience: Joi.boolean(),
		targetPgs: Joi.boolean()
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
		const { label, defense } = this.state.data
		const { skills } = this.state
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica Skill</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("race", "Categoria", powersCategories)}
					{this.renderSelect("stat", "Statistica", stats)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderInput("stamina", "Stamina utilizzata", "", "number")}
					{this.renderInput("minDamage", "Danno minimo", "", "number")}
					{this.renderInput("maxDamage", "Danno massimo", "", "number")}
					{this.renderCheckbox("targetPgs", "Utilizza su personaggi")}
					{this.renderCheckbox("targetAmbience", "Utilizza su ambiente")}
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
