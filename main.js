function createNav() {
	const nav = createElement("nav");
	const data = getNavLinks();
	for (let i = 0; i < data.length; i++) {
		nav.appendChild(createLink(data[i].name, data[i].path));
	}

	return nav;
}

function getNavLinks() {
	return [
		{
			name: "Home",
			path: createUrl("index.html"),
		},
		{
			name: "Blogs",
			path: createUrl("blog.html"),
		},
	];
}

function createUrl(pathSuffix) {
	const currentUrl = window.location.href;
	const baseUrl = currentUrl.includes("C:/Users/")
		? "file:///C:/Users/Lachlan/Dev/mysite/"
		: "https://lachlanstephan.github.io/";

	return new URL(pathSuffix, baseUrl);
}

function createLink(name, path) {
	const link = createElement("a");
	link.innerHTML = name;
	link.setAttribute("href", path);

	return link;
}

function createElement(name) {
	return document.createElement(name);
}

function getElement(id) {
	return document.getElementById(id);
}

function appendNavToHeader() {
	const h = document.getElementById("header");
	h.prepend(createNav());
}

function queueOnLoadMethods(methods) {
	for (let i = 0; i < methods.length; i++) {
		window.addEventListener("load", function () {
			methods[i]();
		});
	}
}

queueOnLoadMethods([appendNavToHeader]);
