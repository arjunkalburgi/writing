---
title: 'Creating ShoutBox: My First Hackathon'
description: The beginning of becoming a maker.
date: '2017-07-21T07:39:49.017Z'
categories: []
keywords: []
slug: /@askalburgi/creating-shoutbox-my-first-hackathon-84dfac495c3a
---

> The beginning of becoming a maker.

![](https://cdn-images-1.medium.com/max/800/1*ENGFDsKdRgxpl91gJC8a7w.png)

When I started my second year at the University of Alberta, the Computer Engineering Club was coming off year one of the new culture. The then executive was looking to build and connect a new community from the ground up. Part of that effort took form in the hackathon, now known as [HackEd](http://hacked.compeclub.com).

That same executive loved to code and make things together. They were hackers, and encouraged me to do the same. I remember I could always find certain members in certain places working on certain projects together. But the projects themselves were what really what had my attention. These guys built stuff that _did things_, and did things _for people_. I wanted to do the same.

![](https://cdn-images-1.medium.com/max/800/1*ENGFDsKdRgxpl91gJC8a7w.png)

That same year I participated in that same hackathon, my first, at that time it didn’t even have a name. I teamed up with my friend Harry to build ShoutBox, a Google Chrome extension that allows you to tweet from the address bar. I had seen many of my friends pull out their phones to tweet despite being in front of their laptop, the desktop experience wasn’t good enough. ShoutBox would solve this problem with a relatively simple solution. Harry and I walked into the 24 hours with the plan that we’d learn how to create a Chrome extension, set up a log in with Twitter, and post user’s tweets. This plan quickly changed.

Once Harry and I configured most of the Chrome Extension, I began to start the oauth handshake with Twitter. After many attempts, I determined that it was impossible — thanks to some older students helping us, we learned that it was because the Chrome Extension is not a valid endpoint. Harry and I then went into crazy troubleshooting mode, where for the next 5–6 hours we tried every possible way to get the tweet from the Extension to Twitter (even email). Eventually one of the older students saw us struggling at 5am and suggested a Node.js server, of which we knew nothing about at the time. Under a very tight deadline, we learned the Javascript required to set up the Node server but without enough time to get the Twitter oauth working. As a temporary fix we stole our oauth keys from the Twitter Developer page and turned our attention to the presentation.

At a hackathon, presentation is everything; knowing this and that everyone would be tired after the 24 hours, we set up our presentation to bring lots of energy and excitement and use our loud personalities to our advantage. We demonstrated ShoutBox’s speed and conveyed the usability and friendliness of the interface. We ended up presenting last, and our presentation picked up the energy of the room; our booming voices and excitement in our own product got the judges excited enough to award us third place at the competition!

![Harry and I after being awarded 3rd place](https://cdn-images-1.medium.com/max/800/0*eywW2ZPV3xutxCua.)
Harry and I after being awarded 3rd place![](https://cdn-images-1.medium.com/max/800/1*ENGFDsKdRgxpl91gJC8a7w.png)

That summer I went back to our work to redo the project properly. I implemented the Node server better, creating a website as an additional user interface for the oauth with Twitter, and upgraded the design to be cleaner and more simple. Finally, I put the application onto a Heroku server and made the Extension available on the Chrome Web Store. It was a real and great experience creating something from start to finish.

Not all the hackathons I attended went as well as this first one, but this experience definitely set the tone for my goals and expectations since. Looking back at this project two years later, I still have the drive to create for people and continue to implement it in my [recent projects](https://medium.com/@askalburgi/building-for-people-blindglasses-c6dbd9e6f9a7), I still reap the great benefits of being encouraged to hack by peers and I still have so much to learn.

> **Links:** [ShoutBox v1](https://github.com/HarryPahwa/Shoutbox.Finale), [ShoutBox v2](https://github.com/ShoutBoxExtension), [ShoutBox extension](https://chrome.google.com/webstore/detail/shoutbox/hbliaedcoikjfcdlebnmkhemofblkamc)

![](https://cdn-images-1.medium.com/max/800/1*ENGFDsKdRgxpl91gJC8a7w.png)