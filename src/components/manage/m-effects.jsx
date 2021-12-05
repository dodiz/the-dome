import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import { effectService } from "../../services/dbService"

import { formatToId } from "../../tools/format"

class EffectsForm extends ManageForm {
	constructor() {
		super()
		this.service = effectService
		this.path = "/land/manage/effetti"
	}
	state = {
		id: "",
		data: {
			label: "",
			description: ""
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		description: Joi.string().allow("")
	})

	render() {
		const { label } = this.state.data
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica Skill</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default EffectsForm
