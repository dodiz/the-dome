import React, { useEffect, useState, useRef } from "react"
import CircleUI from "../media/circle-ui.svg"
import RadialMenu from "../classes/radial-menu"

const PgMenuUI = ({ show, onClose }) => {
	const overlayRef = useRef()
	useEffect(() => {
		const svgMenu = new RadialMenu({
			parent: overlayRef.current,
			size: 380,
			closeOnClick: true,
			menuItems: [
				{
					id: "item1",
					title: "Anagrafica"
				},
				{
					id: "item2",
					title: "Skills"
				},
				{
					id: "item2",
					title: "Inventario"
				},
				{
					id: "item2",
					title: "Affetti"
				},
				{
					id: "item2",
					title: "Banca"
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
			],
			onClick: function (item) {
				console.log("You have clicked:", item)
			},
			onClose: onClose
		})
		svgMenu.open()
	}, [])
	return (
		<div
			ref={overlayRef}
			className={`${show ? "" : "hide"} ui__pg-menu-overlay`}>
			<img src={CircleUI} className="ui__circle" />
			<img
				src="https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"
				className="ui__circle-avatar"
			/>
		</div>
	)
}

export default PgMenuUI
