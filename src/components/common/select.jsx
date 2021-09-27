import React from "react"

const Select = ({ name, label, error, options, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				className="form-control"
                {...rest}
			>
                {options.map(option => <option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {error && <div className="alert alert-danger m-2">{error}</div>}
		</div>
	)
}

export default Select
