import React from "react"
import Joi from "joi-browser"
import { toast } from "react-toastify"

import Form from "./form"

class NewMessage extends Form {
	state = {
		data: {
			message: ""
		},
		errors: {}
	}

	schema = {
		message: Joi.string().required().label("message")
	}

	doSubmit = () => {
		toast.error("Funzione non disponibile")
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderTextarea(
					"message",
					"",
					"Messaggio a " + this.props.data.name
				)}
				{this.renderButton("Invia")}
			</form>
		)
	}
}

export default NewMessage
