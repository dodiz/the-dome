import React from "react"
import { Button, Text, FrameCorners } from "@arwes/core"
import { toast } from "react-toastify"

import Joi from "../classes/joi"
import Form from "./common/form"
import { resetPassword, verifyEmail } from "../services/authService"

class Verify extends Form {
	state = {
		data: {
			password: ""
		},
		errors: {}
	}

	schema = Joi.object({
		password: Joi.string().min(6).required().label("Password")
	})

	getParams = () => {
		const params = new URLSearchParams(this.props.location.search)
		const code = params.get("oobCode")
		const mode = params.get("mode")
		return {
			code,
			mode
		}
	}

	componentDidMount() {
		const { code, mode } = this.getParams()
		if (!code) this.props.history.replace("/")
		if (mode === "verifyEmail")
			verifyEmail(code)
				.then(() => {
					this.setState({ isVerified: true })
				})
				.catch(e => toast.error(e))
	}

	doSubmit = () => {
		const code = this.getParams()
		resetPassword(code)
			.then(() => {
				toast.success("Password reimpostata con successo")
				this.props.history.push("/login")
			})
			.catch(e => toast.error(e))
	}

	renderResetPassword = () => {
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

	renderVerifyEmail = () => {
		const { isVerified } = this.state

		return (
			<div className="fullview">
				<div className="fullview-box">
					<Text as="h3">
						{!isVerified
							? "Verifica account in corso ..."
							: "Verifica completata"}{" "}
					</Text>
					{isVerified && (
						<Text>Il tuo account è stato verificato con successo</Text>
					)}
					<div className="form-btn btn mt-1 m-auto">
						<Button
							className="m-auto"
							FrameComponent={FrameCorners}
							onClick={() => this.props.history.push("/login")}>
							Accedi al login
						</Button>
					</div>
				</div>
			</div>
		)
	}

	render() {
		const { mode } = this.getParams()

		if (mode === "resetPassword") return this.renderResetPassword()
		if (mode === "verifyEmail") return this.renderVerifyEmail()
	}
}

export default Verify
