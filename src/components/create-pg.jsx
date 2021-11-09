import React from "react"
import Form from "./common/form"
import { Text } from "@arwes/core"

class CreatePg extends Form {
	render() {
		return (
			<div>
				<Text as="h1" className="m-auto">
					Creazione del personaggio
				</Text>
				<Text as="div">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
					explicabo praesentium sapiente laboriosam nemo fuga porro amet natus
					totam recusandae temporibus fugit velit, est ipsa ratione ab vitae
					nostrum nobis voluptates, culpa debitis repudiandae. Dolor, libero.
					Illum repudiandae dolore consequuntur voluptas aspernatur. Atque
					sapiente corrupti distinctio provident tenetur eum aliquam?
				</Text>
			</div>
		)
	}
}

export default CreatePg
