import React from "react"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import { chatService } from "../../services/dbService"
import { factions as factionsList } from "../../config/categoriesData"
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
			location: "",
			description: "",
			notes: "",
			factions: [],
			closed: false
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		location: Joi.string().required(),
		description: Joi.string().allow(""),
		notes: Joi.string().allow(""),
		factions: Joi.array(),
		closed: Joi.boolean()
	})
	render() {
		const { label, factions } = this.state.data
		return (
			<div className="pb-1">
				<h2>Aggiungi / Modifica chat</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("location", "Zona", locations)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderTextarea("notes", "Note")}
					{this.renderCheckbox("closed", "Disabilita chat")}
					<div className="mtb-1">
						<h3>Fazioni abilitate</h3>
						<div className="flex start wrap">
							{factionsList.map(faction => (
								<div
									onClick={() =>
										this.handleListSelection("factions", faction._id)
									}
									className={`p-small m-small label ${
										factions.find(f => f === faction._id) ? "selected" : ""
									}`}>
									{faction.label}
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

export default ChatsForm
