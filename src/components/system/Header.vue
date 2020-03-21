<template>
  <header class="Header">
    <img class="Header_logo light" src="./../../assets/pics/LogoFull.svg" title="Arjun Kalburgi Leaf Logo" />
    <img class="Header_logo dark" src="./../../assets/pics/WhiteFull.svg" title="Arjun Kalburgi Leaf Logo" />
  </header>
</template>

<style scoped lang="scss">
  .Header_logo {
    width: 200px;
    &.dark { display: none; }
  }

  // DARK MODE 
  @media (prefers-color-scheme: dark) {
    .Header {
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      &_logo { 
        &.light { display: none; }
        &.dark { display: block; }
      }
    }
  }
</style>