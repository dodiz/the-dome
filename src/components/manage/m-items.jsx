import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "./m-form"

import { skillService, shopService } from "../../services/dbService"
import { shopCategories, stats } from "../../config/categoriesData"

import { formatToId } from "../../tools/format"
class ShopForm extends ManageForm {
	constructor() {
		super()
		this.service = shopService
		this.path = "/land/manage/mercato"
	}
	state = {
		id: "",
		skills: [],
		data: {
			label: "",
			description: "",
			stat: "",
			race: "",
			stamina: 0,
			offensive: false,
			defense: []
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		race: Joi.string().required(),
		stamina: Joi.number().min(0).required(),
		stat: Joi.string().required(),
		description: Joi.any(),
		offensive: Joi.boolean(),
		defense: Joi.array()
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

	handleDefenseSelection = id => {
		const { data } = this.state
		const { defense: _defense } = data
		const defense = [..._defense]
		if (defense.find(d => d === id)) {
			const index = defense.indexOf(id)
			delete defense[index]
		} else defense.push(id)
		this.setState({ data: { ...data, defense } })
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
					{this.renderSelect("race", "Categoria", shopCategories)}
					{this.renderSelect("stat", "Statistica", stats)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderInput("stamina", "Stamina utilizzata", "", "number")}
					{this.renderCheckbox("offensive", "Offensiva")}
					<div className="mtb-1">
						<h3>Difesa</h3>
						<div className="flex start wrap">
							{skills.map(skill => (
								<div
									onClick={() => this.handleDefenseSelection(skill.value)}
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

export default ShopForm
