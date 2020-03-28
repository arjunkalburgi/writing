<template lang="html">
  <ul class="buttonlist" role="navigation" :aria-labelledby="title">

    <li v-if="hasButton" :key="button.text" class="button">
      <Button class="buttonlist_button" :link="button.link" :text="button.text" :alttext="button.alt" />
    </li>

    <li v-for="item in list" :key="item.icon" class="icon">
      <a :href="item.link" class="buttonlist_icon" :class="hasButton ? '' : 'light'" :aria-label="item.alt" >
        <font-awesome-icon :icon="icon[item.icon]" />
      </a>
    </li>
  </ul>
</template>

<script lang="js">
  import Button from './../system/Button.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faEnvelope, faEdit } from '@fortawesome/free-regular-svg-icons'
  import { faTwitter, faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'

  export default  {
    name: 'ButtonList',
    components: {
      Button,
      FontAwesomeIcon
    },
    props: ['hasButton', 'button', 'list'],
    mounted () { },
    data () {
      return {
        icon: {
          email: faEnvelope,
          blog: faEdit,
          twitter: faTwitter,
          github: faGithub,
          linkedin: faLinkedinIn,
          codepen: faCodepen,
        }
      }
    },
    methods: { },
    computed: { }
  }

</script>

<style scoped lang="scss">
  .buttonlist {
    position: absolute;
    padding-left: 0px;
    margin-top: calc(18px - 6px); // needs to = 30px
  
    li {
      float: left;
      list-style: none;
      &:not(:first-of-type) { 
        margin: 0 0 0 20px;
        @media screen and (max-width: 40em) { margin: 0 0 0 4vw; }
      }

      .buttonlist_button { margin: 0; }

      a.buttonlist_icon {
        font: var(--icon-text);
        color: var(--brand-textcolour);
        &:hover { color: var(--brand-colourlight); }
        &:focus { color: var(--brand-colourdark); }

        &.light {
          color: var(--brand-contrastlight);
          &:hover { color: var(--brand-colourdark); }
          @media (prefers-color-scheme: dark) {
            &:hover { color: var(--brand-colourlight); }
          }
        }
      }
    }
  }
</style>
