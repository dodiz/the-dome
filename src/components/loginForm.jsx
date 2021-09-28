import React from "react"
import Joi from "joi-browser"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import Form from "./common/form"

class LoginForm extends Form {
	state = {
		currentStep: 1,
		steps: 2,
		data: {
			username: "",
			password: ""
		},
		errors: {}
	}

	schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password")
	}

	doSubmit = () => {
		toast.error("Login not available yet")
	}

	render() {
		return (
			<div className="box">
				<form onSubmit={this.handleSubmit} className="login">
					<this.RenderStep step={1} fields={["username"]}>
						{this.renderInput(
							"username",
							"Please identify yourself",
							"Username"
						)}
					</this.RenderStep>
					<this.RenderStep step={2} fields={["password"]}>
						{this.renderInput("password", "Password", "Password", "Password")}
						{this.renderButton("Accedi")}
					</this.RenderStep>
					<div className="login__links">
						<Text>
							<Link to="">
								<em>Password dimenticata?</em>
							</Link>
							<br />
							<Link to="/register">
								<em>Registrati</em>
							</Link>
						</Text>
					</div>
				</form>
			</div>
		)
	}
}

export default LoginForm
