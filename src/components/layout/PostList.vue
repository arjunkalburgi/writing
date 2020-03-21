<template>
  <div class="PostList">
    <ul class="PostList_details">
      <li>
        <p class="PostList_details--date" v-html="post.date" />
      </li>
      <li>
        <p class="PostList_details--time">{{post.timeToRead}} min read</p>
      </li>
    </ul>
    
    <h2 class="PostList_title" v-html="post.title" />
    <p class="PostList_description" v-html="post.description" />
    <Button class="PostList_button" :link="post.path" :text="buttontext" />
  </div>
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
          date (format: "D MMMM YYYY")
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

    &_details {
      padding: 0;
      display: inline-block;
      margin: 0;

      li {
        float: left;
        list-style: none;

        &:not(:first-of-type) { margin: 0 0 0 20px; }
      }

      p { margin: 0; }
    }

    &_title { }

    &_button { display: inline-block; }
  }
</style>
