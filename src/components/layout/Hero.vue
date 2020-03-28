<template lang="html">

  <section class="hero section">
		<img class="hero_nameImg light" src="../../assets/pics/LogoFull.svg" :alt="logo_alttext" />
		<img class="hero_nameImg dark" src="../../assets/pics/WhiteFull.svg" :alt="logo_alttext" />
		<p class="hero_text--tag">learning, finding, designing, and developing impact</p>
		<p class="hero_text--intro">I write about my experiences and learnings. Sometimes I post my creative expressions, experiments and ideas, all in the name of sharing and expressing myself.</p>
    <ButtonList :hasButton=true v-bind:button='button' v-bind:list='list' title="Blog and Social Media links" />
  </section>

</template>

<script lang="js">

  import ButtonList from './../system/ButtonList.vue'

  export default  {
    name: 'hero',
    components: {
      ButtonList
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        logo_alttext: "Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
        button: {link: "https://www.arjunkalburgi.com", text: "about"},
        list: [
          {link: "https://twitter.com/arjunkalburgi",     icon: "twitter"},
          {link: "https://github.com/arjunkalburgi",      icon: "github"},
          {link: "https://linkedin.com/in/arjunkalburgi", icon: "linkedin"},
          {link: "https://codepen.io/arjunkalburgi",      icon: "codepen"},
          {link: "mailto:askalburgi@gmail.com",           icon: "email"},
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
      @media screen and (max-width: 80em) { width: 70%; }
      @media screen and (max-width: 60em) { width: 80%; }
    }

    &_nameImg { width: 200px; }

    &_text--tag {
      margin-top: 7px;
      margin-bottom: 30px;
    }
  }
</style>
