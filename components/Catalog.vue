<script setup lang="ts">
  import response from '@/heap/getAllServicesDesktop-response-example.json'

  const items = response.data.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  })
</script>

<template>
  <div class="Catalog">
    <div class="Catalog-item" v-for="item of items" v-bind:key="item.shortName">
      <img v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${item.shortName}0.webp`" />
      <div class="Catalog-item-name">{{item.name }}</div>
      <div v-if="item.forward" class="Catalog-item-forward">+переадресация</div>
      <div class="Catalog-item-totalCount">{{ item.totalCount }} шт</div>
      <div class="Catalog-item-minFreePrice">
        от
        <span class="font-semibold">{{ item.minFreePrice }} ₽</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
  }

  .Catalog-item {
    padding: 12px 28px;
    display: grid;
    grid-template:
      'img name       minFreePrice'
      'img forward    minFreePrice' auto
      'img totalCount minFreePrice' / auto 1fr auto;
    align-items: center;

    &:nth-child(even) {
      @apply bg-slate-100;
    }
  }

  .Catalog-item img {
    grid-area: img;

    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }

  .Catalog-item-name {
    grid-area: name;

    font-weight: 600;
  }

  .Catalog-item-totalCount {
    grid-area: totalCount;

    @apply text-xs text-gray-500;
  }

  .Catalog-item-forward {
    grid-area: forward;

    @apply text-xs;
  }

  .Catalog-item-minFreePrice {
    grid-area: minFreePrice;
  }
</style>
