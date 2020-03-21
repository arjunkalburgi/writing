<template>
  <header class="Header">
    <a href="/">
      <img class="Header_logo light" src="./../../assets/pics/LogoFull.svg" title="Arjun Kalburgi Leaf Logo" />
      <img class="Header_logo dark" src="./../../assets/pics/WhiteFull.svg" title="Arjun Kalburgi Leaf Logo" />
    </a>
  </header>
</template>

<style scoped lang="scss">
  .Header {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &_logo {
      width: 200px;
      &.dark { display: none; }
    }
  }

  // DARK MODE 
  @media (prefers-color-scheme: dark) {
    .Header_logo { 
      &.light { display: none; }
      &.dark { display: block; }
    }
  }
</style>