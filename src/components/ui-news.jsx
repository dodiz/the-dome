import React from "react"
import { FrameBox, Text } from "@arwes/core"

class NewsUI extends React.Component {
	render() {
		return (
			<FrameBox palette="secondary" className="ui__box">
				<div className="ui__news">
					<Text as="h4" style={{ margin: "0" }}>
						News
					</Text>
					<div className="line extend secondary" />
					<div className="ui__news-content">
						<Text className="ui__news-item">
							<em>11:25</em>: Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Alias non pariatur odio autem quibusdam eligendi quasi eius
							magnam, quam cupiditate.
						</Text>
					</div>
				</div>
			</FrameBox>
		)
	}
}

export default NewsUI
