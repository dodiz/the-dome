function getUsers() {
	const users = [
		{
			_id: "10239430",
			name: "Michael Douglas",
			img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Michael_Douglas_Deauville_2013.jpg",
			isAdmin: true
		},
		{
			_id: "102394301",
			name: "Julia Roberts",
			img: "https://biografieonline.it/img/bio/j/Julia_Roberts.jpg",
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394302",
			name: "Jack Nicholson",
			img: "https://biografieonline.it/img/bio/j/Jack_Nicholson.jpg",
			isAdmin: true
		},
		{
			_id: "102394303",
			name: "Will Smith",
			img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
			isAdmin: false,
			isBusy: true
		},
		{
			_id: "102394304",
			name: "Jennifer Lawrence",
			img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Jennifer_Lawrence_at_214._Wetten%2C_dass.._%3F_show_in_Graz%2C_8._Nov._2014_cropped.jpg",
			isAdmin: false,
			isBusy: true
		}
	]
	return [...users, ...users]
}

export default {
	getUsers
}
