module.exports = {
	tags: ["projects"],
	category: "Other",
	layout: "layouts/project.njk",
	permalink: "/projects/{{category|slugify}}/{{title|slugify}}/index.html",
};
