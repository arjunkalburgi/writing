---
title: Learning CSS Grid for my Portfolio
description: >-
  Been seeing a lot about CSS Grid on Twitter, decided to fix some smelly
  HTML/CSS on my portfolio using it!
date: '2019-04-25T14:51:02.322Z'
categories: []
keywords: []
slug: /@askalburgi/learning-css-grid-for-my-portfolio-7140f80ca936
cover: https://cdn-images-1.medium.com/max/400/1*ErpqfbqYAI0nxy1UXajRcQ.png
---

> Been seeing a lot about CSS Grid on Twitter, decided to fix some smelly HTML/CSS on my portfolio using it!

It seems like I’ve settled into a learning process. As with [learning Vue.js](https://medium.com/arjunkalburgi/viewing-vue-with-theradlist-8851502ab709) and [learning sketch-noting](https://medium.com/arjunkalburgi/arty-notes-sketch-noting-my-thoughts-e29f142a9eb4), I started with content.

In this case it was this [article](https://css-tricks.com/snippets/css/complete-guide-grid/) on CSS Tricks, it went over the basics of CSS Grid and how to use it.

```css
.container { }
.item {  grid-column-start: <number>;  grid-column-end: <number>;  grid-row-start: <number>;  grid-row-end: <number>; }
```

With this much alone I was able to begin using the Grid for what I needed. I didn’t need to go over `grid-template-areas`, grid gaps and item alignments. Although they would be really useful.

Instead I needed this CodePen found in the article:

I began working in my own CodePen and didn’t define my grid properly so I went to an example to see how they had done it.

Once I figured it out I went on to finish recreating the layout. That became v1, which you can see here:

Basic html and css

Next I needed to animate the images like on my Portfolio. I copied over the Javascript and attached the necessary Javascript files (jQuery and [Paroller](https://tgomilar.github.io/paroller.js/)) to make the parallax effect.

This became v2 which is here:

Finally, I needed to make it responsive just like on my website. This is the real reason I wanted to update using CSS Grid. In the current version, I have additional HTML tags which I hide and show for mobile and desktop. I no longer wanted that extra HTML and CSS.

I began with removing the `display: grid` from the container and then followed through adjusting all the other elements.

And just like that. We have our completely old website with a brand new grid layout system. And by golly was that easy and pumpkin pie. The grid system is awesome for sure.

[This is the commit](https://github.com/askalburgi/askalburgi.github.io/commit/00260e1192b41bc0e772f8c899e5ce8bae3d4ef2) where I make the move to the Grid System. In the HTML, I’m able to reduce 40 lines of code and in the CSS, I’m able to reduce ~11 lines.

![](https://cdn-images-1.medium.com/max/400/1*ErpqfbqYAI0nxy1UXajRcQ.png)
![](https://cdn-images-1.medium.com/max/400/1*3g_xFvG3AO3u9fvzr7PGGQ.png)
![](https://cdn-images-1.medium.com/max/400/1*tT72BY7voH4t1u4L1uOIww.png)

Especially in the HTML, I was able to reduce a lot. Honestly it speaks more to the terrible HTML I had before than to how great the Grid System is, but either way, I was able to fix the issue that I had!
