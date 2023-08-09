<script setup lang="ts">
  import type {CatalogCountryItem} from '../types'

  const country = defineProps<CatalogCountryItem>()

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
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;

    @apply transition-colors;

    &:hover {
      @apply bg-gray-100;
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
