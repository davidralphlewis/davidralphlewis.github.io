---
title: Blog
layout: "base.njk"
pagination:
  data: collections.posts
  size: 10
  alias: postslist
  reverse: true
---

[Categories](/categories)

# All Blog posts

{% for post in postslist %}
<p>
<h2> <a href="{{post.url}}">{{ post.data.title }}</a> </h2>
<i>{{ post.date }}<br/></i>
{% excerpt post %}
</p>
{% endfor %}

{% if pagination.href.previous %}
 <button class="nav"> <a href="{{pagination.href.previous}}">Previous Page</a></button>
{% endif %}
{% if pagination.href.next %}
  <button class="nav"> <a href="{{pagination.href.next}}">Next Page</a></button>
{% endif %}