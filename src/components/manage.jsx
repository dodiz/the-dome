import React from "react"
import { Switch, Route, Link, useHistory, useLocation } from "react-router-dom"
import { FrameCorners } from "@arwes/core"

import ListGroup from "./common/listGroup"
import Chats from "./manage/chats"
import ChatsForm from "./manage/chatsForm"

import "../css/manage.css"

const menu = [
	{
		name: "Chat",
		value: "/land/manage/chats"
	},
	{
		name: "Abilità",
		value: "/land/manage/abilita"
	},
	{
		name: "Poteri",
		value: "/land/manage/poteri"
	},
	{
		name: "Negozio",
		value: "/land/manage/negozio"
	},
	{
		name: "Utenti",
		value: "/land/manage/utenti"
	},
	{
		name: "Personaggi",
		value: "/land/manage/personaggi"
	}
]

const Manage = () => {
	const history = useHistory()
	const location = useLocation()
	function handleMenuSelect({ value }) {
		history.push(value)
	}

	return (
		<div>
			<div className="grid manage">
				<ListGroup
					items={menu}
					onItemSelect={handleMenuSelect}
					selectedItem={menu.find(m => m.value === location.pathname)}
				/>
				<div className="p-1">
					<h1>
						<Link className="link" to="/land/manage">
							Amministrazione
						</Link>
					</h1>
					<Switch>
						<Route path="/land/manage/chats/:id" component={ChatsForm} />
						<Route path="/land/manage/chats" component={Chats} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Manage
