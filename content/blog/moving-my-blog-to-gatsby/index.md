---
title: Moving my blog to Gatsby
description: >-
  After seeing a shift in the industry from Medium, it's time I 
  leave as well and host my blog on my own site.
date: '2019-09-15T17:03:42.159Z'
categories: []
keywords: []
draft: true
slug: /writing/moving-my-blog-to-gatsby
---

> After seeing a shift in the industry from Medium, it's time I leave as well and host my blog on my own site.



This shouldn't be too bad of a process, I just need to convert my Medium posts to markdown, set up a Gatsby blog, host on Github and do some styling.



### Convert to Markdown

Taking the help of [this blog post](https://www.gautamdhameja.com/medium-to-markdown-converter/), I used medium-2-md to export and convert all my Medium posts to markdown. 

```bash
medium-2-md convertLocal medium-export/posts -df
```

This gave me a large list of markdown files that looked like `2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md`. 



### Set Up Gatsby Blog

Gatsby's got a [blog-starter](https://github.com/gatsbyjs/gatsby-starter-blog) repo, which was quick to clone and get up and running.

<img src="./initdeploy.png" alt="initdeploy" style="zoom:25%;" />



Then using some bash scripts to format my markdown posts to the file structure Gatsby expects. 

```bash
$ for f in *.md ; do mkdir -p ../blog/$f ; cp $f ../blog/$f/index.md ; done # make the new directory

$ for d in *.md ; do mv $d ${d#*_} ; done # remove the date from the beginning of the directory name

$ for d in *.md ; do mv $d ${d%-*.md} ; done # remove the '.md' from the end of the directory name

$ for d in * ; do mv $d ${d,,} ; done # lower case all characters
```

Going from `2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md`, to `security-review--ux-of-canadian-banking-applications`. 

This helps because now the url for my posts will look like: `www.arjunkalburgi.com/writing/security-review--ux-of-canadian-banking-applications`



Finally, I need to fix up the bio settings that the starter had. Most of that information was kept in the `gatsby-config.js` so I quickly edited it as well as changed the `profile-pic.jpg` file 

```json
siteMetadata: {
    title: `Writing`,
    author: `Arjun Kalburgi`,
    description: `projects, lessons, art + ideas`,
    siteUrl: `https://www.arjunkalburgi.com/writing`,
    social: {
      twitter: `arjunkalburgi`,
    },
```

Ta-da!

<img src="/Users/smilinknight/projects/Arjun stuff/blog/content/blog/moving-my-blog-to-gatsby/changingbio.png" alt="Ta-da!" style="zoom:25%;" />



Now my blog is ready to go 😃. Thank you to my bff [Andrew Fontaine](https://twitter.com/afontaine_ca) for helping me out with this part.



### Host on Github Pages

Thanks to Gatsby's [gh-pages hosting tutorial](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) I was able to get this done pretty easily. Just needed to make a repo in github, set the `origin` in my local repo, follow the tutorial and then run `npm run deploy` . And I'm up!

Without CI, every time I push to Github I'll need to run this command. This is okay for now but I'll probably look to change this later. 



### Styling

Honestly I could spend all day doing this, but for now I just want something quick. I'll use a lot of the CSS I already have from my [website](www.arjunkalburgi.com). But for the blog posts, for now I'll just copy what Varun's got on [his site](varun.ca/writing), it's gorgeous.





### Results

Pretty happy with the public facing results, but on the internal there's a couple things I lose. 

One is that I don't have the nice editor Medium provides. I installed [Typora](https://typora.io/) to fix this (using it right now). It lets me past images into the markdown files and helps me out with presenting my images as well. 

