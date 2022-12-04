---
layout: splash
classes:
  - landing
permalink: /
author_profile: true
feature_row:
  - image_path: /assets/images/site/home.jpg
    alt: "Reality Adjustments"
    title: "Reality Adjustments"
    excerpt: "An interactive game/ poetry pamphlet exploring the mutating streets of a strange city."
    url: /reality-adjustments/
    btn_label: "Read now"
    btn_class: "btn--primary"
  - image_path: /assets/images/site/refractioncrop.png
    alt: "Refraction"
    title: "Refraction"
    excerpt: "A small pamphlet I self published about missing the sea and trying to find peace in chaotic times"
    url: /refractionpamphlet/
    btn_label: "Download for free"
    btn_class: "btn--primary"
  - image_path: /assets/images/site/ourvoicescrop.jpg
    alt: "Our Voices in the Chaos"
    title: "Our Voices in the Chaos"
    excerpt: "A erasure and traditional pamphlet dealing with ghosts, apocalypses and anxiety."
    url: /ourvoicesinthechaos/
    btn_label: "Learn more"
    btn_class: "btn--primary"
---
![image-left](/assets/images/site/headshotsmall.jpg){: .align-left}

# Hello and welcome to my site

I'm a poet and short story writer based in Bristol, UK, who writes surreal and imagistic work. I also perform as a spoken word artist. My writing has been nominated for the Forward Prize and has appeared in <em>Neon Magazine</em>, <em>Nine Muses Poetry</em> and <em>Marble Poetry</em>.

This website has all my writings, my books and a long running blog on art, politics and anything else I fancy.

[Here](https://notes.davidralphlewis.co.uk/now) is what I'm up to now.
<br>
<br>
<a href="/about/" class="btn btn--primary">More about me</a> <a href="mailto:contact@davidralphlewis.co.uk" class="btn btn--primary">Contact me</a>
<br>
<br>
<br>
<br>
<br>

{% include feature_row %}

<h2>Recent Posts</h2>
<br>
{% for post in site.posts limit:5 %}
{% include post-card.html %}
{% endfor %}

{% include mailchimp.html %}
