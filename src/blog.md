---
title: Blog
layout: "base.njk"
pagination:
  data: collections.posts
  size: 50
  alias: postslist
  reverse: true
---

[Categories](/categories)

# All Blog posts
{% for post in postslist %}
<ul>
<li> <a href="{{post.url}}">{{ post.data.title }}</a> - <i><time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time><br/></i> </li>

</ul>


{% endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}