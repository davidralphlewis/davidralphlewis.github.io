const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');

moment.locale('en');
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addWatchTarget("./src/style.css");
	eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString();
	  });
	 
	  eleventyConfig.addFilter('dateReadable', date => {
		return moment(date).utc().format('LL'); // E.g. May 31, 2019
	  });

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