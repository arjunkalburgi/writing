<template lang="html">

  <footer class="contact contact-style b-loaded" id="contact">
    <BackgroundAnimation :total='number_of_leaves' />
		<div class="contact_contents">
			<h2 class="contact_contents--title">More</h2>
      <ButtonList class="contact_contents--links" :hasButton=false v-bind:list='list' />
		</div>
  </footer>

</template>

<script lang="js">
  import ButtonList from './../system/ButtonList.vue'
  import BackgroundAnimation from './../system/BackgroundAnimation.vue'

  export default  {
    name: 'contact',
    components: {
      ButtonList,
      BackgroundAnimation
    },
    props: [],
    mounted () {

    },
    data () {
    return {
        number_of_leaves: 24,
        list: [
          {link: "https://arjunkalburgi.com/writing",     icon: "blog",     alt: "View my Blog" },
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
  .contact {
    z-index: 1;
    text-align: center;
    width: 100%;
    position: relative;
    bottom: 0;
    background: var(--brand-colour);
    background-size: cover;
    margin: 0;
    min-height: 300px;

    &_contents {
      padding: 10vh 0;
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-row-gap: 2.5vh;

      &--title {
        color: #ffffff;
        margin: 0;
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 2;
      }

      &--links {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 3;
        position: relative;
        margin: auto;
      }
    }
  }
</style>
