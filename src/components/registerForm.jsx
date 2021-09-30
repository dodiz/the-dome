import React from "react"
import Joi from "joi-browser"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import Form from "./common/form"

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

	schema = {
		email: Joi.string().email().required().label("email"),
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
		rpassword: Joi.string()
			.valid(Joi.ref("password"))
			.required()
			.label("Password")
	}

	doSubmit = () => {
		toast.error("Login not available yet")
	}

	render() {
		return (
			<div className="fullview">
				<form onSubmit={this.handleSubmit} className="fullview-box">
					<this.RenderStep step={1} fields={["username", "email"]}>
						{this.renderInput("username", "Nome utente", "Username")}
						{this.renderInput("email", "Email", "your@mail.it", "email")}
					</this.RenderStep>
					<this.RenderStep step={2} fields={["password, rpassword"]}>
						{this.renderInput("password", "Password", "Password", "Password")}
						{this.renderInput("rpassword", "conferma password", "", "Password")}
						{this.renderButton("Registrati")}
					</this.RenderStep>
					<div className="fullview-box__links">
						<Text>
							<Link to="">
								<em>Login</em>
							</Link>
						</Text>
					</div>
				</form>
			</div>
		)
	}
}

export default RegisterForm
