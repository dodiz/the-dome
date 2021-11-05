import React from "react"
import Joi from "joi-browser"
import { toast } from "react-toastify"

import Form from "./form"

class NewMessage extends Form {
	state = {
		data: {
			message: "",
			isOn: false
		},
		errors: {}
	}

	schema = {
		message: Joi.string().required().label("message"),
		isOn: Joi.boolean()
	}

	doSubmit = () => {
		toast.error("Funzione non disponibile")
	}

	render() {
		const { data } = this.props
		const { data: formData } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderCheckbox(
					"isOn",
					formData.isOn ? "Messaggio Off" : "Messaggio On"
				)}
				{this.renderTextarea(
					"message",
					"",
					`Messaggia ${formData.isOn ? data.name : data.pg.name}`
				)}
				{this.renderButton("Invia")}
			</form>
		)
	}
}

export default NewMessage
