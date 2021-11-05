import React, { Component } from "react"
import Joi from "joi-browser"
import Select from "./select"
import { Button, FrameCorners, Text } from "@arwes/core"

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			{label && (
				<label htmlFor="">
					<Text as="h2" className="h2" palette="secondary">
						{label}
					</Text>
				</label>
			)}
			<input name={name} className="form-control" {...rest} />
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}

const Textarea = ({ name, label, error, value, ...rest }) => {
	return (
		<div className="form-group">
			{label && (
				<label htmlFor="">
					<Text as="h2" className="h2" palette="secondary">
						{label}
					</Text>
				</label>
			)}
			<textarea name={name} {...rest} className="form-control">
				{value}
			</textarea>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}

class Form extends Component {
	state = {
		steps: 0,
		currentStep: 1,
		data: {},
		errors: {}
	}

	validate = () => {
		const options = { abortEarly: false }
		const { error } = Joi.validate(this.state.data, this.schema, options)

		if (!error) return null

		const errors = {}

		for (let item of error.details) errors[item.path[0]] = item.message

		return errors
	}

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value }
		const schema = { [name]: this.schema[name] }
		const { error } = Joi.validate(obj, schema)

		return error ? error.details[0].message : null
	}

	handleSubmit = e => {
		e.preventDefault()
		const errors = this.validate()
		this.setState({ errors: errors || {} })
		if (errors) return

		this.doSubmit()
	}

	handleChange = ({ target: input }) => {
		const errors = { ...this.state.errors }
		const errorMessage = this.validateProperty(input)

		if (errorMessage) errors[input.name] = errorMessage
		else delete errors[input.name]

		const data = { ...this.state.data }
		data[input.name] = input.value
		this.setState({ data, errors })
	}

	renderInput(name, label, placeholder = "", type = "text") {
		const { data, errors } = this.state

		return (
			<Input
				name={name}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
				value={data[name]}
				type={type}
				placeholder={placeholder}
			/>
		)
	}
	renderTextarea(name, label, placeholder = "") {
		const { data, errors } = this.state

		return (
			<Textarea
				name={name}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
				value={data[name]}
				placeholder={placeholder}
			/>
		)
	}

	renderSelect(name, label, options) {
		const { data, errors } = this.state
		return (
			<Select
				name={name}
				label={label}
				onChange={this.handleChange}
				value={data[name]}
				error={errors[name]}
				options={options}
			/>
		)
	}

	renderButton(label) {
		return (
			<div className="form-btn btn">
				<Button>{label}</Button>
			</div>
		)
	}

	nextStep = e => {
		e.preventDefault()
		const { currentStep } = this.state
		this.setState({ currentStep: currentStep + 1 })
	}
	previousStep = e => {
		e.preventDefault()
		const { currentStep } = this.state
		this.setState({ currentStep: currentStep - 1 })
	}

	RenderStep = ({ step, fields, children }) => {
		const { currentStep, steps } = this.state

		let isValidated = true
		fields.forEach(field => {
			if (this.state.errors[field] || !this.state.data[field])
				isValidated = false
		})

		return (
			step === currentStep && (
				<>
					{children}
					<div className="btn form-steps">
						{currentStep > 1 && (
							<Button
								FrameComponent={FrameCorners}
								className={
									currentStep !== this.state.steps ? "form-step-margin" : ""
								}
								onClick={this.previousStep}>
								<Text>Indietro</Text>
							</Button>
						)}
						{currentStep < steps && isValidated && (
							<Button FrameComponent={FrameCorners} onClick={this.nextStep}>
								<Text>Procedi</Text>
							</Button>
						)}
					</div>
				</>
			)
		)
	}
}

export default Form
