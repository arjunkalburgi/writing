<template>
  <article class="PostList">
    <ul class="PostList_details">
      <li>
        <p class="PostList_detail PostList_detail--date" v-html="post.date"></p>
      </li>
      <li>
        <p class="PostList_detail PostList_detail--time">{{post.timeToRead}} min read</p>
      </li>
    </ul>
    
    <h2 class="PostList_title" v-html="post.title" />
    <p class="PostList_description" v-html="post.description" />
    <Button class="PostList_button" :link="'/writing'+post.path" :text="buttontext" />
  </article>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          description
          date (format: "MMMM D, YYYY")
          path
        }
      }
    }
  }
</page-query>

<script>
  import Button from './../system/Button.vue'

  export default  {
    name: 'PostList',
    components: { Button },
    props: ["post"],
    // mounted () { },
    data () {
      return { buttontext: "Read On" }
    },
    // methods: { },
    // computed: { }
  }

</script>

<style scoped lang="scss">
  .PostList {
    margin: 10vh auto 10vh 0;
    width: 60%;
    @media screen and (max-width: 80em) { width: 80%; }
    @media screen and (max-width: 60em) { width: 100%; }

    &_details {
      padding: 0;
      display: inline-block;
      margin: 0;

      li {
        float: left;
        list-style: none;

        &:not(:first-of-type) { margin: 0 0 0 20px; }
      }
    }

    &_detail {
      margin: 0; 
      font-size: smaller;
    }

    &_title { margin: 5px 0 20px; }

    &_button { display: inline-block; margin-top: 2px; }
  }
</style>
