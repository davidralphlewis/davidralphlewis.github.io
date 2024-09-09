---
title: David Ralph Lewis
layout: "base.njk"
---

# Hello!

I'm a poet and short story writer based in the south west of the UK, who writes surreal and imagistic work. I mess around with words and self publish, both here and in real life. I also perform as a spoken word artist, haunting open mics with my nonsense. 

My writing has appeared in <em>Neon Magazine</em>, <em>Nine Muses Poetry</em> and <em>Marble Poetry</em>.

This website has all my writings and my books. It's a work in progress as I switch from Jekyll to Eleventy, but we are mostly there.

It has a blog I've been maintaining for 8 years. Subjects include art, politics, poems and anything else I fancy.

[Here](https://notes.davidralphlewis.co.uk/now) is what I'm up to now.


## Recent Posts

<ul>
{% assign top_posts = collections.posts | reverse %}
{% for post in top_posts limit:5 | reverse %}

<li><a href="{{post.url}}">{{ post.data.title }}</a> - <i><time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time><br/></i></li>
{% endfor %}
</ul>

[All Posts](/blog)



 
