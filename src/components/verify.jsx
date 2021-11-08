import React, { useState, useEffect } from "react"
import { Text, Button, FrameCorners } from "@arwes/core"

import { useAuth } from "../context/authContext"

const Verify = ({ history }) => {
	const [isVerified, setIsVerified] = useState(false)
	const user = useAuth()

	useEffect(() => {
		setTimeout(() => {
			setIsVerified(true)
		}, [1000])
	}, [])

	return (
		<div className="fullview">
			<div className="fullview-box">
				<Text as="h3">verifica account</Text>
				{isVerified && (
					<Text>Il tuo account è stato verificato con successo</Text>
				)}
				<div className="form-btn btn mt-1">
					<Button
						FrameComponent={FrameCorners}
						onClick={() => history.push("/login")}>
						Accedi al login
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Verify
