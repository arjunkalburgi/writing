<template lang="html">

  <section class="hero section">
    <LogoImage class="hero_nameImg" />
		<p class="hero_text--tag">learning, finding, designing, and developing impact</p>
		<p class="hero_text--intro">I write about my experiences and learnings. Sometimes I post my creative expressions, experiments and ideas, all in the name of sharing and expressing myself.</p>
    <ButtonList :hasButton=true v-bind:button='button' v-bind:list='list' />
  </section>

</template>

<script lang="js">

  import LogoImage from './../system/LogoImage.vue'
  import ButtonList from './../system/ButtonList.vue'

  export default  {
    name: 'hero',
    components: {
      LogoImage,
      ButtonList
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        button: {link: "https://www.arjunkalburgi.com", text: "about", alt: "View my portfolio" },
        list: [
          {link: "https://twitter.com/arjunkalburgi",     icon: "twitter",  alt: "View my Twitter" },
          {link: "https://github.com/arjunkalburgi",      icon: "github",   alt: "View my GitHub" },
          {link: "https://linkedin.com/in/arjunkalburgi", icon: "linkedin", alt: "View my Linked In" },
          {link: "https://codepen.io/arjunkalburgi",      icon: "codepen",  alt: "View my Code Pen" },
          {link: "mailto:askalburgi@gmail.com",           icon: "email",    alt: "Send me an Email" },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .hero {
    > * {
      width: 50%;
      @media screen and (max-width: 40em) { width: unset; }
    }

    &_nameImg { width: 200px; }

    &_text--tag {
      margin-top: 7px;
      margin-bottom: 30px;
    }
  }
</style>
