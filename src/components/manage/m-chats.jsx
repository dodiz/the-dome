import React from "react"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import chatService from "../../services/chatService"
import { locations } from "../../config/locationsData"
import { formatToId } from "../../tools/format"

class ChatsForm extends ManageForm {
	constructor() {
		super()
		this.service = chatService
		this.path = "/land/manage/chats"
	}

	state = {
		id: "",
		data: {
			label: "",
			description: "",
			closed: false,
			location: ""
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		location: Joi.string(),
		description: Joi.any(),
		closed: Joi.boolean()
	})

	render() {
		const { label } = this.state.data
		return (
			<div className="pb-1">
				<h2>Aggiungi / Modifica chat</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("location", "Zona", locations)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderCheckbox("closed", "Disabilita chat")}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default ChatsForm
