import React from "react"
import Joi from "../classes/joi"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"

import Form from "./common/form"
import authService from "../services/authService"

class RegisterForm extends Form {
	state = {
		currentStep: 1,
		steps: 2,
		data: {
			email: "",
			username: "",
			password: "",
			rpassword: ""
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
		password: Joi.string().required().label("Password"),
		rpassword: Joi.string().valid(Joi.ref("password"))
	})

	doSubmit = async () => {
		const { username, email, password } = this.state.data
		const res = await authService.signUp(username, email, password)
	}

	render() {
		return (
			<div className="fullview">
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
						{this.renderInput("rpassword", "conferma password", "", "Password")}
						{this.renderButton("Registrati")}
					</this.RenderStep>
					<div className="fullview-box__links">
						<Text>
							<Link to="/login">
								<em>Hai già un account? Accedi</em>
							</Link>
						</Text>
					</div>
				</form>
			</div>
		)
	}
}

export default RegisterForm
