<script setup lang="ts">
  import {useCatalogStore} from '../stores'
  import {type CatalogItem} from '../types'

  type CatalogItemEntityProps = CatalogItem & {
    showToggleIsFavorite?: boolean
  }

  let {selectedItem} = $(useCatalogStore())

  const item = defineProps<CatalogItemEntityProps>()
  const {
    name,
    logo_url,
    quantity,
    favorite,
    showToggleIsFavorite,
  } = item

  // watch($$(isFavorite), () => {
  //   if (isFavorite) favorites.add(item)
  //   else favorites.delete(item)
  // })
</script>

<template>
  <div class="CatalogItemEntity" v-on:click="selectedItem = item">

    <img class="CatalogItemEntity-logo" v-if="logo_url" v-bind:src="logo_url" />
    <div class="CatalogItemEntity-logoPlaceholder" v-else></div>

    <div class="grow">
      <div class="CatalogItemEntity-name"
        v-bind:class="{'text-base': !quantity}"
      >{{name}}</div>

      <div class="CatalogItemEntity-quantity"
        v-if="quantity"
      >{{quantity}} шт</div>
    </div>

    <CatalogToggleIsFavorite v-if="showToggleIsFavorite" />
  </div>
</template>

<style lang="scss">
  .CatalogItemEntity {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      background: theme('colors.gray.100');
    }
  }

  .CatalogItemEntity-logo,
  .CatalogItemEntity-logoPlaceholder {
    width: 36px;
    height: 36px;
    margin: 0 2px;
    border-radius: 9999px;
    background: theme('colors.gray.200');

    @apply shadow;
  }

  .CatalogItemEntity-name {
    font-weight: 600;
  }

  .CatalogItemEntity-quantity {
    font-size: 12px;
    line-height: 16px;
  }
</style>
