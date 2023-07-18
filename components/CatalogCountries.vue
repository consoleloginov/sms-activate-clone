<script setup lang="ts">
  import response from '@/heap/countriesStackRender-response-example.json'

  const items = response.data.cards
</script>

<template>
  <div class="CatalogCountries">
    <div class="CatalogCountries-item" v-for="item of items" v-bind:key="item.country">
      <img v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${item.country}.svg`" />
      <div class="CatalogCountries-item-name">{{item.name }}</div>
      <div class="CatalogCountries-item-totalCount">{{ item.totalCount }} шт</div>
      <div class="CatalogCountries-item-minPrice">
        {{ item.prices.min }} ₽
      </div>
    </div>
  </div>
</template>

<style scoped>
  .CatalogCountries {
    @apply text-white bg-sky-900;
  }

  .CatalogCountries-item {
    padding: 12px 28px;
    display: grid;
    grid-template:
      'img name       minPrice'
      'img totalCount minPrice' / auto 1fr auto;
    align-items: center;

    &:nth-child(even) {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .CatalogCountries-item img {
    grid-area: img;

    width: 36px;
    margin-right: 8px;
    border-radius: 4px;
  }

  .CatalogCountries-item-name {
    grid-area: name;

    font-weight: 600;
  }

  .CatalogCountries-item-totalCount {
    grid-area: totalCount;

    @apply text-xs;
  }

  .CatalogCountries-item-minPrice {
    grid-area: minPrice;

    font-weight: 600;
  }
</style>
