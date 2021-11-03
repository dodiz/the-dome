import React from "react"
import { FrameBox, Text } from "@arwes/core"
import newsService from "../services/newsService"

class NewsUI extends React.Component {
	state = {
		news: []
	}

	componentDidMount() {
		const news = newsService.getNews()
		this.setState({ news })
	}
	render() {
		const { news } = this.state
		return (
			<FrameBox palette="secondary">
				<Text as="h4" style={{ margin: 0 }}>
					News
				</Text>
				<div className="line extend secondary" />
				<div className="ui__news">
					{news.map(item => (
						<div className="ui__news-item">
							<em>{item.date}</em>: {item.content}
						</div>
					))}
				</div>
			</FrameBox>
		)
	}
}

export default NewsUI
