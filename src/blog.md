---
layout: "base.njk"
title: Blog
permalink: /blog/
pagination:
  data: collections.postsByYear
  size: 1
  alias: posts
  reverse: true
---

[Categories](/posts/tag.html)

<ul>
  {% for post in collections.postsByYear[posts] | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
  {% endfor %}
</ul>

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}