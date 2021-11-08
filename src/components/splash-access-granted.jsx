import React from "react"
import { Text, Button, FrameCorners } from "@arwes/core"

import { useAuth } from "../context/authContext"

const AccessGranted = props => {
	const user = useAuth()

	return (
		<div className="fullview">
			{user.emailVerified ? (
				<div className="fullview-box m-auto t-center">
					<Text as="h2" className="heading--success">
						Accesso confermato
					</Text>
					<Text as="h4">
						Bentornato, <em>{user.displayName}</em>
					</Text>
					<div className="btn form-btn mt-1">
						<Button
							className="m-auto"
							onClick={() => props.history.push("/land")}
							FrameComponent={FrameCorners}>
							Continua
						</Button>
					</div>
				</div>
			) : (
				<div className="fullview-box">
					<Text>Devi verificare la tua email prima di procedere</Text>
				</div>
			)}
		</div>
	)
}

export default AccessGranted
