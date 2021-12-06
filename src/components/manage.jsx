import React from "react"
import { Switch, Route, Link, useHistory, useLocation } from "react-router-dom"

import ListGroup from "./common/listGroup"
import ManageHub from "./common/m-hub"

import ChatsForm from "./manage/m-chats"
import SkillsForm from "./manage/m-skills"
import ShopForm from "./manage/m-shop"
import PowersForm from "./manage/m-powers"
import EffectsForm from "./manage/m-effects"

import {
	skillService,
	powerService,
	shopService,
	chatService,
	effectService
} from "../services/dbService"

import {
	skillsCategories,
	effectsCategories,
	powersCategories,
	shopCategories
} from "../config/categoriesData"

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
		name: "Mercato",
		value: "/land/manage/mercato"
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
						<Route path="/land/manage/poteri/:id" component={PowersForm} />
						<Route
							path="/land/manage/poteri"
							render={props => (
								<ManageHub
									label="poteri"
									categories={powersCategories}
									service={powerService}
									path="poteri"
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
						<Route path="/land/manage/effetti/:id" component={EffectsForm} />
						<Route
							path="/land/manage/effetti"
							render={props => (
								<ManageHub
									label="effetti"
									categories={effectsCategories}
									service={effectService}
									path="effetti"
									{...props}
								/>
							)}
						/>
						<Route path="/land/manage/mercato/:id" component={ShopForm} />
						<Route
							path="/land/manage/mercato"
							render={props => (
								<ManageHub
									label="mercato"
									categories={shopCategories}
									service={shopService}
									path="mercato"
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
