<script setup lang="ts">
  import {useCatalogStore, useCatalogFavoritesStore} from '../stores'
  import type {CatalogItem} from '../types'

  const favorites = useCatalogFavoritesStore()

  let {selectedItem} = $(useCatalogStore())

  const item = defineProps<CatalogItem>()

  const [isFavorite, toggleIsFavorite] = $(useToggle(item.in_favorites ?? false))

  watch($$(isFavorite), () => {
    if (isFavorite) favorites.add(item)
    else favorites.remove(item)
  })

  const {
    name,
    min_price,
    logo_url,
  } = item
</script>

<template>
  <div class="CatalogItem" v-on:click="selectedItem = item">
    <button class="CatalogItem-toggleIsFavorite" v-on:click.stop="toggleIsFavorite()">
      <Icon name="ri:heart-fill" v-if="isFavorite" class="CatalogItem-toggleIsFavorite-icon fill" />
      <Icon name="ri:heart-line" v-else class="CatalogItem-toggleIsFavorite-icon" />
    </button>
    <img class="CatalogItem-logo" v-bind:src="logo_url" />
    <div class="grow">
      <div class="CatalogItem-name">{{ name }}</div>
    </div>
    <div class="CatalogItem-minPrice">от
      <span class="font-semibold">{{ min_price }} ₽</span>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogItem {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      @apply bg-gray-100;
    }
  }

  .CatalogItem-toggleIsFavorite {
    padding: 2px;

    @apply rounded-md transition-colors;

    &:hover {
      background: theme('colors.rose.200');
    }
  }

  .CatalogItem-toggleIsFavorite:hover
  .CatalogItem-toggleIsFavorite-icon {
    color: theme('colors.rose.400');
  }

  .CatalogItem-toggleIsFavorite-icon {
    width: 20px;
    height: 20px;

    color: theme('colors.gray.400');

    &.fill {
      color: theme('colors.rose.400');
    }
  }

  .CatalogItem-logo {
    width: 36px;
    height: 36px;
    margin: 0 2px;
    border-radius: 9999px;
  }

  .CatalogItem-name {
    font-weight: 600;
  }

  .CatalogItem-minPrice {
    white-space: nowrap;
  }
</style>
