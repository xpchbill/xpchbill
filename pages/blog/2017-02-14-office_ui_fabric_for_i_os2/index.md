---
title: Office UI Fabric for iOS2
date: '2017-02-14T08:49:36.108Z'
layout: post
draft: true
place: blog
tags:
  - javascript
  - office ui fabric for
categories:
  - 前端
coverPhoto: "/running.jpg"
---
We're thrilled to announce the release of [Office UI Fabric for iOS](https://github.com/OfficeDev/Office-UI-Fabric-iOS). This is the first time we've brought the Office Design Language to a new platform. While it's not yet as full-featured as our web toolkit, this initial release includes core styles to lay the foundation: colors, typography, and simple components.

### Typography
> sfojsfjs

The type ramp is the same as we use on the web.
Note: The screenshot does not include all of the sizes available.
```js
import react from 'react';
var a = '123';
// ComponentA.js
export default {
  template: '<div>{{ message }}</div>',
  data () {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
```

### Colors
We've started with the core palette of theme, neutral, and accent colors that you'll find in Fabric for Web. In additional, we've included a hashing algorithm that returns a color for any given string.
```html
<!-- MyComponent.vue -->

<!-- css -->
<style>
.message {
  color: red;
}
</style>

<!-- template -->
<template>
  <div class="message">{{ message }}</div>
</template>

<!-- js -->
<script>
export default {
  props: ['message'],
  created() {
    console.log('MyComponent created!')
  }
}
</script>
```

### Components
Two simple components, InitialsView and LogoView, are included. These can be used to represent people, groups, or sites.

### Ready to start?
Swing by [the repository](https://github.com/OfficeDev/Office-UI-Fabric-iOS) to check out the readme and code. We'll be rolling out controls that leverage these assets in the future, so check back for more updates!
