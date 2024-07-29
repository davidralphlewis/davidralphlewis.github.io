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

	const markdownItOptions = {
        html: true,
        linkify: true
    };
    
    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(function(md) {
        // Recognize Mediawiki links ([[text]])
        md.linkify.add("[[", {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: match => {
                const parts = match.raw.slice(2,-2).split("|");
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                match.text = (parts[1] || parts[0]).trim();
                match.url = `/notes/${parts[0].trim()}/`;
            }
        })
    })
    
    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })


    return {
dir: {
    input: "src",
    output: "public",
},
    };
};
