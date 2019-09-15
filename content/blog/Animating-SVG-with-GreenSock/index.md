---
title: "Animating SVG with GreenSock \U0001F9E6"
description: The next chapter in my quest to learn more about animating SVG on the web.
date: '2018-11-20T06:53:23.682Z'
categories: []
keywords: []
slug: /@askalburgi/animating-svg-with-greensock-6aa01219ed3b
---

> The next chapter in my quest to learn more about animating SVG on the web.

Previously, I used SVG’s `animate` tag to animate a new Slackify logo I was working on. Here I did the same thing but with the [GreenSock Animation Platform (GSAP, GreenSock)](https://greensock.com/).

Although I could have done the animation entirely in CSS, the purpose of this experiment was to see how I could animate using the multiple SVG’s I had created previously.

![](https://cdn-images-1.medium.com/max/800/1*AtJwk7_cpzGFJI6nZkMsjg.png)

This is the same screenshot of my Figma design asset from before. There are 4 paths here that I want to animate to each other with an easing between them.

With SVG’s `animate` the preferred effect was not achieved, though mostly the basic motion was.

At first I had a lot of trouble trying to adapt my SVG’s because GSAP isn’t perfectly meant to be used to manipulate the `d` path of SVG elements. However, I eventually figured out how to do it after a bunch of Google searches.

tl.to(dotA,   
      0.8, {  
      attr: {  
        d: "M59.0596 ... 959Z"  
      },   
      ease: Power1.easeInOut,  
  })

The trick just happened to be to wrap the `d` modification in the `attr` block. This successfully applied the `dotA` path element in the SVG with the new `d` path.

I went on to apply this same animation to the other 4 path elements.

The final result:

![](https://cdn-images-1.medium.com/max/800/1*GOG3jx9dVNpwbrq4TjvZAA.gif)

I have a theory as to why there is that strange sharpness of the dots during the animation, but that’s for another blog!

![](https://cdn-images-1.medium.com/max/800/1*cuvajqmhcC8_croNpCLZFg.png)

Thank you! Please let me know if you have any suggestions!

![](https://cdn-images-1.medium.com/max/800/1*hw6Xjc3RJxvdLnrbYrERPg.jpeg)