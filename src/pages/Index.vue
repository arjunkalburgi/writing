<template>
  <Layout>
    <Hero />
    <section class="posts section">
      <BackgroundAnimation class="bgani" :total='number_of_leaves' />
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
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

  import Hero from './../components/layout/Hero.vue'
  import PostList from './../components/layout/PostList.vue'
  import BackgroundAnimation from './../components/system/BackgroundAnimation.vue'

  export default {
    name: 'Blog',
    metaInfo() {
      return {
        title: "Arjun Kalburgi Blog",
        meta: [
          { property: "og:title", content: "Arjun Kalburgi Blog" },
          { property: "og:image", content: 'https://www.arjunkalburgi.com/writing/sra.jpg' },
          { property: "og:type", content: "article" },
          { property: "og:description", content: "I write about my experiences and learnings. Sometimes I post my creative expressions, experiments and ideas, all in the name of sharing and expressing myself." },

          { name: "twitter:description", content: "I write about my experiences and learnings. Sometimes I post my creative expressions, experiments and ideas, all in the name of sharing and expressing myself." },
          { name: "twitter:title", content: "Arjun Kalburgi Blog" },
          { name: "twitter:site", content: "@arjunkalburgi" },
          { name: "twitter:image", content: 'https://www.arjunkalburgi.com/writing/sra.jpg' },
          { name: "twitter:creator", content: "@arjunkalburgi" },
        ],
      }
    },
    components: {
      Hero,
      PostList,
      BackgroundAnimation
    },
    data () {
      return { number_of_leaves: 400, }
    }
  }
</script>

<style lang="scss">

  @font-face {
    font-family: 'Lato';
    src: url('./../assets/fonts/Lato-Regular.ttf');
  }

  @font-face {
    font-family: 'Raleway';
    src: url('./../assets/fonts/Raleway-Bold.ttf');
  }

  :root {
    --brand-colour: #12A962;
    --brand-colourlight: #12A962;
    --brand-colourdark: #005d31;
    
    --brand-contrastlight: #efefef;
    --brand-contrastdark: #081A11;

    --brand-textcolour: --brand-contrastdark;

    --brand-text: normal 18px/1.3 'Lato';
    --bold-text: normal 700 30px/1.3 'Raleway';
    --button-text: normal 15px 'Raleway';
    --icon-text: normal 20px/1.3 'Lato';
  }

  #app {
    font: var(--brand-text);
    color: var(--brand-textcolour);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .PostList_title,
  .post_title,
  .contact_contents--title {
    font: var(--bold-text);
  }

  .section {
    width: 70%;
    margin: 25vh auto 15vh;
    @media screen and (max-width: 40em) { width: 85%; }
  }

  .hero {
    margin-bottom: 25vh;
  }

  .posts { position: relative; }
  .bgani { left: -15vw !important; right: -15vw !important; }

  // DARK MODE 
  @media (prefers-color-scheme: dark) {
    :root { --brand-colour: var(--brand-colourdark); --brand-textcolour: var(--brand-contrastlight); }
    body, .contact { background: var(--brand-contrastdark) !important; }
  }
</style>
