const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');
const markdownIt =require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

moment.locale('en');
module.exports = function (eleventyConfig) {
  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  
  // configure the library with options
  let markdownLib =  markdownIt;
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItFootnote));
  // set the library to process markdown files
  config.setLibrary("md", markdownLib);

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

	// Create a collection of all tags used in /blog
  eleventyConfig.addCollection("tagList", (collection) => {
    const tagsSet = new Set();
    collection.getAll().forEach((item) => {
      if (item.data.tags) {
        // Ensure item.data.tags is an array, even if it's a single string
        const itemTags = Array.isArray(item.data.tags)
          ? item.data.tags
          : [item.data.tags];
        itemTags.forEach((tag) => tagsSet.add(tag));
      }
    });

    // Convert Set to Array and sort alphabetically
    return Array.from(tagsSet).sort();
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
	
};

    return {
dir: {
    input: "src",
    output: "public",
},
    }