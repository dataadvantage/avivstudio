module.exports = function (eleventyConfig) {
	eleventyConfig.addCollection("projectCategories", (collection) => {
		const projects = collection.getFilteredByTag("projects");
		const categories = projects.map((i) => i.data.category);
		return [...new Set(categories)];
	});

	eleventyConfig.addFilter("field", (array, field) => {
		const result = array.map((i) => {
			return i.data[field];
		});
		return result;
	});

	eleventyConfig.addFilter("unique", (array) => {
		return [...new Set(array)];
	});
};
