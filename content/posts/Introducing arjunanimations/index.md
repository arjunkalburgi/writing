---
title: Introducing arjunanimations
description: >-
  I've started a new project, a suite of JS and CSS animations called ArjunAnimations.
date: '2020-05-28T14:20:33.815Z'
slug: /introducing-arjunanimations
cover: ./leavesgif.gif
---

> I've started a new project, a suite of JS and CSS animations called ArjunAnimations. 



I feel like a lot of things happen just because my cousin yells at me to do it. 

## Ideation

I've had these floating leaves on my website for nearly 2 years. At first they were hacked from another website, then I rebuilt them using GSAP. 

View on [GitHub](github.com/arjunkalburgi/arjunanimation_leaves).
View on [NPM](https://www.npmjs.com/package/@arjunanimations/leaves).

![leavesgif](./leavesgif.gif)

The best part about them is how they separate my website from so many other portfolio sites. I don't think my website design is all that great, but these leaves bring a wow factor. As I built and designed websites for friends and tas.health's Shopify store, that wow factor was centered in my mind.

For the web, a simple library will be able to bring animations, and with Shopify, an app. So it became a mission, starting with my already made leaves🍃.

## JavaScript

##### Vanilla

The leaves animation on my website is built using jQuery. For the library I remade it using vanilla Javascript, this is because I want the library to be as light-weight as possible. With vanilla Javascript, the libraries only dependency is GSAP. [Peep the commit.](https://github.com/arjunkalburgi/arjunanimation_leaves/commit/5a7dfb9ca15a59d60ead48646bc3387329782930)

##### Style

For the library to be even easier to use, I moved all the CSS into the JS of the library using `document.createElement('style');` and appending it to the `head` tag. [Peep the commit.](https://github.com/arjunkalburgi/arjunanimation_leaves/commit/6526aad1e08eaf757cf30c4f6ae1222109068728)

##### UMD

I had to learn what a Universal Module Definition is, but the concept is pretty easy. It's a wrapper for your library such that it's good to go in a variety of other's' code environments. There's a line for module system's such as `npm`, something for `require`, and the default for `static`. [Peep the commit.](https://github.com/arjunkalburgi/arjunanimation_leaves/commit/ce9f6d32521e1a880de94d0114bb26a582d6fd77)

##### Customization 

The package needs some flexibility so users can have some customization. I modified the animation function to accept a custom `className` for the animation to work on, a custom number of leaves that are created and custom sprites that the animation will animate. 

```javascript
arjunanimation_leaves.animate({
    // identify the class name of the element you want the animaiton to appear within
    //      the leaves will not show outside this container
    className: 'arjunanimation_leaves', 

    // identify the number of sprites you would like to appear within the container
    numOfSprites: 30,

    // define the sprites using an array of paths
    pathsOfSprites: [
        './element01.svg',
        './element02.svg',
        './element03.svg',
        './element04.svg',
        './element05.svg',
        './element06.svg',
        './element07.svg',
        './element08.svg',
    ]
});
```

## NPM

After I added a static and VueJS example and some documentation, I got to working on publishing the library to NPMjs.com. 

##### .npmignore

I added an `.npmignore` file to my package to remove the examples folder from the package. Since the examples folder has a VueJS app in it, it takes up lots of space relative to how small the package itself is.

##### Scoped Org

After publishing initially, I ended up republishing using a scoped organization. Scopes allow you to create a package with the same name as a package created by another user or Org without conflict. This way I don't have to have a long library name (it was `arjunanimation_leaves`). 

I made my organization name `@arjunanimations` and my package name `leaves`, for the full effect of `@arjunanimations/leaves`.

##### It works!

Now you can `npm i @arjunanimations/leaves` to add it to your project :D 

## What's Next?

I need to make the Shopify app so that businesses can add leaves to their site! I also want to add examples for React and Angular to the documentation. 

If you know how to make Shopify apps, help me out! Finding it confusing so far 😅

![leavesgif](./leavesgif.gif)



------



Follow me on [Twitter](twitter.com/arjunkalbugi) to hear more from me, more often. There I talk about design stuff, code stuff and random stuff. 