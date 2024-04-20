function getBlogData() {
	return [
		{
			id: "3",
			date: "TBA",
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
		if (data[i].wip) {
			continue;
		}

		const link = createLink(
			"(" + data[i].id + ") " + data[i].name,
			data[i].path + ".html"
		);
		container.appendChild(link);
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

	const date = createElement("p", "Written: " + datum.date);
	const tags = createElement("p", "Tag(s): " + datum.tags);

	e.appendChild(date);
	e.appendChild(tags);
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
