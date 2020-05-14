---
title: Creating a Variable Design System
description: >-
 The brief for this project is to create an Ionic app that can be re-themed based on different brands.
date: '2020-01-18T02:33:25.417Z'
slug: /Creating-a-Variable-Design-System
cover: "./arjun2020.jpg"
---



> The brief for this project is to create an Ionic app that can be re-themed based on different brands.



Should be a fun little project indeed. The idea is to expand on Ionic Framework's existing `variables.scss` to feature colours, fonts, opacities, shadows, radii and maybe even spacing. Then in a build process, reconfigure file/(s) so that the app is built with different variables.



### Step 1: Design Tokens

I found [this great guideline](https://www.lightningdesignsystem.com/design-tokens) from Salesforce that features all their design tokens. To be frank, it's a lot and I'm not sure I need it all. There's so much just in colours alone that I decided to look at some brands as well as my app so I could determine what would be necessary and not.

1. Colours
   Main brand colour

   Alt brand colour

   Dark (Black equivalent)

   Light (White equivalent)

   Main brand colour accessible with dark

   Main brand colour accessible with light

   Main brand colour accessible with alt

   Alt brand colour accessible with dark

   Alt brand colour accessible with light

   Alt brand colour accessible with main

   Light background colour

   Gray text accessible on white

   Gray text accessible on light background colour

   Gray text accessible on Alt brand colour accessible with main

2. Custom button style

3. Border radius style

4. Side spacing

5. Font/sizes: 
   smallbold
   small
   regular
   subtitle
   title
   header

6. Shadows
   header shadow (global.scss:177)
   button shadow

There are some other properties I could encorporate, but I'll start with these 6 tokens for now.



### Step 2: Using the Tokens

Now that I have my tokens, I need to update my app to use them. From there I'll be able to change the tokens for each brand, and apply them to the app.

This is actually the most difficult/time-consuming part of the process because it involved looking into each and every existing colour variable reference to ensure proper accessibility. The other tokens also required individual checking to find values that were not made into variables. It took a couple days to complete.

As I did this I also made a custom `.scss` file for each theme where I could keep new styles that are specific to a certain theme (adjusted layouts or button configurations).



### Step 3: Repo Re-Organization

I'll be using some npm scripts in order to move around finds before running my code. This was probably not the best method (that'd be using Gulp), but the easiest to implement. 

Here is an example of my `package.json`'s npm scripts: 

```json
{
   "serve:generic": "npm run generic && ionic serve",
   "generic": "npm run generic:retailer && npm run generic:assets && npm run generic:theme",
   "generic:retailer": "copyfiles -au 3 \".retailer/generic/app/**/*\" src/app",
   "generic:assets": "copyfiles -au 3 \".retailer/generic/assets/**/*\" src/assets",
   "generic:theme": "copyfiles -au 2 .retailer/generic/theme/*.scss src",
}
```

As you can see all I'm doing is moving files from a hidden folder (so it doesn't get included in build) and using [copyfiles](https://github.com/calvinmetcalf/copyfiles) to move and replace the files.

So now all I need to do to change my app's theme is to run `npm run serve:theme_name` and it'll completely change the app to a custom stream I've created.



### Results and Comments

Using this method for a couple weeks has been awesome. The custom `.scss` file has come in handy several times and the theme switching has worked will. 

The biggest problem I've had however is maintainence and new features. Making edits to sections of the copied files means making edits to the files of each theme instance, it adds up to a lot of edits. It requires careful attention to ensure that the new edits/features work for each theme - something that's a bit unruly in practice but is managable when not rushing.

Overall this is a really cool way to extend a single codebase for multiple clients.