import React from "react"
import Joi from "../classes/joi"
import Form from "./common/form"
import authService from "../services/authService"
import { toast } from "react-toastify"

class PasswordReset extends Form {
	state = {
		data: {
			password: ""
		},
		errors: {}
	}

	schema = Joi.object({
		password: Joi.string().min(6).required().label("Password")
	})

	componentDidMount() {
		const params = new URLSearchParams(this.props.location.search)
		const code = params.get("oobCode")
		if (!code) this.props.history.replace("/")
	}

	doSubmit = () => {
		const params = new URLSearchParams(this.props.location.search)
		const code = params.get("oobCode")
		authService
			.resetPassword(code)
			.then(() => {
				toast.success("Password reimpostata con successo")
				this.props.history.push("/login")
			})
			.catch(e => toast.error(e))
	}

	render() {
		return (
			<div className="fullview">
				<form onSubmit={this.handleSubmit} className="fullview-box">
					{this.renderInput(
						"password",
						"Inserisci una nuova password",
						"",
						"password"
					)}
					{this.renderButton("Modifica password")}
				</form>
			</div>
		)
	}
}

export default PasswordReset
