import React from "react"
import { Text, Button, FrameCorners } from "@arwes/core"

import { useAuth } from "../context/authContext"

const AccessGranted = () => {
	const user = useAuth()

	return (
		<div className="fullview">
			{user.emailVerified ? (
				<div className="fullview-box">
					<Text as="h2" className="heading--success">
						Accesso confermato
					</Text>
					<Text palette="secondary">
						Bentornato, <em>{user.email}</em>
					</Text>
					<div className="btn form-btn">
						<Button
							className="m-auto"
							onClick={() => this.props.history.push("/land")}
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
