---
title: Nylas Team Hackathon
description: >-
  Recently my team at Nylas wrapped up a 2 week hackathon and I was particularly impressed with the amount of things I was able to do.
date: '2021-04-21T11:20:33.815Z'
slug: /nylas-hackathon-reflection
cover: https://www.nylas.com/wp-content/uploads/Blog-UX-Update.png
---

Recently my team at Nylas wrapped up a 2 week hackathon where we could work on whatever we’d like with the caveat that it will improve UX. Between Dashboard and Components we managed to ship a ridiculous amount of new features and I was particularly impressed with the amount of things I was able to do.

Most of them focus on style and experience improvements ranging from tweaks to layouts. I think reflecting on what I chose to work on might be interesting so let's go!


#### DataTable click UX (failed)
Our current data table's click action is not accessible to keyboard users via tabbing. Unfortunately I couldn't launch this because the buttons I added would go off screen due to a responsiveness problem that has too much red tape to solve.

#### Page title consistency
This is a small one, I noticed that some pages in the dashboard did not have the correct title in the tab. I quickly corrected these bugs with one consistent sweep through all of our pages.

#### State Indicator Shapes 
For colorblind users, distinguishing by colour is not sufficient. I upgraded our status indicators to be shapes as well as colours; green circle, blue square, and red triangle.

#### Amplitude Error Fix 
My coworker and I were coming across the same failing tests so we paired to resolve them. Turns out it was just a missed catch block,

#### Mobile DataTable 
The main function of the Dashboard is for users to check the status of their accounts and the mobile experience for this was essentially unusable. I upgraded the design to a simple list style with a much improved text hierarchy which I hope will increase brand trust from our users.

#### Nav Improvements
The main sidebar navigation of the Dashboard needed an accessibility update and our design team had a number of tweaks for it in mind as well. In 5 separate PRs I worked on updating different parts of the Nav, including making it collapsible, with varying degrees of pairing with my coworkers.

#### Breadcrumbs
To make the Dashboard’s page structure easier to understand, the design team made mockups for breadcrumbs. After implementing them I’ve been so impressed with the increased functionality for mobile users!

#### Component Settings Elements
Last month we had to move some pretty UI elements into tech debt to make our launch deadline. I built and brought them to life - elevating the entire page’s level of sophistication. 

#### Blogpost 
Last but not least, I led the team in co-writing a little blog post featuring some of the big ticket items we launched over the two week hackathon. My hope is to get that blog released publicly.

## Conclusion
It was a productive two weeks for sure. I think it’s really awesome to see accessibility be such a common motivation for many of these features. Other trends like the focus on UI and lack of deviation from the Dashboard are less surprising. 

Overall I feel very good about the last two weeks! I’ll definitely be romanticizing them in my head every now and then.
