---
title: Custom Input Behaviour for Numbers
description: >-
  After accomplishing this twice now on two different occasions, I want to note it down for future reference. I think this is pretty core functionality for number inputs.
date: '2019-09-25T15:20:33.815Z'
slug: /writing/custom-input-behaviour-for-numbers

---

> After accomplishing this twice now on two different occasions, I want to note it down for future reference. I think this is pretty core functionality for number inputs.



When you type into a currency field, the field should adapt and reflect your text input. The experience is much cleaner if you're only ever typing numbers. 

Thus this: 

```javascript
// First, remove any '$' or decimals.
let val = input.toString().replace('$', '').replace('.', '');
let vallen = val.length

// Ensure it is a number
if (parseFloat(val)) {
  
   // Add a 0 for edge case to ensure: "$0.04"
   if (vallen < 2) { val = '0' + val; }
  
   // Add the decimal to the correct place
   let output = val.substr(0, vallen - 2) + '.' + val.substr(vallen - 2, vallen);

   // Clean up float and add back '$'
   output = '$' + parseFloat(output).toFixed(2).toString();
}

```



Now that I'm writing this, it seems like the line for the fourth comment is redundant. Why am I adding a decimal and then cleaning up the float value? Shouldn't `parseFloat(output).toFixed(2)` do all the right work? 

But that step is required to ensure the differences between `'0.04'` and `0.40` and `4.00` are all taken care of. :smile: 

It's actually the final line where the redundancy comes. I use `parseFloat` for the case of `00.040` where there maybe extra zeros present. And  `toFixed(2)` is for the case when `6.00` simplifies to `6`. 

And it all works: 

<img src="./numberinput.gif" alt="Number input gif showing how it works" style="zoom:50%;" />



If there's a more efficient way to do this please let me know :D 



![leaves](https://arjunkalburgi.github.io/assets/Graphics/Backgrounds/leaves-white.jpg)