import React from "react"
import Joi from "joi-browser"
import { Text } from "@arwes/core"

import Form from "./common/form"
import withSound from "../hoc/withSound"
import { toast } from "react-toastify"

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

	doSubmit = () => {}

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
				</form>
				<div className="login__links">
					<Text as="div">
						<em>Password dimenticata?</em>
					</Text>
				</div>
			</div>
		)
	}
}

export default withSound(InfoPage)
