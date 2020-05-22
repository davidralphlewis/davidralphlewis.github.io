---
# Page Settings
layout: page # page layout, e.g. default, page
title: "Jekyll Bootstrap" # page title (seo, navigation, masthead), e.g. "string"
description: "The Bootstrap Theme for Jekyll" # page description (seo, masthead), e.g. "string"
excerpt: "The Bootstrap Theme for Jekyll" # post excerpt (seo, articles, archive excerpt), e.g. "string"
date: 2019-09-24 00:00:00 -0500 # page publish date (seo, metadata), e.g. YYYY-MM-DD hh:mm:ss TZD
last_modified: # page last modified date (metadata, rss), e.g. YYYY-MM-DD hh:mm:ss TZD

# Page Metadata
keywords: # appends keywords to seo meta tag, e.g. "comma, delimited, string"
author: # author defined in _data/humans.yml, e.g. "string", false
author: # defined guest author
  name: # guest author name, e.g. "Guest Author"
  avatar: # guest author picture, e.g. /path/to/image.jpg
  homepage: # guest author homepage, e.g. https://guestauthor.com/
  twitter: # guest author twitter username, e.g. GuestAuthor

# Page Style
alert: # enable page level alert bar above content, e.g. "string", false
alert_style: # alert style, e.g. primary, secondary, success, danger, warning, info, light, dark; default: primary
masthead_style: # default masthead style, e.g. banner, plain; default: banner
featured_image: # custom featured image path (masthead, social, etc.), e.g. '/path/to/image.jpg', false (hide default featured image)
social: # display social sharing links on pages, e.g. true, false
---

A slim, fast, and responsive <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a> template for <a href="https://jekyllrb.com" target="_blank">Jekyll</a> websites on <a href="https://pages.github.com/" target="_blank">Github</a>.

# Features

**Jekyll Bootstrap** is designed to be an inclusive framework for Jekyll blogs hosted on GitHub Pages.

## Assets

The entire framework is served on officially supported Content Delivery Networks for a faster user experience.

- <a href="https://getbootstrap.com/" target="_blank">Bootstrap v4.3.1</a> via `https://stackpath.bootstrapcdn.com/`
- <a href="https://fontawesome.com/" target="_blank">Font Awesome v5.0.7</a> via `https://use.fontawesome.com/`
- <a href="https://jquery.com/" target="_blank">jQuery v3.3.1</a> via `https://code.jquery.com/`
- <a href="https://www.bryanbraun.com/anchorjs/" target="_blank">AnchorJS v4.2.0</a> via `https://cdnjs.cloudflare.com/`

## Default Settings

```yml
# Default Settings
masthead_style: # default masthead style, e.g. banner, plain; default: banner
featured_image: /assets/images/site/featured-image.jpg # default featured image path (seo, masthead, social, rss), e.g '/path/to/image.jpg', false (hide default featured image)
```

## Site Wide Settings

```yml
# Site Wide Settings
alert: # enable site wide alert bar above navigation, e.g. "String", false
alert_style: # alert style, e.g. primary, secondary, success, danger, warning, info, light, dark; default: primary
```

## Page Settings

```yml
# Page Settings
layout: # page layout, e.g. default, page
title: # page title (seo, navigation, masthead), e.g. "string"
description: # page description (seo, masthead), e.g. "string"
date: # page publish date (seo, metadata), e.g. YYYY-MM-DD hh:mm:ss TZD
last_modified: # page last modified date (metadata, rss), e.g. YYYY-MM-DD hh:mm:ss TZD

# Page SEO
keywords: # appends keywords to seo meta tag, e.g. "comma, delimited, string"

# Page Style
alert: # enable page level alert bar above content, e.g. "string", false
alert_style: # alert style, e.g. primary, secondary, success, danger, warning, info, light, dark; default: primary
masthead_style: # default masthead style, e.g. banner, plain; default: banner
featured_image: # custom featured image path (masthead, social, etc.), e.g. '/path/to/image.jpg', false (hide default featured image)
social: # display social sharing links, e.g. true, false

# Page Metadata
author: # author defined in _data/humans.yml; e.g. "string", false
author: # custom defined guest author
  name: # guest author name, e.g. "Guest Author"
  avatar: # guest author picture, e.g. /path/to/image.jpg
  homepage: # guest author homepage, e.g. https://guestauthor.com/
  twitter: # guest author twitter username, e.g. GuestAuthor
```