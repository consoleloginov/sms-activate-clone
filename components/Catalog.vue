<script setup lang="ts">
  import CatalogCountries from './CatalogCountries.vue'

  import response from '@/heap/getAllServicesDesktop-response-example.json'

  const items = response.data.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  })

  type State = {
    activeItemId: string | null
  }

  const state = reactive<State>({
    activeItemId: null
  })

  const handleClickOnItem = (itemId: string) => {
    if (itemId !== state.activeItemId) {
      state.activeItemId = itemId
    } else {
      state.activeItemId = null
    }
  }
</script>

<template>
  <div class="Catalog">
    <div v-for="item of items" v-bind:key="item.shortName">
      <div
        class="Catalog-item"
        v-bind:class="{active: state.activeItemId === item.shortName}"
        v-on:click="handleClickOnItem(item.shortName)"
      >
        <img v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${item.shortName}0.webp`" />
        <div class="Catalog-item-name">{{item.name }}</div>
        <div v-if="item.forward" class="Catalog-item-forward">+переадресация</div>
        <div class="Catalog-item-totalCount">{{ item.totalCount }} шт</div>
        <div class="Catalog-item-minFreePrice">
          от
          <span class="font-semibold">{{ item.minFreePrice }} ₽</span>
        </div>
      </div>

      <CatalogCountries v-if="state.activeItemId === item.shortName"/>
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

    &.active {
      @apply bg-sky-900 text-white;

      .Catalog-item-totalCount {
        @apply text-white;
      }
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
