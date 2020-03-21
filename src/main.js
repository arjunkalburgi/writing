// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import 'prismjs/themes/prism.css'
// import './assets/prism-theme.css'
require('./assets/prism-theme.css')
// require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'author',
    content: 'Arjun Kalburgi'
  })
}
