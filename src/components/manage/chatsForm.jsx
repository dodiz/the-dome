import { toast } from "react-toastify"

import Joi from "../../classes/joi"
import Form from "../common/form"

import { locations } from "../../config/locations"
import chatService from "../../services/chatService"
import { formatToId } from "./../../tools/format"

class ChatsForm extends Form {
	state = {
		currentStep: 1,
		steps: 1,
		id: "",
		data: {
			label: "",
			description: "",
			closed: false,
			location: locations[0].value
		},
		errors: {}
	}

	schema = Joi.object({
		label: Joi.string().required(),
		location: Joi.string(),
		description: Joi.string(),
		closed: Joi.boolean()
	})

	async componentDidMount() {
		const chatId = this.props.match.params.id
		if (chatId === "new") return

		try {
			const chat = await chatService.getSingle(chatId)
			this.setState({ id: chatId, data: this.mapToViewModel(chat) })
		} catch (ex) {
			toast.error("Chat non trovata")
			this.props.history.replace("/not-found")
		}
	}

	mapToViewModel(chat) {
		return {
			label: chat.label,
			location: chat.location,
			description: chat.description,
			closed: chat.closed
		}
	}

	doSubmit = async () => {
		try {
			const { data } = this.state
			const id = formatToId(data.label)
			await chatService.update(id, data)
			toast.success("chat aggiornata")
			this.props.history.push("/land/manage/chats")
		} catch (ex) {
			toast.error("Qualcosa è andato storto")
		}
	}

	render() {
		const isNew = this.props.match.params.id === "new"
		const { label } = this.state.data
		return (
			<div>
				<h2>{isNew ? "Nuova Chat" : `Modifica ${label}`}</h2>
				<form onSubmit={this.handleSubmit}>
					<p>Id: {formatToId(label)}</p>
					{this.renderInput("label", "Nome")}
					{this.renderSelect("location", "Zona", locations)}
					{this.renderTextarea("description", "Descrizione", "descrizione")}
					{this.renderCheckbox("closed", "Disabilita chat")}
					{this.renderButton(isNew ? "Aggiungi" : "Modifica")}
				</form>
			</div>
		)
	}
}

export default ChatsForm
