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
      cover
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
          { name: 'description', content: this.$page.post.description },
          
          { property: "og:title", content: this.$page.post.title },
          { property: "og:image", content: this.getCoverImage },
          { property: "og:type", content: "article" },
          { property: "og:description", content: this.$page.post.description },
          { property: "og:updated_time", content: this.$page.post.date },

          { name: "twitter:description", content: this.$page.post.description },
          { name: "twitter:title", content: this.$page.post.title },
          { name: "twitter:site", content: "@arjunkalburgi" },
          { name: "twitter:image", content: this.getCoverImage },
          { name: "twitter:creator", content: "@arjunkalburgi" },
        ],
      }
    },
    components: { Header },
    computed: {
      getCoverImage() {
        let path = "";
        const cover = this.$page.post.cover;
        if (cover != null && typeof(cover) != 'string') {
          console.log('cover: ', cover);
          path = `${this.getBaseUrl}${cover.src}`;
        } else if (cover != null && cover.includes('http')) {
          path = cover;
        } else {
          path = `${this.getBaseUrl}/writing/sra.jpg`;
        }
        return path;
      },
      getBaseUrl() {
        // return process.env.GRIDSOME_BASE_URL;
        return 'https://www.arjunkalburgi.com'
      }
    }
  }
</script>

<style scoped lang="scss">
  .post {
    width: 50%;
    margin: 25vh 35% 15vh 15%;
    @media screen and (max-width: 40em) { width: 85%; margin: 20vh auto 15vh; }

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

        + p { margin-top: 20px; }
      }

      h3 {
        font: var(--bold-text);
        font-size: 20px;
        margin-top: 100px;

        + p { margin-top: 20px; }
      }

      h4, h5, h6 {
        font: var(--bold-text);
        font-size: 18px;
        margin-top: 80px;

        + p { margin-top: 20px; }
      }

      strong { font-family: 'Raleway'; }

      img {
        border-radius: 3px;
        width: auto;
        max-width: 70%;
        max-height: 560px;

        + img {
          max-width: 30%;
        }

        @media screen and (max-width: 40em) { width: 33%; }
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
