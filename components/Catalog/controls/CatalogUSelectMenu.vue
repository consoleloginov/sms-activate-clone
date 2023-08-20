<script setup lang="ts">
  const uiMenu = {
    option: {
      padding: 'ps-7 pe-2',
      selectedIcon: {
        wrapper: 'start-0 end-auto pe-0 ps-2'
      }
    }
  }
</script>

<template>
  <USelectMenu v-bind:uiMenu="uiMenu">
    <slot></slot>
  </USelectMenu>
</template>

<style lang="scss">
  .CatalogUSelectMenu {

  }
</style>
