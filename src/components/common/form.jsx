import React, { Component } from "react"
import Select from "./select"
import { Button, FrameCorners, Text } from "@arwes/core"

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			{label && (
				<label htmlFor="">
					<Text as="h3" className="h3" palette="secondary">
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
					<Text as="h3" className="h3" palette="secondary">
						{label}
					</Text>
				</label>
			)}
			<textarea value={value} name={name} {...rest} className="form-control" />
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}

const Checkbox = ({ name, label, value, ...rest }) => {
	return (
		<label className="form-checkbox" htmlFor={name}>
			<input
				type="checkbox"
				className="form-checkbox__input"
				id={name}
				checked={value}
				{...rest}
			/>
			<span className="form-checkbox__track">
				<span className="form-checkbox__indicator" />
			</span>
			{label}
		</label>
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
		const { error } = this.schema.validate(this.state.data)
		if (!error) return null

		const errors = {}
		for (let item of error.details) errors[item.path[0]] = item.message

		return errors
	}

	validateProperty = ({ name, value }) => {
		const schema = this.schema.extract(name)
		const refs = schema._refs.refs
		if (refs.length) return null
		const { error } = schema.validate(value)
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
	renderCheckbox(name, label) {
		const { data } = this.state

		return (
			<Checkbox
				name={name}
				label={label}
				onChange={({ target }) => {
					const data = { ...this.state.data }
					data[name] = target.checked
					this.setState({ data })
				}}
				value={data[name]}
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
