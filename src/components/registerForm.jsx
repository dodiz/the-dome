import React from "react"
import Joi from "../classes/joi"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"

import Form from "./common/form"
import { signup } from "../services/authService"
import { toast } from "react-toastify"

class RegisterForm extends Form {
	state = {
		currentStep: 1,
		steps: 2,
		isSubmitted: false,
		data: {
			email: "",
			username: "",
			password: "",
			rpassword: "",
			privacy: false
		},
		errors: {}
	}

	schema = Joi.object({
		username: Joi.string()
			.alphanum()
			.required()
			.min(5)
			.max(15)
			.label("username"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().min(6).required().label("Password"),
		rpassword: Joi.string().valid(Joi.ref("password")),
		privacy: Joi.boolean().valid(true).messages({
			"any.only": "Dai il tuo consenso per procedere"
		})
	})

	doSubmit = async () => {
		const { username, email, password } = this.state.data
		try {
			await signup(username, email, password)
			const isSubmitted = true
			this.setState({ isSubmitted })
		} catch (e) {
			toast.error(e)
			this.setState({ currentStep: 1 })
		}
	}

	render() {
		const { isSubmitted } = this.state

		return (
			<div className="fullview">
				{!isSubmitted ? (
					<form onSubmit={this.handleSubmit} className="fullview-box">
						<this.RenderStep step={1} fields={["username", "email"]}>
							{this.renderInput(
								"username",
								"Username",
								"Non equivale al nome del tuo personaggio"
							)}
							{this.renderInput("email", "Email", "your@mail.it", "email")}
						</this.RenderStep>
						<this.RenderStep step={2} fields={["password, rpassword"]}>
							{this.renderInput("password", "Password", "Password", "Password")}
							{this.renderInput(
								"rpassword",
								"conferma password",
								"",
								"Password"
							)}
							{this.renderCheckbox(
								"privacy",
								"Acconsento al trattamento dei dati personali"
							)}
							{this.renderButton("Registrati")}
						</this.RenderStep>
						<div className="form-footer">
							<Text>
								<Link to="/login">
									<em>Hai già un account? Accedi</em>
								</Link>
							</Text>
						</div>
					</form>
				) : (
					<div className="fullview-box">
						<Text as="h3">Email inviata</Text>
						<Text as="p">
							Ti abbiamo inviato una mail all'indirizzo{" "}
							<em>{this.state.data.email}</em> <br />
							Chiudi pure questa finestra
						</Text>
					</div>
				)}
			</div>
		)
	}
}

export default RegisterForm
