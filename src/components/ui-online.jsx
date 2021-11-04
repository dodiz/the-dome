import React from "react"
import { FrameBox, Text } from "@arwes/core"

import onlineService from "../services/onlineService"

import MailIcon from "../media/icons/mail.svg"
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

		return (
			<FrameBox className="ui__box">
				<h4 className="ui__title" onClick={this.props.onOpen}>
					Mostra tutto
				</h4>
				{users.map(user => (
					<div
						key={user._id}
						className={`ui__o-user ${user.isBusy ? "busy" : ""}`}>
						<div className="ui__o-icon msg">
							<img src={MailIcon} />
						</div>
						<img src={user.img} className="ui__o-avatar" />
						<Text className="ui__o-username">{user.name}</Text>
						{user.isAdmin && (
							<div className="ui__o-icon admin">
								<img src={StarIcon} />
							</div>
						)}
					</div>
				))}
			</FrameBox>
		)
	}
}

export default OnlineUI
