import React from "react"
import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import ManageForm from "../common/m-form"

import { shopService, skillService } from "../../services/dbService"
import {
	shopCategories,
	markets as marketsList
} from "../../config/categoriesData"

import { formatToId } from "../../tools/format"

class ShopForm extends ManageForm {
	constructor() {
		super()
		this.service = shopService
		this.path = "/land/manage/mercato"
	}
	state = {
		id: "",
		_skills: [],
		_items: [],
		data: {
			label: "",
			description: "",
			category: "",
			markets: [],
			prices: [],
			duration: 0,
			skills: [],
			uses: 0,
			canCraft: [],
			canRepair: [],
			effect: "",
			stamina: 0,
			cd: 0
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		description: Joi.string().allow(""),
		category: Joi.string().required(),
		markets: Joi.array(),
		prices: Joi.array(),
		duration: Joi.number(),
		skills: Joi.array(),
		uses: Joi.number(),
		canCraft: Joi.array(),
		canRepair: Joi.array(),
		effect: Joi.string().allow(""),
		stamina: Joi.number(),
		cd: Joi.number()
	})

	mount = async () => {
		skillService
			.get()
			.then(_skills => {
				const _knowledges = _skills.filter(skill => skill.knowledge)
				this.setState({ _knowledges, _skills })
			})
			.catch(e => toast.error(e))
		shopService
			.get()
			.then(_items => {
				this.setState({ _items })
			})
			.catch(e => toast.error(e))
	}
	render() {
		const { label, skills, category, canCraft, canRepair, markets } =
			this.state.data
		const { _skills, _items } = this.state
		return (
			<div className="pb-2">
				<h2>Aggiungi / modifica oggetto</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderSelect("category", "Categoria", shopCategories)}
					{this.renderList(
						"Mercato per fazioni (seleziona tutti per bazar)",
						marketsList,
						markets,
						"markets"
					)}
					{markets.map((_, i) =>
						this.renderInput(
							"price" + marketsList[i]._id,
							"Prezzo " + marketsList[i].value,
							"",
							"number"
						)
					)}
					{this.renderInput(
						"duration",
						"Durata in settimane (Zero per illimitata)"
					)}
					{this.renderInput("uses", "Usi (Zero per illimitati)", "", "number")}
					{category === "kit" ? (
						<>
							{this.renderInput("cd", "Soglia (CD)", "", "number")}
							{this.renderList(
								"Il kit può riparare",
								_items,
								canRepair,
								"canRepair"
							)}
							{this.renderList(
								"Il kit può craftare",
								_items,
								canCraft,
								"canCraft"
							)}
						</>
					) : null}
					{this.renderList("Skill associate", _skills, skills, "skills")}
					{this.renderButton("Conferma")}
				</form>
			</div>
		)
	}
}

export default ShopForm
