import React, { useState, useEffect } from "react"
import { Text, Button, FrameCorners } from "@arwes/core"

import authService from "../services/authService"
import { toast } from "react-toastify"

const Verify = ({ history, location }) => {
	const [isVerified, setIsVerified] = useState(false)

	useEffect(() => {
		const params = new URLSearchParams(location.search)
		const code = params.get("oobCode")
		authService
			.verifyEmail(code)
			.then(() => {
				setIsVerified(true)
			})
			.catch(e => toast.error(e))
	}, [])

	return (
		<div className="fullview">
			<div className="fullview-box">
				<Text as="h3">verifica account</Text>
				{isVerified && (
					<Text>Il tuo account è stato verificato con successo</Text>
				)}
				<div className="form-btn btn mt-1 m-auto">
					<Button
						className="m-auto"
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
