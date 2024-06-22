
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addWatchTarget("./src/style.css");
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

	function extractExcerpt(post) {
		if(!post.templateContent) return '';
		if(post.templateContent.indexOf('</p>') > 0) {
			let end = post.templateContent.indexOf('</p>');
			return post.templateContent.substr(0, end+4);
		}
		return post.templateContent;
	}

    return {
dir: {
    input: "src",
    output: "public",
},
    };
};