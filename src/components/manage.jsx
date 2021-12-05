import React from "react"
import { Switch, Route, Link, useHistory, useLocation } from "react-router-dom"

import ListGroup from "./common/listGroup"
import ChatsForm from "./manage/m-chats"
import SkillsForm from "./manage/m-skills"
import ManageHub from "./manage/m-hub"

import skillService from "../services/skillService"
import chatService from "../services/chatService"

import { skillsCategories } from "../config/skillsData"
import { locations } from "../config/locationsData"

import "../css/manage.css"

const menu = [
	{
		name: "Chat",
		value: "/land/manage/chats"
	},
	{
		name: "Abilità",
		value: "/land/manage/skills"
	},
	{
		name: "Poteri",
		value: "/land/manage/poteri"
	},
	{
		name: "Bonus",
		value: "/land/manage/bonus"
	},
	{
		name: "Malus",
		value: "/land/manage/malus"
	},
	{
		name: "Effetti",
		value: "/land/manage/effetti"
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
	},
	{
		name: "Forum",
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
				<div className="p-1 manage-content">
					<h1>
						<Link className="link" to="/land/manage">
							Amministrazione
						</Link>
					</h1>
					<Switch>
						<Route path="/land/manage/chats/:id" component={ChatsForm} />
						<Route
							path="/land/manage/chats"
							render={props => (
								<ManageHub
									label="chat"
									categories={locations}
									service={chatService}
									path="chats"
									{...props}
								/>
							)}
						/>
						<Route path="/land/manage/skills/:id" component={SkillsForm} />
						<Route
							path="/land/manage/poteri"
							render={props => (
								<ManageHub
									label="poteri"
									categories={skillsCategories}
									service={skillService}
									path="skills"
									{...props}
								/>
							)}
						/>
						<Route path="/land/manage/skills/:id" component={SkillsForm} />
						<Route
							path="/land/manage/skills"
							render={props => (
								<ManageHub
									label="skill"
									categories={skillsCategories}
									service={skillService}
									path="skills"
									{...props}
								/>
							)}
						/>
					</Switch>
				</div>
				<ListGroup
					items={menu}
					onItemSelect={handleMenuSelect}
					selectedItem={menu.find(m => m.value === location.pathname)}
				/>
			</div>
		</div>
	)
}

export default Manage
