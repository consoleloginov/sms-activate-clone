<script setup lang="ts">

</script>

<template>
  <div class="CatalogHomePage">
    <div class="CatalogHomePage-scrollContainer" ref="scrollContainer">
      <CatalogHomePageHeader />
      <CatalogHomePageNav />
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogHomePage {
    height: 100%;
  }

  .CatalogHomePage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
