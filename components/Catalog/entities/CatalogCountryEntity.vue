<script setup lang="ts">
  import {useCatalogStore} from '../stores'
  import {type CatalogCountry} from '../types'

  type CatalogCountryEntityProps = CatalogCountry & {
    showToggleIsFavorite?: boolean
  }

  // let {selectedCountry} = $(useCatalogStore())

  const country = defineProps<CatalogCountryEntityProps>()
  const {
    name,
    flag_url,
    quantity,
    favorite,
    showToggleIsFavorite,
  } = country

  // watch($$(isFavorite), () => {
  //   if (isFavorite) favorites.add(country)
  //   else favorites.delete(country)
  // })
</script>

<template>
  <div class="CatalogCountryEntity" v-on:click="">
    <CatalogToggleIsFavorite v-if="showToggleIsFavorite" />

    <img class="CatalogCountryEntity-flag" v-if="flag_url" v-bind:src="flag_url" />
    <div class="CatalogCountryEntity-flagPlaceholder" v-else></div>

    <div class="grow">
      <div class="CatalogCountryEntity-name"
        v-bind:class="{'text-base': !quantity}"
      >{{name}}</div>

      <div class="CatalogCountryEntity-quantity"
        v-if="quantity"
      >{{quantity}} шт</div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogCountryEntity {
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

  .CatalogCountryEntity-flag,
  .CatalogCountryEntity-flagPlaceholder {
    width: 40px;
    height: 30px;
    border-radius: 4px;
    background: theme('colors.gray.200');

    @apply shadow;
  }

  .CatalogCountryEntity-name {
    font-weight: 600;
  }

  .CatalogCountryEntity-quantity {
    font-size: 12px;
    line-height: 16px;
  }
</style>
