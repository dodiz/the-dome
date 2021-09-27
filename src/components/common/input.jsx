import React from "react"
import { Text } from "@arwes/core"

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor="">
				<Text as="h2" palette="secondary">
					{label}
				</Text>
			</label>
			<input name={name} className="form-control" {...rest} />
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}

export default Input
