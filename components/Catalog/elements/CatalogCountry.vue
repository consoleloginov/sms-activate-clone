<script setup lang="ts">
  import type {CatalogCountry} from '../types'

  type Props = CatalogCountry

  const country = defineProps<Props>()
  const {
    name,
    flag_url,
    quantity,
  } = country
</script>

<template>
  <div class="CatalogCountry">
    <!-- <CatalogToggleIsFavorite v-if="showToggleIsFavorite" /> -->

    <img class="CatalogCountry-flag" v-if="flag_url" v-bind:src="flag_url" />
    <div class="CatalogCountry-flagPlaceholder" v-else></div>

    <div class="grow">
      <div class="CatalogCountry-name"
        v-bind:class="{'text-base': !quantity}"
      >{{name}}</div>

      <div class="CatalogCountry-quantity"
        v-if="quantity"
      >{{quantity}} шт</div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogCountry {
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

  .CatalogCountry-flag,
  .CatalogCountry-flagPlaceholder {
    width: 40px;
    height: 30px;
    border-radius: 4px;
    background: theme('colors.gray.200');

    @apply shadow;
  }

  .CatalogCountry-name {
    font-weight: 600;
  }

  .CatalogCountry-quantity {
    font-size: 12px;
    line-height: 16px;
  }
</style>
