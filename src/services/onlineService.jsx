function getUsers() {
	const users = [
		{
			_id: "10239430",
			name: "Michael Douglas",
			img: "https://picsum.photos/200",
			isAdmin: true
		},
		{
			_id: "102394301",
			name: "Julia Roberts",
			img: "https://picsum.photos/200",
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394302",
			name: "Jack Nicholson",
			img: "https://picsum.photos/200",
			isAdmin: true
		},
		{
			_id: "102394303",
			name: "Will Smith",
			img: "https://picsum.photos/200",
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394304",
			name: "Jennifer Lawrence",
			img: "https://picsum.photos/200",
			isAdmin: false,
			isBusy: true
		}
	]
	return users
}

export default {
	getUsers
}
