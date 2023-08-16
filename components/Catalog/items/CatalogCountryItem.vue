<script setup lang="ts">
  import {useCatalogStore, useCatalogFavoritesStore} from '../stores'
  import type {CatalogCountryItem} from '../types'

  const favorites = useCatalogFavoritesStore()

  const country = defineProps<CatalogCountryItem>()

  const [isFavorite, toggleIsFavorite] = $(useToggle(country.in_favorites ?? false))

  watch($$(isFavorite), () => {
    if (isFavorite) favorites.add(country)
    else favorites.remove(country)
  })

  const {
    id,
    name,
    price,
    quantity,
    flag_url,
  } = country
</script>

<template>
  <div class="CatalogCountryItem">
    <button class="CatalogItem-toggleIsFavorite" v-on:click.stop="toggleIsFavorite()">
      <Icon name="ri:heart-fill" v-if="isFavorite" class="CatalogItem-toggleIsFavorite-icon fill" />
      <Icon name="ri:heart-line" v-else class="CatalogItem-toggleIsFavorite-icon" />
    </button>
    <img class="CatalogCountryItem-flag" v-bind:src="flag_url" />
    <div class="grow">
      <div class="CatalogCountryItem-name">{{ name }}</div>
      <div class="CatalogCountryItem-quantity">{{ quantity }} шт</div>
    </div>
    <div class="CatalogCountryItem-price">
      {{ price }} ₽
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogCountryItem {
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

  .CatalogCountryItem-flag {
    width: 40px;
    height: 30px;
    border-radius: 4px;

    @apply shadow;
  }

  .CatalogCountryItem-name {
    font-weight: 600;
  }

  .CatalogCountryItem-quantity {
    @apply text-xs;
  }

  .CatalogCountryItem-price {
    font-weight: 600;
  }
</style>
