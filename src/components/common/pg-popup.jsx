import React, { useState } from "react"
import { Text, Button } from "@arwes/core"

import Modal from "./modal"
import NewMessage from "./new-message"

const PgPopup = ({ data, onClose }) => {
	return (
		<Modal small centered show onHide={onClose}>
			<div className="flex pg-p">
				<img className="pg-p__avatar" alt="" src={data.pg.img} />
				<div className="pg-p__content">
					<Text as="h3" className="no-margin">
						{data.pg.name}
					</Text>
					<Text as="h6" className="no-margin">
						<em>Utente: </em>
						{data.name}
					</Text>
					<Text as="h6" className="no-margin">
						<em>Status: </em>
						{data.isBusy ? "Occupato" : "Disponibile"}
					</Text>
					<Button className="pg-p__button">Accedi alla scheda</Button>
				</div>
			</div>
			<div className="line extend" />
			<div style={{ marginTop: "2rem" }}>
				<NewMessage data={data} />
			</div>
		</Modal>
	)
}

export default PgPopup
