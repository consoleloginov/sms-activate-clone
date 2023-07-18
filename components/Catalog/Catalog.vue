<script setup lang="ts">
  import CatalogCountries from './CatalogCountries.vue'
  import CatalogItem from './CatalogItem.vue'

  import response from '@/heap/getAllServicesDesktop-response-example.json'

  const items = response.data.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  })

  type State = {
    selectedItemId: string | null
  }

  const state = reactive<State>({
    selectedItemId: null
  })

  const handleClickOnItem = (itemId: string) => {
    if (itemId !== state.selectedItemId) {
      state.selectedItemId = itemId
    } else {
      state.selectedItemId = null
    }
  }
</script>

<template>
  <div class="Catalog">
    <div v-for="item of items" v-bind:key="item.shortName">
      <CatalogItem
        v-bind="item"
        v-bind:selected="state.selectedItemId === item.shortName"
        v-on:click="handleClickOnItem(item.shortName)"
      />
      <CatalogCountries v-if="state.selectedItemId === item.shortName" />
    </div>
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
  }
</style>
