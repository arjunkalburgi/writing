---
title: Using the BEM methodology for my CSS classifications
description: >-
  I learned about CSS classification methodologies at the Web Unleashed
  conference I attended in early October (highly recommend attending…
date: '2018-10-25T02:45:35.697Z'
categories: []
keywords: []
slug: /@askalburgi/using-the-bem-methodology-for-my-css-classifications-a35172f90a04
---

I learned about CSS classification methodologies at the Web Unleashed conference I attended in early October (highly recommend attending if you’re a web developer). Using them is the same idea of using proper naming conventions for your property names, file names, and variable names.

I decided to start with [BEM](http://getbem.com), which stands for Block Element Modifier.

_The first time I used it, I got it all wrong and I wanted to write about my lesson._

I assumed that BEM was hierarchical, just like how we usually name variables and properties.

This led me to produce HTML like this:

![](https://cdn-images-1.medium.com/max/800/1*X7MIYOSLNPx05ZZ04UxDUA.jpeg)

`st` is my Block, `-tasks__(something)` are the Elements and `--stress` and `--fine` the Modifiers of certain elements.

This improper use led to the problem highlighted in blue in the above picture. I’ve got three buttons and they have wildly different class names.

They should be something like: `st-buttonsomething--stress`, `st-buttonsomething--fine`, and`st-buttonsomething--add`. This way I can have a single button style with slight differences in the modifiers.

The lesson I learned is that Element names don’t come from their position in the HTML but rather their style as a design asset.

I now have it like this:

![](https://cdn-images-1.medium.com/max/800/1*BqMc2OG08PhJ68VEnYWxJw.png)

Where elements don’t depend on their position but rather their function and design/look/style.

I changed the HTML of my buttons, but you can still see that I now have `st-buttonBg` as the Element class and `st-buttonBg--fine` as the Modifier class.

That’s a quick lesson I learned when using BEM. Thanks to [Paul Grant](http://twitter.com/cssinate) for helping me learn the lesson and encouraging me to write about it!

![](https://cdn-images-1.medium.com/max/800/1*OoTeOBZ4tF09RWuXkXNihA.jpeg)