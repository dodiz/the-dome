import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "../common/m-form"

import {
	powerService,
	skillService,
	effectService
} from "../../services/dbService"
import { powersCategories, stats } from "../../config/categoriesData"

import { formatToId } from "../../tools/format"

class PowersForm extends ManageForm {
	constructor() {
		super()
		this.service = powerService
		this.path = "/land/manage/poteri"
	}
	state = {
		id: "",
		_skills: [],
		_effects: [],
		data: {
			defense: [],
			description: "",
			effect: "",
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
		effect: Joi.string().allow(""),
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
		skillService
			.get()
			.then(_skills => {
				const _knowledges = _skills.filter(skill => skill.knowledge)
				this.setState({ _knowledges, _skills })
			})
			.catch(e => toast.error(e))
		effectService
			.get()
			.then(_effects => {
				this.setState({ _effects })
			})
			.catch(e => toast.error("Nessun effetto presente"))
	}
	render() {
		const { label, defense } = this.state.data
		const { _skills, _effects } = this.state
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
					{this.renderList("Difesa", _skills, defense, "defense")}
					{this.renderSelect("effect", "Effetto", _effects)}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default PowersForm
