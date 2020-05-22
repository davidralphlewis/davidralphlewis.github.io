---
layout: archive
title: Sitemap
description: "Here There Be Treasure"
---
{% include logic.html %}

<div class="anchors">
    <div>
        <h1>Pages</h1>
        <div class="archive pages-archive">
            <div class="list-group">
                {% assign pages = site.pages | sort: "url" %}
                {% for page in pages %}
                    {% unless page.url == "/" %}
                        <a href="{{ page.url }}" title="{{ page.title }}">{{ page.title }}</a>
                    {% endunless %}
                {% endfor %}
            </div>
        </div>
    </div>
    <div>
        <h1>Articles</h1>
        <div class="archive article-archive">
            <div class="list-group">
                {% assign articles = site.posts %}
                {% for article in articles %}
                    {% capture this_year %}{{ article.date | date: "%Y" }}{% endcapture %}
                    {% capture next_year %}{{ article.previous.date | date: "%Y" }}{% endcapture %}
                    
                    {% if forloop.first %}
                        <h2 id="{{ this_year }}" class="my-0">{{ this_year }}</h2>
                    {% endif %}

                    <a href="{{ article.url }}" title="{{ article.title }}">{{ article.title }}</a>

                    {% if forloop.last %}
                    {% else %}
                        {% if this_year != next_year %}
                            <h2 id="{{ next_year }}" class="mb-0">{{ next_year }}</h2>
                        {% endif %}
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>