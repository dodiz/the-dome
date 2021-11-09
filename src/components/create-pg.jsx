import React from "react"
import Form from "./common/form"
import { Text } from "@arwes/core"

class CreatePg extends Form {
	state = {
		data: {},
		errors: {}
	}

	render() {
		return (
			<div className="land__content">
				<div className="line extend" />
				<Text as="h1" className="m-auto">
					Creazione del personaggio
				</Text>
				<Text as="div" className="mb-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
					explicabo praesentium sapiente laboriosam nemo fuga porro amet natus
					totam recusandae temporibus fugit velit, est ipsa ratione ab vitae
					nostrum nobis voluptates, culpa debitis repudiandae. Dolor, libero.
					Illum repudiandae dolore consequuntur voluptas aspernatur. Atque
					sapiente corrupti distinctio provident tenetur eum aliquam?
				</Text>
				<div className="line extend" />
			</div>
		)
	}
}

export default CreatePg
