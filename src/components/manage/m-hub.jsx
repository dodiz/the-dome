import React, { useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const ManageHub = ({ label, categories, service, path }) => {
	const [items, setItems] = useState([])
	const [current, setCurrent] = useState({})

	async function pop(item) {
		try {
			const _items = [...items]
			const index = _items.indexOf(item)
			_items.splice(index, 1)
			await service.remove(item._id)
			toast.success("Elemento eliminato")
			setItems(_items)
		} catch (e) {
			toast.error(e)
		}
	}
	async function load(category) {
		try {
			const items = await service.getFromCategory(category._id)
			setItems(items)
			setCurrent(prev => (category == prev ? null : category))
		} catch (e) {
			toast.error("Si è verificato un errore con l'eliminazione")
		}
	}

	return (
		<>
			<div className="flex">
				<h3>Gestisci {label}</h3>
				<Link to={`/land/manage/${path}/new`} className="link">
					Aggiungi
				</Link>
			</div>
			{categories.map(category => (
				<div key={category._id} className="manage-frame mt-1">
					<div className="flex p-2 link" onClick={() => load(category)}>
						<h3>{category.label}</h3>
					</div>
					{category === current ? (
						items.length ? (
							items.map(item => (
								<div key={item._id} className="pb-2 pl-2 pr-2 link flex">
									<Link
										className="link"
										to={`/land/manage/${path}/${item._id}`}>
										{item.label}
									</Link>
									<span
										className="link secondary ml-auto"
										onClick={() => pop(item)}>
										Cancella
									</span>
								</div>
							))
						) : (
							<div className="pb-2 pl-2">La sezione è vuota</div>
						)
					) : null}
				</div>
			))}
		</>
	)
}

export default ManageHub
