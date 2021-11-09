import React from "react"
import Joi from "../classes/joi"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import { login, sendPasswordReset } from "../services/authService"

import Form from "./common/form"

class LoginForm extends Form {
	state = {
		currentStep: 1,
		steps: 2,
		displayName: "",
		data: {
			email: "",
			password: ""
		},
		errors: {}
	}

	schema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().required().label("Password")
	})

	doSubmit = async () => {
		try {
			const { email, password } = this.state.data
			await login(email, password)
		} catch (ex) {
			toast.error("Accesso negato")
		}
	}

	handlePasswordRetrieve = async () => {
		const name = "email"
		const value = this.state.data.email

		const errors = { ...this.state.errors }
		const errorMessage = this.validateProperty({ name, value })
		if (errorMessage) {
			errors[name] = errorMessage
			this.setState({ errors })
			return
		}
		//No errors, send email
		try {
			await sendPasswordReset(value)
			toast.info("Controlla la casella di posta")
		} catch (e) {
			toast.error("Si è verificato un errore")
		}
	}

	render() {
		return (
			<div className="fullview">
				<form onSubmit={this.handleSubmit} className="fullview-box">
					<this.RenderStep step={1} fields={["email"]}>
						{this.renderInput(
							"email",
							"Identificazione richiesta",
							"your@mail.com",
							"email"
						)}
					</this.RenderStep>
					<this.RenderStep step={2} fields={["password"]}>
						{this.renderInput("password", "Password", "Password", "Password")}
						{this.renderButton("Accedi")}
					</this.RenderStep>
					<div className="form-footer">
						<Text>
							<div className="click" onClick={this.handlePasswordRetrieve}>
								<em>Password dimenticata?</em>
							</div>
							<Link to="/register">
								<em>Non hai un account? Registrati</em>
							</Link>
						</Text>
					</div>
				</form>
			</div>
		)
	}
}

export default LoginForm
