function getBlogData() {
	return [
		{
			id: "4",
			date: "20 Apr 2024",
			name: "La La Land",
			path: "blog/la-la-land",
			tags: "Film review, Art",
		},
		{
			id: "3",
			date: "Apr 2024",
			name: "Approaching 3 years in software",
			path: "blog/approaching-3-years-in-software",
			tags: "Software development",
			wip: true,
		},
		{
			id: "2",
			date: "20 Nov 2022",
			name: "How to be perfect",
			path: "blog/how-to-be-perfect",
			tags: "Moral philosophy, Book review",
		},
		{
			id: "1",
			date: "15 Jun 2022",
			name: "One year in software",
			path: "blog/one-year-in-software",
			tags: "Software development",
		},
	];
}

function appendBlogLinks() {
	const container = getElement("blogLinks");
	if (!container) {
		return;
	}

	const data = getBlogData();
	for (let i = 0; i < data.length; i++) {
		let text = "(" + data[i].id + ") " + data[i].name;

		if (data[i].wip) {
			text = text + " (wip)";
		}

		container.appendChild(createLink(text, data[i].path + ".html"));
	}
}

function assembleBlogDatum() {
	const e = getElement("blog-data");
	if (!e) {
		return;
	}

	datum = getBlogDatum(getCurrentBlogId());
	if (!datum) {
		return;
	}

	e.appendChild(createElement("p", "Written: " + datum.date));
	e.appendChild(createElement("p", "Tag(s): " + datum.tags));
}

function getCurrentBlogId() {
	const b = document.getElementsByTagName("body")[0];
	if (b.dataset.id) {
		return b.dataset.id;
	}
}

function getBlogDatum(id) {
	data = getBlogData();
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			return data[i];
		}
	}
}

queueOnLoadMethods([appendBlogLinks, assembleBlogDatum]);
