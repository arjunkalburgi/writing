---
title: "Do Animated SVGs \U0001F494 React-Native?"
description: >-
  I’ve been looking into SVG animations for my project, Slackify. I found that
  SVG offers a great animate property and so I decided I’d…
date: '2018-11-06T06:55:05.151Z'
categories: []
keywords: []
slug: /@askalburgi/do-animated-svgs-react-native-2c6f75149189
---

I’ve been looking into SVG animations for my project, [Slackify](https://medium.com/arjunkalburgi/redesigning-slackify-an-easy-custom-emoji-solution-for-slack-41c81b76e2be). I found that SVG offers a great [animate property](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) and so I decided I’d animate a brand new logo for Slackify.

![](https://cdn-images-1.medium.com/max/800/1*AtJwk7_cpzGFJI6nZkMsjg.png)

I planned out my animation and in Figma I created several SVG’s. `animate` only works if all the paths in your SVG have the same number of points.

I ended up creating:

![](https://cdn-images-1.medium.com/max/800/1*MvBfM58ir8Y4S17gJyBzzw.gif)

Not special but fun to try out. I also made this [codepen of the svg](https://codepen.io/askalburgi/pen/vQOJLE).

Don’t click it, it doesn’t work. Turns out `animate`'s browser support isn’t that great.

I decided to try it in the React-Native Slackify app anyway. I found a nice little package to embed my SVG as an Image in the app, [react-native-remote-svg](https://www.npmjs.com/package/react-native-remote-svg), after trying a lot of other options that didn’t work at all.

But unfortunately the animated SVG did not load in the app.

I also tried to load the SVG in a React-Native `WebView`, thinking maybe the WebView’s browser support would be different, but unfortunately that didn’t work either.

So I’ve got:

![](https://cdn-images-1.medium.com/max/800/1*bfzlPng2aLxqJDms2hS8zQ.jpeg)

🤷🏾‍ Oh well.

If you know how I could have done this _properly_ in React-Native, **please let me know!** I really want to learn.
