import React, { Component } from "react"
import ListGroup from "./common/listGroup"
import Navbar from "./splash/navbar"
import { FrameBox, Text } from "@arwes/core"

const items = [
	{
		name: "Regolamento"
	},
	{
		name: "Ambientazione"
	},
	{
		name: "Razze"
	},
	{
		name: "Sistema di gioco"
	},
	{
		name: "Cazzi e mazzi"
	}
]

class InfoPage extends Component {
	state = {
		selectedInfo: items[0]
	}

	handleInfoSelect = selectedInfo => {
		this.setState({ selectedInfo })
	}

	render() {
		return (
			<div>
				<Navbar stick show={true} />
				<div
					className=""
					style={{
						display: "flex",
						margin: ".5rem auto",
						justifyContent: "space-evenly",
						width: "100%"
					}}>
					<ListGroup
						items={items}
						onItemSelect={this.handleInfoSelect}
						selectedItem={this.state.selectedInfo}
					/>
					<FrameBox
						className="arwes-framebox"
						hideShapes
						linesWidths={[2, 0, 2, 0]}
						palette="secondary">
						<div className="arwes__box">
							<Text as="h2" className="h2">
								{this.state.selectedInfo.name}
							</Text>
							<Text as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tempore, sunt quam nostrum est modi ipsam blanditiis deserunt
								doloribus illum fuga cumque eveniet soluta asperiores vero
								commodi laboriosam, corporis, omnis minima eum aperiam placeat
								debitis laborum. Veritatis maxime non incidunt reprehenderit
								unde fugiat facilis nisi vitae quas laboriosam culpa quasi enim
								officiis pariatur possimus deserunt, numquam repellendus nulla
								rem laborum quidem veniam reiciendis temporibus. Praesentium
								repellat fugiat saepe facere asperiores natus laborum
								repudiandae dolor dolorem dolorum, quam sit tempora minus
								laudantium obcaecati, commodi ab voluptates aliquam quasi est
								aut? Similique consequuntur sed ea odio eius tempore error neque
								quisquam, recusandae fugit!
							</Text>
						</div>
					</FrameBox>
				</div>
			</div>
		)
	}
}

export default InfoPage
