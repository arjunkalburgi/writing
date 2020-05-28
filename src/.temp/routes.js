const c1 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/smilinknight/projects/ArjunStuff/blog/src/pages/About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/smilinknight/projects/ArjunStuff/blog/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/smilinknight/projects/ArjunStuff/blog/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/smilinknight/projects/ArjunStuff/blog/src/pages/Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    path: "/:title/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
