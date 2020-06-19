---
layout: default
comments: false
author: false
masthead_style: none
social: false
---
 <img src="/assets/images/site/me.jpg" alt="Photo taken by Sam Cavender @samsnapsalot" class="responsive">

I'm a poet and short story writer based in Bristol, UK, whose work has appeared in *Neon Magazine*, *Nine Muses Poetry* as well as the *Lies, Dreaming* podcast. On this website, David maintains a blog about writing, art and politics as well as any other random topic. Often I scrawl over newspapers to create blackout poetry. When not writing, I enjoy dancing badly at gigs, attempting to grow vegetables and taking photos. I understand a very, very small amount of what is going on in the world.

You can follow me on <a href="https://twitter.com/davidralphlewis" rel="me">Twitter</a>, [Instagram](https://www.instagram.com/davidralphlewis), [Facebook](https://www.facebook.com/davidralphlewis) and & Goodreads if you want.

Or you can <a href="mailto:contact@davidralphlewis.co.uk" rel="me">contact me here.</a> I'm available for live gigs, commissions or anything else.

<hr>
{% include mailchimp.html %}
<br />
## [Recent Posts](/articles/)

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}
<br >
