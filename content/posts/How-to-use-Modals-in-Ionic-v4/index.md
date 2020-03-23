---
title: How to use Modals in Ionic v4
description: >-
  After taking much too long to figure this out myself, I’m writing a blog post
  about it to help the next dev.
date: '2019-08-16T17:03:42.159Z'
---

> After taking much too long to figure this out myself, I’m writing a blog post about it to help the next dev.

This should be easy, but the documentation for it is a little lacking. I’ve [asked](https://github.com/ionic-team/ionic/pull/17944#issuecomment-522067671) them to update it but just in case they don’t I’m writing this for your sanity.

### Issue

Originally my issue was that the modal was activating too early, before the button-press to activate the modal. When I would navigate to the page that the modal should be accessed on, it would show the modal as a full page instead of the page I’ve navigated to.

This solution will also help solve the `ERROR ERROR: "Uncaught (in promise): overlay does not exist"` when trying to dismiss the modal. Another issue that I saw people having when trying to find a solution.

### Solution

#### Creating a Modal Page

Very basic, just run `ionic g page modal` using Ionic CLI just like you would for any other new page.

#### Fixing the Routing

Since modal pages aren’t part of your app navigation, you must remove the automatic entry for this page from your `app-routing-module.ts` file.

```javascript
const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },  
     ...  
     {̵ ̵p̵a̵t̵h̵:̵ ̵'̵m̵o̵d̵a̵l̵'̵,̵ ̵  
       l̵o̵a̵d̵C̵h̵i̵l̵d̵r̵e̵n̵:̵ ̵'̵.̵/̵m̵o̵d̵a̵l̵/̵m̵o̵d̵a̵l̵.̵m̵o̵d̵u̵l̵e̵#̵M̵o̵d̵a̵l̵P̵a̵g̵e̵M̵o̵d̵u̵l̵e̵'̵ ̵}̵
];
```

#### Fix the Modal’s Module

This part is neccessary to solve the issue.

```javascript
@NgModule({  
     declarations: \[ **ModalPage** \],  
     imports: \[ ... \],  
     entryComponents: \[ **ModalPage** \],  
     exports: \[ **ModalPage \]  
**})  
export class ModalPageModule {}
```


The documentation does not show to include the page in `entryComponents` or `exports`.

#### Declare the Modal for Use

Now that the modal’s module is ready, import it into the page you want to use it in.

```javascript
@NgModule({  
     declarations: \[ HomePage, **ModalPage** \],  
     imports: \[ ... \],  
     entryComponents: \[ **ModalPage** \],})  
export class HomePageModule {}
```

The documentation does not show either of these! This is a big part of how the issue happens. Including the `ModalPage` in `imports` is what creates the problem (and is what I thought to do).

#### Create the Modal

The following is exactly how the documentation explains, I’m just including it here for completion’s sake.

```javascript
import { ModalController } from '@ionic/angular';

export class **HomePage** {

  constructor(private modalCtrl: ModalController) { }

  async openModal() {  
    const loadAmount = await _this_.modalCtrl.create({  
      component: **ModalPage**  
    });  
    await loadAmount.present();  
  }

}
```

#### Dismiss the Modal

```javascript
import { ModalController } from '@ionic/angular';

export class **ModalPage** {

  constructor(private modalCtrl: ModalController) { }

  async close() {  
    await _this_.modalCtrl.dismiss();  
  }

}
```

### Conclusion

Just like that, everything should be working perfectly. I was so relieved when I implemented these steps. Thank you to [Christian Francia](https://medium.com/u/706b6e4cb229) for providing this solution in a [Github issue](https://github.com/ionic-team/ionic/issues/17939#issuecomment-479550015), hopefully this blog post will have a little better SEO and will be easier to find 😃
