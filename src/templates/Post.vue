<template>
  <Layout>
    <Header />
    <div class="post section">
      <div class="post_header">
        <ul class="post_details">
          <li>
            <p class="post_detail post_detail--date">{{ $page.post.date}}</p>
          </li>
          <li>
            <p class="post_detail post_detail--time">{{$page.post.timeToRead}} min read</p>
          </li>
        </ul>
        <h2 class="post_title">{{$page.post.title}}</h2>
      </div>
      <div class="post_content" v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      title
      content
      date (format: "MMMM D, YYYY")
      timeToRead
      description
    }
  }
</page-query>

<script lang="js">

  import Header from './../components/system/Header.vue'

  export default  {
    name: 'Post',
    metaInfo() {
      return {
        title: this.$page.post.title,
        meta: [
          { name: 'description', content: this.$page.post.description }
        ],
      }
    },
    components: {
      Header
    },
    computed: {
      getCoverImage() {
        let coverImage = "";
        const cover = this.$page.post.cover;
        if (cover != null) {
          coverImage = `${this.getBaseUrl}${this.$page.post.cover.src}`;
        }
        return coverImage;
      },
      getBaseUrl() {
        return process.env.GRIDSOME_BASE_URL;
      }
    }
  }
</script>

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

    &_detail {
      margin: 0; 
      font-size: smaller;
    }

    &_title {
      margin-top: 15px;
    }

    &_content /deep/ {
      p { margin: 40px 0; line-height: 30px; }

      li { margin: 5px 0; }
      li p { margin: 5px 0; }

      a {
        color: #12a962 !important;
        box-shadow: 0 4px 0 0 rgba(18,169,98,.32);
        text-decoration: none;
      }

      h1, h2 {
        font: var(--bold-text);
        font-size: 22px;
        margin-top: 120px;
      }

      h3 {
        font: var(--bold-text);
        font-size: 20px;
        margin-top: 100px;
      }

      strong, h4, h5, h6 {
        font: var(--bold-text);
        font-size: 18px;
        margin-top: 80px;
      }

      img {
        width: 70%;
      }

      blockquote {
        border-left: .32813rem solid #12a962;
        margin-left: -1.75rem;
        margin-right: 1.75rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 1.42188rem;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.75rem;
        font-size: 1.20112rem;
        line-height: 1.75rem;
        color: #000000cc;
        font-style: italic;
        @media (prefers-color-scheme: dark) { color: #FFFFFFcc; }
      }

      :not(pre) > code, pre { font-size: 13px; }
      p code, p pre { font-size: 15px; }

    }
  }
</style>
