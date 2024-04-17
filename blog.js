function getBlogLinks() {
    return [
        {
            "name": "Approaching 3 years in software",
            "path": "blog/approaching-3-years-in-software.html",
            "tags": "Software development"
        },
    ];
}

function appendBlogLinks() {
    const container = getElement('blogLinks');
    const data = getBlogLinks();
    for (let i = 0; i < data.length; i++) {
        const link = createLink(data[i].name, data[i].path);
        container.appendChild(link);
    }
}

queueOnLoadMethods([
    appendBlogLinks,
]);
