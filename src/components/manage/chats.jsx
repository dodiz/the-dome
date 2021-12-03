import React, { useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

import { locations } from "../../config/locations"

import chatService from "../../services/chatService"

const Chats = () => {
	const [chats, setChats] = useState([])
	const [current, setCurrent] = useState({})

	async function popChat(chat) {
		try {
			const _chats = [...chats]
			const index = _chats.indexOf(chat)
			_chats.splice(index, 1)
			await chatService.remove(chat._id)
			setChats(_chats)
		} catch {
			toast.error("Impossibile cancellare la chat")
		}
	}
	async function loadChats(location) {
		const chats = await chatService.get(location._id)
		setChats(chats)
		setCurrent(location)
	}

	return (
		<>
			<div className="flex">
				<h3>Gestisci chat</h3>
				<Link to="/land/manage/chats/new" className="link">
					Aggiungi chat
				</Link>
			</div>
			{locations.map(location => (
				<div key={location._id} className="manage-frame mt-1 p-1">
					<div className="flex">
						<h3 className="p-small link" onClick={() => loadChats(location)}>
							{location.label}
						</h3>
					</div>
					<div className="m-small">
						{location === current
							? chats.length
								? chats.map(chat => (
										<div key={chat._id} className="m-small link flex">
											<Link
												className="link"
												to={`/land/manage/chats/${chat._id}`}>
												{chat.label}
											</Link>
											<span
												className="link secondary ml-auto"
												onClick={() => popChat(chat)}>
												Cancella
											</span>
										</div>
								  ))
								: "Nessuna chat presente"
							: null}
					</div>
				</div>
			))}
		</>
	)
}

export default Chats
