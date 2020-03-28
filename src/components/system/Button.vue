<template lang="html">
  <a class="button" :href="link" :target="newTab ? 'blank' : ''" :alt="alttext | ''" >{{text}}</a>
</template>

<script lang="js">

  export default  {
    name: 'src-components-system-button',
    props: ['link', 'text', 'new-tab', 'alttext'],
    mounted () { },
    data () { return { } },
    methods: { },
    computed: { }
}


</script>

<style scoped lang="scss">
  .button {
    background-color: var(--brand-colour);
    color: var(--brand-contrastlight);
    font: var(--button-text);
    text-transform: uppercase;
    letter-spacing: 1.2px;
    line-height: 17px;
    padding: 1rem 2rem;
    position: relative;
    margin: 20px 0;
    border-radius: 3px;
    text-decoration: none;
    border: 0;

    transition: background-color 500ms;

    &:focus {
      background-color: #109155;
      @media (prefers-color-scheme: dark) { background-color: #068047; }
    }

    &:hover {
      background-color: #0e824c;
      @media (prefers-color-scheme: dark) { background-color: #036f3d; }
    }
  }
</style>
