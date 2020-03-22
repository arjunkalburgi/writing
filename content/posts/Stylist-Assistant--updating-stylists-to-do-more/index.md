---
title: 'Stylist Assistant, updating stylists to do more'
description: >-
  My final year capstone project helps personal stylists recommend daily outfits
  for their clients and shows  potential for market…
date: '2019-04-17T19:37:02.271Z'
categories: []
keywords: []
slug: /@askalburgi/stylist-assistant-updating-stylists-to-do-more-236bf74c50a7
cover: 'https://cdn-images-1.medium.com/max/800/1*SISeI0rwJZYMaDVVocYF3g.png'
---

> My final year capstone project helps personal stylists recommend daily outfits for their clients and shows potential for market disruption.

### Introduction

The Stylist Assistant is a companion for stylists and their clients. In the industry today, personal stylists work with their clients closely, often on a daily basis, helping them achieve the client’s desired personal style goal. This makes being a personal stylist a full-time job, and hiring a personal stylist very expensive. Hence, very few people have a personal stylist.

By reducing the stylist’s time commitment we can reduce the time and cost barriers for clients, thus increasing the demand in the industry.

![](https://cdn-images-1.medium.com/max/800/1*H2VpCIxNt9mqV1Jff74W1Q.jpeg)

#### Collaborators

Capstone projects at the University of Alberta’s Faculty of Engineering are usually in groups of 3–5. I worked on this project with [Rui Wu](https://www.linkedin.com/in/rui-wu-3812a2164/) and [Vitor Mendonca](https://www.linkedin.com/in/v%C3%ADtor-mendon%C3%A7a-221151b0/).

#### Objective

The Stylist Assistant seeks to help stylists with their clients daily style using image detection to recognize clothing items, data science to match outfits and a mobile app to interface between the two parties.

The project’s potential to disrupt and grow the industry to a large degree makes it a potentially revolutionary technology.

> [View presentation slides for Stylist Assistant here.](https://docs.google.com/presentation/d/1U4SbZmzaiIkmf1hJq27UpBQrJmhd1VahhA49iJoCT1k/edit?usp=sharing)

![](https://cdn-images-1.medium.com/max/800/1*wbElysDqE7oqwJZlm47dvQ.png)

### Image Detection

#### DeepFashion Dataset

We found the [DeepFashion Project](https://liuziwei7.github.io/projects/DeepFashion.html) in our research for existing solutions. It also studies the relationship between AI and fashion and so we used the project to help kickstart our solution.

DeepFashion was great for kickstarting us, but also for the [dataset](http://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html) it provides. It had tagged data for all kinds of clothing features as shown below.

![](https://cdn-images-1.medium.com/max/800/0*DkyuFZrKj4CgmLzl.jpg)

Unfortunately, the tags for texture, fabric, shape, part and style were completely inaccurate and we could not use them in our solution. We made do with just category and continued with the project as a proof of concept.

#### Neural Net

We built our own neural net for the image tagging. Using the TensorFlow library as a solution that worked and satisfied the course requirements.

Our Neural Net was directly based off of [Simonyan & Zisserman’s entry to the ImageNet Competition 2014](http://www.image-net.org/challenges/LSVRC/2014/) — also the basis for DeepFashion.

#### Alternatives Considered for Processing

We wanted to explore creating a custom classifier with the IBM Watson API, but decided this route would not satisfy the workload and learning requirements for the course. In our quick test, using DeepFashion and the custom classifier worked well as the Watson API is assisted by its existing knowledge base.

> [See the code for the Neural Net](https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source/neural-network)

### Data Science

The objective of the data science portion of the project is to combine outfits from the client’s wardrobe and to measure commonality between the stylist’s recommendation and the list of possible client’s outfits.

#### Using DeepFashion Categories

Through the list of all the possible clothing item categories in the DeepFashion dataset, we built 3 category trees in order to deduce similarity among items: Tops, Bottoms and Full-Body.

![](https://cdn-images-1.medium.com/max/800/1*xV3tu3251zPOZSr0_q0jzg.png)

Items in different trees have 0% similarity, items in different sections of the graph are 25% similar, items within the same section are 50% similar and items of the same category have 100% similarity.

#### Similarity Matrix

The clothing piece similarity allowed us to then make outfit similarity measurements which could then be used to find the best matching outfit from the stylist’s recommended outfit.

![The stylist’s recommended is on the right and the client’s wardrobe on the left.](https://cdn-images-1.medium.com/max/800/1*SISeI0rwJZYMaDVVocYF3g.png)
The stylist’s recommended is on the right and the client’s wardrobe on the left.

Using outfit similarity we can retrieve the most similar outfit from the client’s wardrobe, resulting in an outfit (or outfits) for the client that satisfy the stylist’s recommendation.

> [See the code for the Recommendation API](https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source/recommender)

### Mobile App

The Stylist Assistant mobile app is used by both stylists and clients, meaning a user can be both a stylist and a client using the same app (provided they have different email addresses). This design decision was made to help keep the project’s scope relatively narrow. Companies like Uber originally kept both types of users, rider and driver, on the same app, but then grew into two apps as both sides of the service expanded.

#### UX Design

Design patterns (visual layouts of the app views) were given less detailed thought, although some minor patterns which were more intuitive were implemented, such as tabs in the client side rather than a side menu. This follows the general design rule that discards the idea of keeping main features hidden in a side-menu navigation. The stylist side does feature a side-menu, but it is a much more acceptable design pattern for switching between clients. Similarly, the display of side-by-side cards was chosen over other list options for showing the wardrobe and recommended outfits of the client.

![](https://cdn-images-1.medium.com/max/400/0*djuOs4oNY9MJRgBT)
![](https://cdn-images-1.medium.com/max/400/0*mly3daHo0l2Lb1jX)
![Left to Right: Home screen, Client’s recommended outfits, Stylist’s client details](https://cdn-images-1.medium.com/max/400/0*NHoqSqItIBWuqQbh)
Left to Right: Home screen, Client’s recommended outfits, Stylist’s client details

#### UI Design

_Note this project was done before taking the UI design course at RED Academy._

The visual aspects of the application, including the colours and fonts, were chosen to support emotional responses of reliability and elegance. The font, Eloquent Pro, and the colour black give an impression of sophistication. In colour theory, the use of navy is known to build feelings of trust and reliability.

These visual cues are present in the application in subtle ways, such as the tab-bar colour of the recommendations being navy to suggest that the recommendations are trustworthy. The rest of the application is a simple black and white to create a tone of elegance.

#### Frontend

We chose Ionic Framework for our app because it’s fast and reliable with simple UI tools that we could easily modify. After initializing views and navigation with default templating, everything was then redesigned to reflect our app mockups.

We worked incrementally like this for the rest of the app as well, first adding functionality, then styling it and fixing bugs.

![](https://cdn-images-1.medium.com/max/400/0*LlK-kfS_7MU-mu_X)
![](https://cdn-images-1.medium.com/max/400/0*91yXBox7Oj-F21AI)
![Left to Right: Home screen, Client’s recommended outfits, Stylist’s client details](https://cdn-images-1.medium.com/max/400/0*OG0DA3QKeXMPxC3N)
Left to Right: Home screen, Client’s recommended outfits, Stylist’s client details

#### Backend

Since Angular was being used in the frontend, we chose to use Firebase as our database in the backend. Firebase has a number of useful features and works great with Angular as both are Google-backed.

We used Firebase login to handle accounts and sign-in and to quickly show data within the app.

Firebase was great but there was a lot of compatibility issues because somehow we ended up with Angular v1 in our Ionic app working with a much higher version of Firebase.

> [See the code for the mobile app](https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source)

### Results

We were ultimately unsuccessful in obtaining sufficient accuracy in our classification. I think if the DeepFashion dataset was what it promised to be, we would have had something really valuable on our hands. Neural nets really need consistent data to yield good results.

The project as it stands relies on stylists to help the app build fashionable outfits tailored to the client’s fashion goals. We believe that it would be possible for our system to work without the stylist’s input if there was a sufficiently large and accurate database. DeepFashion was just not that database.

#### Key Learning Lesson

Data is a great tool that can be leveraged to do great things, but clean and accurate data is really hard to come by and without it those great things aren’t.

Tell me what you think about the project via [Twitter](http://twitter.com/askalburgi) or [LinkedIn](https://www.linkedin.com/in/arjun-kalburgi-82b25058/)!
