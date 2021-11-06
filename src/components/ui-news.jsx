import React from "react"
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
			<div className="ui__box-content">
				{news.map(item => (
					<div key={item._id} className="ui__news-item">
						<em>{item.date}</em>: {item.content}
					</div>
				))}
			</div>
		)
	}
}

export default NewsUI
