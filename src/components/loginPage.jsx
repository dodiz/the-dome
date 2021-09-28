import React from "react"
import Joi from "joi-browser"
import { Text } from "@arwes/core"

import Form from "./common/form"
import withSound from "../hoc/withSound"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

class InfoPage extends Form {
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
					<this.RenderStep step={1} validatedFields={["username"]}>
						{this.renderInput(
							"username",
							"Please identify yourself",
							"Username"
						)}
					</this.RenderStep>
					<this.RenderStep step={2} validatedFields={["password"]}>
						{this.renderInput("password", "Password", "Password", "Password")}
						{this.renderButton("Accedi")}
					</this.RenderStep>
					<div className="login__links">
						<Text as="div">
							<Link to="">
								<em>Password dimenticata?</em>
							</Link>
							<br />
							<Link to="">
								<em>Registrati</em>
							</Link>
						</Text>
					</div>
				</form>
			</div>
		)
	}
}

export default withSound(InfoPage)
