<template lang="html">

  <div class="portfolioitem">
    <div class="portfolioitem_left">
      <h2 class="portfolioitem_title">{{item.title}}</h2>
      <small class="portfolioitem_tags">{{item.tags}}</small>
      <p class="portfolioitem_description">{{item.description}}</p>
      <div>
        <Button class="portfolioitem_button" :link="item.buttonlink" :text="item.buttontext" />
      </div>
    </div>
    <div class="portfolioitem_image">
      <div class="image b-lazy" :class="item.image" :title="item.alt"></div>
    </div>
  </div>

</template>

<script lang="js">
  import Button from './../system/Button.vue'

  export default  {
    name: 'PortfolioItem',
    components: {
      Button,
    },
    props: ["item"],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">

  .portfolioitem {
    display: grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 15%;
    grid-template-rows: 18% 18% 43% auto;
    margin: 15vh 0;

    @media screen and (max-width: 40em) { display: block; }

    > * { margin: 0; }

    &_left {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    &_title {
      margin-bottom: 1vh;
      white-space: nowrap; 
      @media screen and (max-width: 40em) { white-space: unset; }
    }

    &_tags {
      margin-bottom: 3vh;
    }

    &_description {
      margin-bottom: 3vh;
    }

    &_button {
    }

    &_image {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 5;
      margin: 20px;

      @media screen and (max-width: 40em) { display: none; }
    }
  }

  .image.slack { background-image: url("../../assets/pics/slack.jpeg") }
  .image.style { background-image: url("../../assets/pics/style.jpg") }
  .image.surf { background-image: url("../../assets/pics/surf.jpg"); filter: grayscale(0.6); }
  .image.tasks { background-image: url("../../assets/pics/tasks.jpg"); filter: grayscale(0.6); }
</style>
