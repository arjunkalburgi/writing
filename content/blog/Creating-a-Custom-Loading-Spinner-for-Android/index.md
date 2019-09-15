---
title: "Creating a Custom Loading Spinner for Android \U0001F916"
description: >-
  Recently at Krugo, I was asking to implement a custom loading animation. I
  don’t usually write about work things, but this one was…
date: '2019-01-15T22:38:27.057Z'
categories: []
keywords: []
slug: /@askalburgi/creating-a-custom-loading-spinner-for-android-1ce686396c68
---

> Recently at Krugo, I was implementing a custom loading animation. I don’t usually write about work things, but this one was different.

#### First, the Setup

First I implemented this BehaviorSubject in my Dependency Injection:

**var progressBar**: BehaviorSubject<Boolean> = BehaviorSubject.createDefault(**false**)  
**fun** setProgressBar(value: Boolean) {  
    **progressBar**.onNext(value)  
}

And subscribed to it from the MainActivity:

Injector.**progressBar**._subscribeBy_(  
        onNext = **{  
            if** (**it**) {  
                **this**.mainProgress._visibility_ \= View._VISIBLE_ } **else** {  
                **this**.mainProgress._visibility_ \= View._GONE_ }  
        **}**,onError = **{}**)  
        ._addTo_(**compositeDisposable**)

These together allow me to toggle the ProgressBar view (that was set up in activity\_main) simply by calling `Injector.setProgressBar(**true**)` and `Injector.setProgressBar(**false**)`.

#### Second, the Animation

Here’s the fun part. I used [Shape Shifter](https://shapeshifter.design/) to make the animation, this is what I made:

![](https://cdn-images-1.medium.com/max/800/1*TOT7NQcg-4VcfbAynbk7vA.gif)

Shape Shifter allows you to export the animation as an `animated-vector` , made just for Android.

I found that breaking that `animated-vector` into four separate files worked best. The first is the main file, make sure your ProgressBar uses this.

<**animated-vector**   
    android:drawable="**@drawable/your\_vector\_file**">  
  
    <**target**  
        android:name="group1"  
        android:animation="**@anim/your\_first\_animation\_file**" />  
  
    <**target**  
        android:name="group2"  
        android:animation="**@anim/your\_second\_animation\_file**" />  
</**animated-vector**\>

The vector file, taken from the `<vector>` section of the `animated-vector` :

<**vector** android:name="vector"  
    android:viewportWidth="1024"  
    android:viewportHeight="1024">  
    <**group** ... />  
    <**group** ... />  
</**vector**\>

And the two animation files taken from the `<target>` sections and placed under `res/anim/` . They’ll look like this:

<**set**\>  
    <**objectAnimator** ... />  
    <**objectAnimator** ... />  
    <**objectAnimator** ... />  
    <**objectAnimator** ... />  
</**set**\>

#### Third, Making it Work

This was all great, but it didn’t exactly work. The animation wouldn’t repeat itself after it completed. Took a while but finally got it working by doing the following:

Change `ProgressBar` to `ImageView`

<**ImageView**  
    android:contentDescription="@string/loading"  
    android:id="@+id/progress\_bar"  
    android:layout\_width="200dp"  
    android:layout\_height="200dp"  
    android:layout\_gravity="center" />

Initialize the animation including `registerAnimationCallback` to force the looping of the animation.

**val** avd = AnimatedVectorDrawableCompat.create(_applicationContext_,            
                                      R.drawable._your\_vector\_file_)  
findViewById<ImageView>(R.id._progress\_bar_)._apply_ **{** setImageDrawable(avd)  
**}  
**avd?.registerAnimationCallback(**obj**:Animatable2Compat.AnimationCallback() {  
    **override fun** onAnimationEnd(drawable: Drawable?) {  
        avd.start()  
    }  
})

To top it off, I added `start()` and `stop()` to my `_subscribeBy_` method just to be nice:

Injector.**progressBar**._subscribeBy_(  
        onNext = **{  
            if** (**it**) {  
                **this**.mainProgress._visibility_ \= View._VISIBLE_ avd?_.start()_ } **else** {  
                **this**.mainProgress._visibility_ \= View._GONE_ avd?_.stop()_ }  
        **}**,onError = **{}**)  
        ._addTo_(**compositeDisposable**)

This last step took me a while to figure out but I finally got it thanks to this article from the Android Developers blog:

[**Re-animation**  
_If you were holding off adding awesome animation to your application because of lack of API support, then hold-off-no-more_medium.com](https://medium.com/androiddevelopers/re-animation-7869722af206 "https://medium.com/androiddevelopers/re-animation-7869722af206")[](https://medium.com/androiddevelopers/re-animation-7869722af206)

Overall I loved the chance to work on some animation, I think it’s just going to become a bigger thing in 2019 and more of a priority for me to learn!

#### Krugo Travel

Quick shoutout to the company I’m working for, Krugo. I’m working on getting the Android app up and running hence why I was doing this little animation in Android!

> Have you ever been frustrated trying to plan a trip with a group of people? Maybe a bachelor party, family vacation or trip with the girls? If so, you’re not alone.

> And we’ve made it our mission to help.

Krugo helps groups of friends collaboratively plan trips by finding events, buying tickets and getting a place to stay. Can’t wait to take my own Krugo soon 😜

Check ’em out on [Medium](https://medium.com/@krugo) or get the [app for iOS](https://krugotravel.com/). Android coming soon!

![](https://cdn-images-1.medium.com/max/800/1*OoTeOBZ4tF09RWuXkXNihA.jpeg)