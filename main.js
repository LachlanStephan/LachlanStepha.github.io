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

function createFooter() {
	footer = createElement("footer");
	address = createElement("address");
	a = createLink("Email", "mailto:ljstephan116@gmail.com");
	address.appendChild(a);
	footer.appendChild(address);
	addClass(footer, "footer");

	return footer;
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

function addClass(element, className) {
	element.classList.add(className);
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

function appendFooterToEndOfMain() {
	const b = document.getElementsByTagName("body")[0];

	b.appendChild(createFooter());
}

function queueOnLoadMethods(methods) {
	for (let i = 0; i < methods.length; i++) {
		window.addEventListener("load", function () {
			methods[i]();
		});
	}
}

function applyTheme() {
	html = document.documentElement;
	addClass(html, "theme");
}

queueOnLoadMethods([appendNavToHeader, appendFooterToEndOfMain, applyTheme]);
