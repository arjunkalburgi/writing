---
title: I’m more lazy than you — backends with Google Spreadsheets
description: >-
  As most developers I’ve gone on a journey of how I can make websites faster
  and easier. I’ve experimented with WordPress, HTML5UP, Github…
date: '2019-03-09T14:23:35.248Z'
categories: []
keywords: []
slug: >-
  /@askalburgi/im-more-lazy-than-you-backends-with-google-spreadsheets-3eeac8d135c1
---

As most developers I’ve gone on a journey of how I can make websites faster and easier. I’ve experimented with WordPress, [HTML5UP](https://html5up.net), Github Pages, and now I’ve got a new tool.

Say hello to [Sheety](https://sheety.co/), the shitty database API (as far as databases go) that’s also the best at being fast and easy.

![](https://cdn-images-1.medium.com/max/800/1*ppV1HxVjysDSUgBcaL3HbQ.png)

Sheety was made by [Phillip Caudell](http://twitter.com/@phillipcaudell) “because he hates making backends” and honestly it’s the greatest thing ever for front end developers like me.

Let’s look at an example. I’ve rebuilt my old project, [TheRadList](https://medium.com/arjunkalburgi/theradlist-a-new-side-product-e07bf0d3fdd8), to use Sheety so that my friends can easily edit the restaurant content on the website.

![TheRadList with data from Sheety](https://cdn-images-1.medium.com/max/800/1*A8M_qmhSM5Lf3TZTr4LZjA.jpeg)

TheRadList with data from Sheety

## The Spreadsheet

I’ve moved all the data from a JSON var in the JS of TheRadList (yes, that’s how far I went to avoid using a backend) to this Google Spreadsheet:

![](https://cdn-images-1.medium.com/max/800/1*VkNJX7cwCfKx3h7QCqwwGQ.png)

My friends have edit access to this spreadsheet and I made them a custom link to make it easier to find: [https://theradlist.com/data](https://theradlist.com/data)

## The API

Putting the Google Docs Publish Link into Sheety’s API tool results in the following API link for me to use!

> [_https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e_](https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e)

With all the data as objects in a list, it’s easy for me to read via JavaScript.

## The Javascript

I copied the example on the Sheety website to load the data from the API.

```javascript
var template;    
$(document).ready(function () {  
   $.getJSON(  
      'https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e',   
      function (data) {  
         template = Handlebars.compile($('#item-template').html())  
         $('#list-places').html(template(data))  
      })  
})
```

It uses Handlebars to load the data into the specific `#item-template` I made and then into the `div` I need.

## Other Things

#### The Filters

Unfortunately Sheety doesn’t have any endpoint logic, so I can’t retrieve specific objects or filter using the API. So instead I save the data into a variable and do simple list filter operations. Unfortunately none of the filter data is present at the moment so they all return an empty list.

#### Nested Objects

I did another project with Sheety where I needed to my data to have some nested objects and/or lists within the object. Sheety’s CSV style is obviously not suited for this. My solution was to create more Google Spreadsheets for the inner-data and use a `primary_id` to link all the data together. Then combine objects in JS `onLoad`. Who ever thought Database class would come in handy?

#### Updating Data

After the Spreadsheet is updated, Google/Sheety take some time for the changes to be reflected. Sometimes it’s instant but sometimes it takes a couple minutes. I don’t recommend using it for chat apps 😂

## The Results

Visit [TheRadList](https://medium.com/arjunkalburgi/theradlist-a-new-side-product-e07bf0d3fdd8) today to see Sheety in action! Well it’s not that exciting, you won’t even see it, but it’s lazy and that’s what counts.
