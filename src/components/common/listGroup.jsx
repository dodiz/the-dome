import React, { useState } from "react"
import PropTypes from "prop-types"

import Icon from "./icon"

export default function ListGroup({
	items,
	valueProperty,
	textProperty,
	onItemSelect,
	selectedItem
}) {
	const [expanded, setExpanded] = useState(false)

	const toggleOpen = () => setExpanded(prev => !prev)

	const findSelectedItem = () => {
		try {
			return selectedItem[textProperty]
		} catch {
			return items[0][textProperty]
		}
	}

	const selectItem = item => {
		toggleOpen()
		onItemSelect(item)
	}

	return (
		<ul className={`list list-group ${expanded && "collapsible--expanded"}`}>
			<div className="list-group__mobile-title" onClick={toggleOpen}>
				<div className="link--active link">{findSelectedItem()}</div>
				<Icon
					pulse
					secondary={expanded}
					round
					src="/images/icons/arrow-down.svg"
					className="icon--arrow-down list-group__icon"
				/>
			</div>
			<div className="collapsible__content">
				{items.map(item => (
					<li
						onClick={() => selectItem(item)}
						className={`link list-group__item ${
							selectedItem === item && "link--active"
						} `}
						key={item[valueProperty]}>
						{item[textProperty]}
					</li>
				))}
			</div>
		</ul>
	)
}

ListGroup.propTypes = {
	items: PropTypes.array.isRequired,
	onItemSelect: PropTypes.func.isRequired
}
ListGroup.defaultProps = {
	valueProperty: "_id",
	textProperty: "name"
}
