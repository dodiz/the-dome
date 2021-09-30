import React, { Component } from "react"
import ListGroup from "./common/listGroup"
import Navbar from "./splash/navbar"

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
		selectedInfo: null
	}

	handleInfoSelect = selectedInfo => {
		this.setState({ selectedInfo })
	}

	render() {
		return (
			<div>
				<Navbar stick show={true} />
				<div>
					<ListGroup
						items={items}
						onItemSelect={this.handleInfoSelect}
						selectedItem={this.state.selectedInfo}
					/>
				</div>
			</div>
		)
	}
}

export default InfoPage
