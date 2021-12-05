import { toast } from "react-toastify"

import Form from "../common/form"

import { formatToId } from "../../tools/format"

class ManageForm extends Form {
	state = {
		id: "",
		data: {},
		errors: {}
	}

	async componentDidMount() {
		const id = this.props.match.params.id
		if (id === "new") return
		try {
			const data = await this.service.getFromId(id)
			this.setState({ id, data: this.mapToViewModel(data) })
			if (this.mount) this.mount()
		} catch (ex) {
			toast.error(ex)
			this.props.history.replace("/not-found")
		}
	}

	mapToViewModel(model) {
		const _data = {}
		const { data } = this.state
		Object.keys(data).forEach(key => {
			_data[key] = model[key] || data[key]
		})
		return _data
	}

	handleListSelection = (_list, id) => {
		const { data } = this.state
		const { [_list]: __list } = data
		const list = [...__list]
		if (list.find(i => i === id)) {
			const index = list.indexOf(id)
			list.splice(index, 1)
		} else list.push(id)
		this.setState({ data: { ...data, [_list]: list } })
	}

	doSubmit = async () => {
		try {
			const { data } = this.state
			const id = formatToId(data.label)
			await this.service.update(id, data)
			toast.success("Operazione completata")
			this.props.history.push(this.path)
		} catch (ex) {
			toast.error(ex)
		}
	}
}

export default ManageForm
