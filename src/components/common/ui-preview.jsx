import React from "react"
import { FrameBox } from "@arwes/core"

class PreviewUI extends React.Component {
	state = {
		posts: []
	}

	async componentDidMount() {
		const posts = await this.props.getService()
		this.setState({ posts })
	}

	render() {
		const { posts } = this.state
		const { onPgSelect, title } = this.props

		return (
			<FrameBox className="ui__box">
				<h4 className="ui__title">{title}</h4>
				<div className="preview">
					{posts.map(post => (
						<div key={post._id} className="preview__post">
							<div className="flex start">
								<img src={post.pg.img} alt="" className="preview__avatar" />
								<div>
									<div className="preview__date">{post.date}</div>
									<div
										className="preview__user"
										onClick={() => onPgSelect && onPgSelect(post)}>
										{post.pg.name}
									</div>
								</div>
							</div>
							<div className="preview__content">{post.content}</div>
							<div className="preview__footer"></div>
						</div>
					))}
				</div>
			</FrameBox>
		)
	}
}

export default PreviewUI
