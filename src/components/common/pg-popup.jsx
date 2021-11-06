import React from "react"
import { Text, FrameCorners } from "@arwes/core"

import Modal from "./modal"
import QuickMessage from "./quick-message"

const PgPopup = ({ data, onClose }) => {
	return (
		<Modal small centered show onHide={onClose}>
			<div className="flex start">
				<img className="pg-p__avatar" alt="" src={data.pg.img} />
				<Text as="h3" className="no-margin">
					{data.pg.name}
				</Text>
			</div>
			<div className="pg-p">
				<Text className="no-margin pg-p__title">
					<em>Utente: </em>
					{data.name}
				</Text>
				<Text className="no-margin pg-p__title">
					<em>Status: </em>
					{data.isBusy ? "Occupato" : "Disponibile"}
				</Text>
				{data.isAdmin && (
					<Text className="no-margin pg-p__title">
						<em>Ruolo: </em>
						Admin
					</Text>
				)}
				<FrameCorners className="pg-p__button">
					<Text>Accedi alla scheda</Text>
				</FrameCorners>
			</div>
			<QuickMessage data={data} />
		</Modal>
	)
}

export default PgPopup
