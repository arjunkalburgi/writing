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
    metaInfo: {
      title: '',
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

  .image {
    background: linear-gradient(135deg, #dedede 0%, #dedede 40%, #bfbfbf 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    border-radius: 3px;
  }

  .hero_nameImg { 
    &.light { display: block; }
    &.dark { display: none; }
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
    img { filter: brightness(0.8); }
    .hero_nameImg { 
      &.light { display: none; }
      &.dark { display: block; }
    }
  }
</style>
