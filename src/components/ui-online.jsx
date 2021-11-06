import React from "react"
import { Text } from "@arwes/core"

import onlineService from "../services/onlineService"

import StarIcon from "../media/icons/star.svg"

class OnlineUI extends React.Component {
	state = {
		users: []
	}

	componentDidMount() {
		const users = onlineService.getUsers()
		this.setState({ users })
	}

	render() {
		const { users } = this.state
		const { onSelectUser } = this.props

		return users.map(user => (
			<div
				key={user._id}
				className={`ui__o-user ${user.isBusy ? "busy" : ""}`}
				onClick={() => onSelectUser(user)}>
				<img alt={user.pg.name} src={user.pg.img} className="ui__o-avatar" />
				<Text className="ui__o-username">{user.pg.name}</Text>
				{user.isAdmin && (
					<div className="ui__o-icon admin">
						<img src={StarIcon} alt="admin" />
					</div>
				)}
			</div>
		))
	}
}

export default OnlineUI
