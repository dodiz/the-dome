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
		this.isNew = true
		this.path = "/land/manage/skills"
	}
	state = {
		id: "",
		data: {
			label: "",
			description: "",
			stat: "",
			category: "",
			offensive: false,
			toolOnly: false
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		description: Joi.any(),
		stat: Joi.string().required(),
		category: Joi.string().required()
	})

	render() {
		const { label } = this.state.data
		return (
			<div>
				<h2>{this.isNew ? "Nuova Chat" : `Modifica ${label}`}</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("category", "Categoria", skillsCategories)}
					{this.renderSelect("stat", "Statistica", stats)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderCheckbox("offensive", "Offensiva")}
					{this.renderCheckbox("toolOnly", "Solo con oggetto")}
					{this.renderButton(this.isNew ? "Aggiungi" : "Modifica")}
				</form>
			</div>
		)
	}
}

export default SkillsForm
