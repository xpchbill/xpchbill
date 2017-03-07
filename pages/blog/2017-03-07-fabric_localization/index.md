---
title: Fabric Localization
date: '2017-03-07T01:39:32.472Z'
layout: post
draft: true
place: blog
tags:
  - Javascript
  - Localization
  - Microsoft Fabric
categories:
  - Front End development
coverPhoto: null
---

## Right-to-left layouts

Fabric comes with an alternate CSS file for pages written in right-to-left (RTL) languages, such as Arabic and Hebrew. This reverses the order of columns in the responsive grid, making it easy to create an RTL layout without writing additional templates. Many icons are also reversed, particularly those used for navigation such as arrows.

### Implementation

Apply the “dir” attribute to the HTML tag, and reference the RTL version of Fabric.
```js
<html dir="rtl">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="fabric-[version].rtl.min.css">
</head>
...
</html>
```

### Directional icons

With the reading direction set to RTL and Fabric's RTL stylesheet referenced (see above), directional icons will automatically be substituted. These pairs of icons will be swapped when viewed on RTL pages:

### Language-optimized fonts

By default, Fabric presents all text using the Western European character set of Segoe UI. For languages with other characters, Fabric will either serve a version of Segoe UI with a different character set or use a system font.

### Implementation

The HTML “lang” attribute specifies the language of the element's content. This is typically applied to the root HTML element, where it will be inherited by the entire page. In this example the entire page is in Thai.

```js
<html lang="th-TH">...</html>
```

For pages with content in multiple languages, the “lang” attribute can be applied to individual elements. In this example, a page that is mostly Thai also contains some Vietnamese.

```js
<html lang="th-TH">
...
<section lang="vi-VN">...</section>
</html>
```
