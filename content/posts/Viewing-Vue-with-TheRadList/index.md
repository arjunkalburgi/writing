---
title: Viewing Vue with TheRadList
description: >-
  Learning Vue.js by updating one of my more simpler projects, TheRadList, the
  Edmonton restaurant webapp that restores the excitement of…
date: '2019-04-16T21:12:50.815Z'
categories: []
keywords: []
slug: /viewing-vue-with-theradlist-8851502ab709
---

> Learning Vue.js by updating one of my more simpler projects, TheRadList, the Edmonton restaurant webapp that restores the excitement of finding a place to grub.

![](https://cdn-images-1.medium.com/max/800/0*Whk_KRBeoqPW-cYg)

### Objective

TheRadList is a project I started in January of 2018. Every once in a while I’ll bring it back to update it or use it to learn something new.

Here’s the total history of TheRadList updates:

*   [Update so that my friends can easily modify content](https://medium.com/arjunkalburgi/im-more-lazy-than-you-backends-with-google-spreadsheets-3eeac8d135c1)
*   [Update to learn Angular 5](https://github.com/theradlist/angular-radlist)
*   [Initial launch of the project](https://medium.com/arjunkalburgi/theradlist-a-new-side-product-e07bf0d3fdd8)

Now I’m using it to learn [Vue.js](https://vuejs.org), one of today’s most popular web frameworks.

### Learning Vue

Learning a new framework isn’t too difficult, since a lot of them take concepts from each other and most have great learning tools online.

The first thing I did was go to the [Vue.js docs](https://vuejs.org/v2/guide/) to see what I could learn. There I found a video series from [Vue Mastery called “Intro to Vue.js”](https://www.vuemastery.com/courses/intro-to-vue-js) which covers all the core principles of Vue.js and also builds a sample app along with you.

I didn’t bother with the sample app, because TheRadList is my sample app.

### Planning my Architecture

After picking up all the core concepts and functionality of Vue.js, I looked at TheRadList’s HTML to see how I could refactor and update it with Vue.js.

![](https://cdn-images-1.medium.com/max/800/0*SVkBXGeYCdj6H6fw)

I know that the App Component needs to get [emitted messages](https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event) from the Filter Component, which will then update the List Component via [props](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow).

If possible, I also want to make my filter functions capable of filtering through multiple properties. But that’s more of a stretch goal.

### Building out my App

Refactoring should always be done incrementally and that’s essentially what this process is.

I began with creating components and slowly turning them into what I needed, using the documentation and the videos from the core principles course as a reference.

![Git commits tracking my incremental progress](https://cdn-images-1.medium.com/max/800/1*h0h--08SQGxQUkJGg2uzXQ.png)
Git commits tracking my incremental progress

Slowly but surely I replaced all the functionality of the previous website. Starting with the component for the top hero section, then the component for the filter section and finally the rad list itself.

### Comments and Improvements

It’s always great to document the things you learned and the things you can do better. Something that can nearly always be improved in the components and how they work together.

#### More Components

It’s possible more components might be helpful, especially the for UI. For example each filter in the Filter Component can be its own component, this would mean more component-oriented CSS, helpful for designers and developers both.

#### Component Efficiency

Inner-component structure is another way to improve your app. I updated how the filter-props (props that control the list filters) were passed into the List Component, yielding a much more readable approach that’s also good for performance. (the `watch` function is slow)

![](https://cdn-images-1.medium.com/max/600/1*j5_TYqnW1RSfIW9R_7WiWw.png)
![Updating List Component to take in 1 prop for all the filters](https://cdn-images-1.medium.com/max/600/1*WDLgd9EwIyG0jQELpGQV5Q.png)

> Updating List Component to take in 1 prop for all the filters

#### Arrow Function Quirkiness

Took me quite a while to figure out why my watch function wasn’t working when trying to watch for when the user toggles the “Deep Dive” view.

```javascript
watch: {  
     expand: (newVal, oldVal)=>{ this.expanded = (newVal=="large") }  
}
```

According to [StackOverflow](https://stackoverflow.com/a/40557674), it’s simply because arrow functions (`()=>{}`) don’t take in bindings for `this`. In other words, `this` doesn’t work inside them! Just reverting back to regular function syntax fixed the problem. A good lesson.

```javascript
watch: {  
     expand(newVal, oldVal) { this.expanded = (newVal=="large") }  
}
```

#### Single File Components

Something I’d love to get to are [Vue’s Single File Components](https://vuejs.org/v2/guide/single-file-components.html), making Vue projects further like Angular and React with separation of concerns.

For a simple app like TheRadList, I didn’t see a point in adding this functionality, so instead I separated out my components into files. It helps with readability abstraction but isn’t nearly as beneficial as Single File Components themselves.

![](https://cdn-images-1.medium.com/max/1200/0*9mbSlucUkIF34qBA)

### Results

You can visit TheRadList at [www.theradlist.com](http://www.theradlist.com), but you won’t see any difference (other than a few style bug fixes I found). But now you’ll know that the site uses Vue.js!

Tell me how it is via [Twitter](http://twitter.com/askalburgi) or [LinkedIn](https://www.linkedin.com/in/arjun-kalburgi-82b25058/)!