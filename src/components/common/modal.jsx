import React from "react"
import BModal from "react-bootstrap/Modal"
import { FrameLines, Text } from "@arwes/core"

const Modal = ({ title, children, palette, small, ...rest }) => {
	return (
		<BModal size={small ? "sm" : "lg"} centered {...rest}>
			<FrameLines palette={palette || ""}>
				{title && (
					<BModal.Header closeButton>
						<Text as={small ? "h3" : "h1"}>{title}</Text>
					</BModal.Header>
				)}
				{children}
			</FrameLines>
		</BModal>
	)
}

export default Modal
