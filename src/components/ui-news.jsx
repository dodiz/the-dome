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
			<FrameBox palette="secondary" className="ui__box">
				<h4 className="ui__title secondary">News</h4>
				<div className="ui__news ui__box-content">
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
