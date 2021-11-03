import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router"
import CircleUI from "../media/circle-ui.svg"
import RadialMenu from "../classes/radial-menu"
import withSound from "./../hoc/withSound"

const menuItems = [
	{
		id: "schda",
		title: "Scheda",
		path: "/land/scheda"
	},
	{
		id: "skills",
		title: "Skills",
		path: "/land/skills"
	},
	{
		id: "inventory",
		title: "Inventario",
		path: "/land/inventario"
	},
	{
		id: "known",
		title: "Affetti",
		path: "/land/affetti"
	},
	{
		id: "bank",
		title: "Banca",
		path: "/land/banca"
	},
	{
		id: "off",
		title: "Social",
		path: "/land/social"
	},
	{
		id: "more",
		title: "Cambia Pg",
		items: [
			{
				id: "subitem1",
				title: "Subitem 1"
			},
			{
				id: "item2",
				title: "Subitem 2"
			}
		]
	}
]

const PgMenuUI = ({ show, onClose, sounds }) => {
	const overlayRef = useRef()
	const history = useHistory()

	function generateMenu() {
		const svgMenu = new RadialMenu({
			parent: overlayRef.current,
			menuItems,
			size: 380,
			closeOnClick: true,

			onClick: item => {
				sounds.click.play()
				if (item.path) history.push(item.path)
			},
			onClose: onClose,
			onHover: () => sounds.hover.play()
		})
		sounds.assemble.play()
		svgMenu.open()
	}

	useEffect(() => {
		generateMenu()
	}, [])
	return (
		<div ref={overlayRef} className={`${show ? "" : "hide"} overlay`}>
			<img alt="" src={CircleUI} className="ui__circle" />
			<img
				alt=""
				src="https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"
				className="ui__circle-avatar"
			/>
		</div>
	)
}

export default withSound(PgMenuUI)
