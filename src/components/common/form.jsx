import React, { Component } from "react"
import { Button, FrameCorners, Text } from "@arwes/core"

const Select = ({
	name,
	label,
	onChange,
	error,
	options,
	value,
	valueProperty = "_id",
	...rest
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>
				<h3>{label}</h3>
			</label>
			<select
				value={value || ""}
				onChange={onChange}
				name={name}
				className="form-control form-select"
				{...rest}>
				<option value="">Seleziona ...</option>
				{options.map((option, i) => (
					<option key={i} value={option[valueProperty]}>
						{option.label}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger m-2">{error}</div>}
		</div>
	)
}
const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			{label && (
				<label htmlFor="">
					<h3 className="h3">{label}</h3>
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
					<h3 className="h3">{label}</h3>
				</label>
			)}
			<textarea value={value} name={name} {...rest} className="form-control" />
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}
const Checkbox = ({ name, label, value, error, ...rest }) => {
	return (
		<div>
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
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}

class Form extends Component {
	state = {
		isSubmitting: false,
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
		if (errors) {
			return
		}
		this.doSubmit()
	}
	handleChange = ({ target: input }) => {
		const errors = this.handleError(input)
		const data = { ...this.state.data }
		data[input.name] = input.value
		this.setState({ data, errors })
	}
	handleError = input => {
		const errors = { ...this.state.errors }
		const errorMessage = this.validateProperty(input)

		if (errorMessage) errors[input.name] = errorMessage
		else delete errors[input.name]
		return errors
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
		const { data, errors } = this.state

		return (
			<Checkbox
				name={name}
				label={label}
				error={errors[name]}
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
		const { currentStep, steps, errors, data } = this.state

		let isValidated = true
		fields.forEach(field => {
			if (errors[field] || !data[field]) isValidated = false
		})

		return (
			step === currentStep && (
				<>
					{children}
					<div className="btn form-steps">
						{currentStep > 1 && (
							<Button
								animator={{ activate: true }}
								FrameComponent={FrameCorners}
								className={
									currentStep !== this.state.steps ? "form-step-margin" : ""
								}
								onClick={this.previousStep}>
								<Text>Indietro</Text>
							</Button>
						)}

						{isValidated && currentStep < steps && (
							<Button
								animator={{ activate: true }}
								FrameComponent={FrameCorners}
								onClick={this.nextStep}>
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
