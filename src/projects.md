---
title: Projects
layout: "base.njk"
pagination:
  data: collections.projects
  size: 10
  alias: postslist
  reverse: true
---

# All Blog posts

{% for post in projectslist %}
<p>
<h2> <a href="{{post.url}}">{{ post.data.title }}</a> </h2>
<i><time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time><br/></i>
{% excerpt post %}
</p>
{% endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}