<script setup lang="ts">
  import type {Item} from '@/stores/CatalogStore'

  type Props = Item

  const {
    id,
    name,
    minPrice,
    logo_url,
  } = defineProps<Props>()
</script>

<template>
  <div class="CatalogItem">
    <img class="CatalogItem-logo" v-bind:src="logo_url" />
    <div class="grow">
      <div class="CatalogItem-name">{{ name }}</div>
    </div>
    <div class="CatalogItem-minPrice">от
      <span class="font-semibold">{{ minPrice }} ₽</span>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogItem {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      @apply bg-gray-100;
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
