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
			<FrameBox>
				<div className="ui__preview">
					<Text as="h4" className="ui__title">
						Utenti online
					</Text>
					<div className="ui__online">
						{users.map(user => (
							<div key={user._id} className="ui__user">
								<div className="ui__status" />
								<div className="ui__icon msg">
									<img src={MailIcon} />
								</div>
								<img src={user.img} className="ui__o-avatar" />
								<Text>{user.name}</Text>
								{user.isAdmin && (
									<div className="ui__icon admin">
										<img src={StarIcon} />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</FrameBox>
		)
	}
}

export default OnlineUI
