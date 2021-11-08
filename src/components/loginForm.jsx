import React from "react"
import Joi from "../classes/joi"
import { Text, Button, FrameCorners } from "@arwes/core"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import Form from "./common/form"
import auth from "../services/authService"
import { AuthContext } from "./../context/authContext"

class LoginForm extends Form {
	state = {
		currentStep: 1,
		steps: 2,
		displayName: "",
		data: {
			email: "",
			password: "",
			keepConnection: false
		},
		errors: {}
	}

	schema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().required().label("Password"),
		keepConnection: Joi.boolean()
	})

	doSubmit = async () => {
		try {
			const { email, password } = this.state.data
			await auth.login(email, password)
		} catch (ex) {
			toast.error("Accesso negato")
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
					<this.RenderStep step={2} fields={["password", "keepConnection"]}>
						{this.renderInput("password", "Password", "Password", "Password")}
						{this.renderCheckbox("keepConnection", "Resta collegato")}
						{this.renderButton("Accedi")}
					</this.RenderStep>
					<div className="form-footer">
						<Text>
							<Link to="">
								<em>Password dimenticata?</em>
							</Link>
							<br />
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
