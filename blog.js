function getBlogLinks() {
	return [
		{
			name: "One year in software",
			path: "blog/one-year-in-software",
			tags: "Software development",
		},
		{
			name: "How to be perfect (book review)",
			path: "blog/how-to-be-perfect",
			tags: "Moral philosophy",
		},
		{
			name: "Approaching 3 years in software",
			path: "blog/approaching-3-years-in-software",
			tags: "Software development",
		},
	];
}

function appendBlogLinks() {
	const container = getElement("blogLinks");
	const data = getBlogLinks();
	for (let i = 0; i < data.length; i++) {
		const link = createLink(data[i].name, data[i].path + ".html");
		container.appendChild(link);
	}
}

queueOnLoadMethods([appendBlogLinks]);
