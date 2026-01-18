const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');
const markdownIt = require('markdown-it');
const footnote_plugin= require ('markdown-it-footnote');
const EleventyPluginTagCloud = require("eleventy-plugin-tag-cloud");
const _defaults = {
  ignore: ['posts']
}

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
	
	
eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));
const markdownItOptions = {
        html: true,
		breaks: true, 
        linkify: true
    };


	  eleventyConfig.addPlugin(EleventyPluginTagCloud, {
    ignore: [ 'posts' ]
  });

    return {
dir: {
    input: "src",
    output: "public",
},
    };
  eleventyConfig.addFilter('tagCloudIndex', (posts = []) => {
    if (!posts.length) throw new Error('[@tagCloudIndex]: Invalid collection passed, no items');

    const tagMap = new Map();

    for (const post of posts) {
      const tags = post.data.tags;

      tags?.forEach(tag => tagMap.set(tag, (tagMap.get(tag) || 0) + 1));
    }
    
    return [...tagMap.entries()].map(([key, value]) => {
      return {
        tagName: key,
        tagAmount: value
      }
    })
  })

  eleventyConfig.addFilter('tagCloud', (posts = []) => {
    if (!posts.length) throw new Error('[@tagCloud]: Invalid collection passed, no items');

    const tagSet = new Set();

    for (const post of posts) {
      const { tags } = post.data;

      tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    const tags = [...tagSet];

    return tags;
  });
};

