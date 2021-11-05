function getUsers() {
	const users = [
		{
			_id: "10239430",
			name: "pinco pallo",
			pg: {
				_id: "78473892",
				name: "Michael Douglas",
				img: "https://picsum.photos/200"
			},
			isAdmin: true
		},
		{
			_id: "102394301",
			name: "dodiz",
			pg: {
				_id: "847392",
				name: "Julia Roberts",
				img: "https://picsum.photos/200"
			},
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394302",
			name: "Marzia",
			pg: {
				_id: "390348029",
				name: "Jack Nicholson",
				img: "https://picsum.photos/200"
			},
			isAdmin: true
		},
		{
			_id: "102394303",
			name: "Giuseppe",
			pg: {
				_id: "..iuqweioe",
				name: "Will Smith",
				img: "https://picsum.photos/200"
			},
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394304",
			name: "asdrubale",
			pg: {
				_id: "9548503",
				name: "Jennifer Lawrence",
				img: "https://picsum.photos/200"
			},
			isAdmin: false,
			isBusy: true
		}
	]
	return users
}

export default {
	getUsers
}
