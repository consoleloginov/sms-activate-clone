<script setup lang="ts">
  import {useCatalogRouter} from '../../CatalogRouter/useCatalogRouter'

  let {route} = $(useCatalogRouter())
</script>

<template>
  <div class="CatalogHomePageNav">
    <ul>
      <li v-on:click="route = '/items'">Все сервисы</li>
      <li v-on:click="route = '/countries'">Все страны</li>
    </ul>
  </div>
</template>

<style lang="scss">
  .CatalogHomePageNav {

  }

  .CatalogHomePageNav ul {

  }

  .CatalogHomePageNav li {
    padding: 6px 16px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      background: theme('colors.gray.100');
    }
  }
</style>
