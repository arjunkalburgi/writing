<template>
  <div class="LogoImage">
    <img class="LogoImage_img light" src="../../assets/pics/LogoFull.svg" :alt="logo_alttext" />
    <img class="LogoImage_img dark" src="../../assets/pics/WhiteFull.svg" :alt="logo_alttext" />
  </div>
</template>

<script lang="js">
  export default  {
    name: 'LogoImage',
    components: { },
    props: [],
    mounted () { },
    data () { return {
      logo_alttext: "Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
    } },
    methods: { },
    computed: { }
  }
</script>

<style scoped lang="scss">
  .LogoImage {
    &_img { 
      width: inherit;
      &.dark { display: none; }
      &.light { display: block; }

      // DARK MODE 
      @media (prefers-color-scheme: dark) {
          &.light { display: none; }
          &.dark { display: block; }
      }
    }
  }
</style>
