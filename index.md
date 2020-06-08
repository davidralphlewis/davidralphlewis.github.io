---
layout: page
title: "About" # page title (seo, navigation, masthead), e.g. "string"
description: # page description (seo, masthead), e.g. "string"
excerpt:  # post excerpt (seo, articles, archive excerpt), e.g. "string"
date: 2019-09-24 00:00:00 -0500 # page publish date (seo, metadata), e.g. YYYY-MM-DD hh:mm:ss TZD
last_modified: # page last modified date (metadata, rss), e.g. YYYY-MM-DD hh:mm:ss TZD

# Page Metadata
keywords: # appends keywords to seo meta tag, e.g. "comma, delimited, string"
author: false # author defined in _data/humans.yml, e.g. "string", false
author: false # defined guest author
  name: # guest author name, e.g. "Guest Author"
  avatar: # guest author picture, e.g. /path/to/image.jpg
  homepage: # guest author homepage, e.g. https://guestauthor.com/
  twitter: # guest author twitter username, e.g. GuestAuthor

# Page Style
alert: # enable page level alert bar above content, e.g. "string", false
alert_style: # alert style, e.g. primary, secondary, success, danger, warning, info, light, dark; default: primary
masthead_style: home # default masthead style, e.g. banner, plain; default: banner
featured_image: # custom featured image path (masthead, social, etc.), e.g. '/path/to/image.jpg', false (hide default featured image)
social: false # display social sharing links on pages, e.g. true, false
---
 <img src="/assets/images/site/me.jpg" alt="Photo taken by Sam Cavender @samsnapsalot" class="responsive">

David Ralph Lewis is a poet and short story writer based in Bristol, UK, whose work has appeared in Neon and DogEar magazines as well as the Lies, Dreaming podcast. He blogs regularly about politics and art and often scrawls over newspapers to create blackout poetry. When not writing, he enjoys dancing badly at gigs, attempting to grow vegetables and taking photos. He understands a very, very small amount of what is going on in the world.

On this website, David maintains a blog about writing, art and politics as well as any other random topic.

You can follow him on [Twitter](https://www.twitter.com/davidralphlewis), [Instagram](https://www.instagram.com/davidralphlewis), [Facebook](https://www.facebook.com/davidralphlewis) and & Goodreads if you want.

<hr>

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}
