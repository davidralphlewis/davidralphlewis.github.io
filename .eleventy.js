const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');
const markdownIt = require('markdown-it');


moment.locale('en');
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/style.css");
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
	eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString();
	  });
	  eleventyConfig.addCollection("posts", function(collection) {
		const coll = collection.getFilteredByTag("posts");
	
		for(let i = 0; i < coll.length ; i++) {
			const prevPost = coll[i-1];
			const nextPost = coll[i + 1];
	
			coll[i].data["prevPost"] = prevPost;
			coll[i].data["nextPost"] = nextPost;
		}
	
		return coll;
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
	import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: 'html',
		// optional, output image formats
		formats: ['webp'],
		// optional, output image widths
		widths: ['auto', 400, 800],
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: 'lazy',
			sizes: '100vw',
			decoding: 'async',
		},
	});
	
	const markdownItOptions = {
        html: true,
		breaks: true, 
        linkify: true
    };


    return {
dir: {
    input: "src",
    output: "public",
},
    };
};
