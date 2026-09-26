---
title: Blog
layout: "base.njk"
pagination:
  data: collections.posts
  size: 100
  alias: postslist
  reverse: true
---

[Categories](/categories)

# All Blog posts

<ul>
{% for post in postslist %}
<li> <a href="{{post.url}}">{{ post.data.title }}</a> - <i><time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time><br/></i> </li>
{% endfor %}
</ul>




{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}