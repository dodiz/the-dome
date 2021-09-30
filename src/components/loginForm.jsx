import React from "react"
import Joi from "joi-browser"
import { Text } from "@arwes/core"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import auth from "../services/authService"
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

	schema = {
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password")
	}

	doSubmit = async () => {
		try {
			const { email, password } = this.state.data
			const { displayName } = await auth.login(email, password)
			this.setState({ displayName })
			setTimeout(() => this.props.history.push("/land"), 2000)
		} catch (ex) {
			toast.error("Accesso negato")
		}
	}

	render() {
		const { displayName } = this.state

		return (
			<div className="fullview">
				{!displayName ? (
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
						<div className="fullview-box__links">
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
				) : (
					<div
						className="fullview-box"
						style={{ textAlign: "center", fontSize: "2rem" }}>
						<Text as="h1" className="heading--success">
							ACCESS GRANTED
						</Text>
						<Text as="h3" palette="secondary">
							Bentornato, <em>{displayName}</em>
						</Text>
					</div>
				)}
			</div>
		)
	}
}

export default LoginForm
