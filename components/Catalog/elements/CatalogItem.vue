<script setup lang="ts">
  import {useCatalogFavoritesCUD} from '../useCatalogFavoritesCUD'
  import type {CatalogItem} from '../types'

  type Props = CatalogItem & {
    showToggleIsFavorite?: boolean
  }

  const favoritesCUD = useCatalogFavoritesCUD()

  const {
    showToggleIsFavorite,
    ...item
  } = defineProps<Props>()
  const {
    name,
    logo_url,
    quantity,
    favorite,
  } = item

  // watch($$(isFavorite), () => {
  //   if (isFavorite) favoritesCUD.add(item)
  //   else favoritesCUD.del(item)
  // })
</script>

<template>
  <div class="CatalogItem">
    <CatalogToggleIsFavorite v-if="showToggleIsFavorite" />

    <img class="CatalogItem-logo" v-if="logo_url" v-bind:src="logo_url" />
    <div class="CatalogItem-logoPlaceholder" v-else></div>

    <div class="grow">
      <div class="CatalogItem-name"
        v-bind:class="{'text-base': !quantity}"
      >{{name}}</div>

      <div class="CatalogItem-quantity"
        v-if="quantity"
      >{{quantity}} шт</div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogItem {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      background: theme('colors.gray.100');
    }
  }

  .CatalogItem-logo,
  .CatalogItem-logoPlaceholder {
    width: 36px;
    height: 36px;
    margin: 0 2px;
    border-radius: 9999px;
    background: theme('colors.gray.200');

    @apply shadow;
  }

  .CatalogItem-name {
    font-weight: 600;
  }

  .CatalogItem-quantity {
    font-size: 12px;
    line-height: 16px;
  }
</style>
