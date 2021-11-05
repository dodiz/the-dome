import React from "react"
import BModal from "react-bootstrap/Modal"
import { FrameLines, Text } from "@arwes/core"

const Modal = ({ title, children, palette, ...rest }) => {
	return (
		<BModal size="lg" centered {...rest}>
			<FrameLines palette={palette || ""}>
				{title && (
					<BModal.Header closeButton>
						<Text as="h1">{title}</Text>
					</BModal.Header>
				)}
				{children}
			</FrameLines>
		</BModal>
	)
}

export default Modal
