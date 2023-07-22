<script setup lang="ts">
  type Props = {
    country: number
    name: string
    price: number
    count: number
  }

  const {
    country,
    name,
    price,
    count,
  } = defineProps<Props>()
</script>

<template>
    <div class="CatalogCountryItem">
      <img v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${country}.svg`" />
      <div class="CatalogCountryItem-name">{{ name }}</div>
      <div class="CatalogCountryItem-count">{{ count }} шт</div>
      <div class="CatalogCountryItem-price">
        {{ price }} ₽
      </div>
    </div>
</template>

<style scoped>
  .CatalogCountryItem {
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

  .CatalogCountryItem img {
    grid-area: img;

    width: 36px;
    margin-right: 8px;
    border-radius: 4px;
  }

  .CatalogCountryItem-name {
    grid-area: name;

    font-weight: 600;
  }

  .CatalogCountryItem-count {
    grid-area: totalCount;

    @apply text-xs;
  }

  .CatalogCountryItem-price {
    grid-area: minPrice;

    font-weight: 600;
  }
</style>
