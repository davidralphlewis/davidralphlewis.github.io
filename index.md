---
layout: default
comments: false
author: false
masthead_style: none
social: false
---
<div class="container">
  <div class="row">
<div class="col-md-7 col-sm-12 mx-sm-2 mx-md-0 my-sm-1 my-sm-0">
<figure class="figure">
 <img src="/assets/images/site/me.jpg" alt="Photo taken by Sam Cavender @samsnapsalot" class="img-fluid">
<figcaption class="figure-caption">Photo taken by <a href="https://www.instagram.com/samsnapsalot/">Sam Cavender</a></figcaption>
</figure>
</div>
<div class="col-md-4 col-sm-12 mx-sm-2 my-sm-1">
<p class="text-justify">I'm a poet and short story writer based in Bristol, UK, whose work has been nominated for the Forward Prize and has appeared in <em>Neon Magazine</em>, <em>Nine Muses Poetry</em> and <em>Marble Poetry</em>. My first poetry chapbook, <em><a href="/ourvoicesinthechaos/">Our Voices in the Chaos</a></em>, was published by Selcouth Station in October 2019. I self published a second tiny pamphlet in October 2020 called <em><a href="/refractionpamphlet/">Refraction.</a></em></p>
</div>
</div>
<div class="row">
<div class="col-md-8 col-sm-12 mx-sm-2 my-sm-1">
<p>I have a number of other books available, including three that are free to download. <a href="/mybooks/">Go here</a> to browse and download. On this website, I maintain a blog about writing, art and politics as well as any other random topic. Often I scrawl over newspapers to create erasure poetry.</p>

<p>When not writing, I enjoy dancing badly at gigs, attempting to grow vegetables and taking photos. I understand a very, very small amount of what is going on in the world.</p>

<p>You can follow me on: <a href="https://twitter.com/davidralphlewis" rel="me">Twitter</a>, <a href="https://Instagram.com/davidralphlewis" rel="me">Instagram</a> and <a href="https://facebook.com/davidralphlewis" rel="me">Facebook.</a></p>

<p>Or you can <a href="mailto:contact@davidralphlewis.co.uk" rel="me">contact me here.</a> I'm available for readings, commissions or anything else.</p>
</div>
<div class="col-md-3 col-sm-12 mx-sm-2 my-sm-1">
{% include mailchimp.html %}
Or subscribe to <a href="/feed.xml">updates via RSS</a>
</div>
</div>
</div>
<div class="container-fluid">

<br />
<div class="container">
<div class="row">
<div class="col-md-9 col-sm-12 mx-auto mx-md-0 my-sm-1 my-sm-0">
<h1><a href="/articles">Recent Posts</a></h1>

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}

</div>
</div>
</div>
