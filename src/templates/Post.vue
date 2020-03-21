<template>
  <Layout>
    <div class="post section">
      <div class="post_header">
        <ul class="post_details">
          <li>
            <smaller class="post_details--date">{{ $page.post.date}}</smaller>
          </li>
          <li>
            <smaller class="post_details--time">{{$page.post.timeToRead}} min read</smaller>
          </li>
        </ul>
        <h2 class="post_title">{{$page.post.title}}</h2>
      </div>
      <div class="post_content">
        <div v-html="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      title
      content
      date (format: "D MMMM YYYY")
      timeToRead
    }
  }
</page-query>

<style scoped lang="scss">
  .post {
    width: 50%;
    margin: 25vh 35% 15vh 15%;

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

    &_title {
      margin-top: 15px;
    }

    &_content {
      & > p { margin: 50px 0; }
    }
  }
</style>
