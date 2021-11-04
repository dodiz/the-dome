function getPosts() {
	const posts = [
		{
			_id: Math.random(),
			user: "Michael Douglas",
			avatar: "https://picsum.photos/200",
			content:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium iure voluptatum sint. Quisquam, temporibus labore maxime quam quas facere repudiandae. Fuga error fugiat nulla.",
			date: "qualche secondo fa"
		},
		{
			_id: Math.random(),
			user: "Julia Roberts",
			avatar: "https://picsum.photos/200",
			content:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium iure voluptatum sint. Quisquam, temporibus labore maxime quam quas facere repudiandae. Fuga error fugiat nulla.",
			date: "2 giorni fa"
		},
		{
			_id: Math.random(),
			user: "Jack Nicholson",
			avatar: "https://picsum.photos/200",
			content:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium iure voluptatum sint. Quisquam, temporibus labore maxime quam quas facere repudiandae. Fuga error fugiat nulla.",
			date: "1239219"
		},
		{
			_id: Math.random(),
			user: "Will Smith",
			avatar: "https://picsum.photos/200",
			content:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium iure voluptatum sint. Quisquam, temporibus labore maxime quam quas facere repudiandae. Fuga error fugiat nulla.",
			date: "qualche secondo fa"
		}
	]
	return posts
}

export default {
	getPosts
}
