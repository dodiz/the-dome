import React from "react"
import socialService from "../services/socialService"
import { FrameBox } from "@arwes/core"

class SocialUI extends React.Component {
	state = {
		posts: []
	}

	componentDidMount() {
		const posts = socialService.getPosts()
		this.setState({ posts })
	}

	render() {
		const { posts } = this.state

		return (
			<FrameBox className="ui__box">
				<h4 className="ui__title">Accedi al social</h4>
				<div className="social">
					{posts.map(post => (
						<div key={post._id} className="social__post">
							<div className="flex start">
								<img src={post.avatar} alt="" className="social__avatar" />
								<div>
									<div className="social__date">{post.date}</div>
									<div className="social__user">{post.user}</div>
								</div>
							</div>
							<div className="social__content">{post.content}</div>
							<div className="social__footer"></div>
						</div>
					))}
				</div>
			</FrameBox>
		)
	}
}

export default SocialUI
