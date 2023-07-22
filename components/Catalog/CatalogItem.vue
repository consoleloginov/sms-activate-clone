<script setup lang="ts">
  type Props = {
    selected?: boolean

    shortName: string
    forward: number
    totalCount: number
    minFreePrice: number
    name: string
    nameSearch: string
  }

  const {
    selected = false,
    name,
    shortName,
    minFreePrice,
    totalCount,
    forward,
  } = defineProps<Props>()
</script>

<template>
  <div
    class="CatalogItem"
    v-bind:class="{selected}"
  >
    <img v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${shortName}0.webp`" />
    <div class="CatalogItem-name">{{ name }}</div>
    <div v-if="forward" class="CatalogItem-forward">+переадресация</div>
    <div class="CatalogItem-totalCount">{{ totalCount }} шт</div>
    <div class="CatalogItem-minFreePrice">
      от
      <span class="font-semibold">{{ minFreePrice }} ₽</span>
    </div>
  </div>
</template>

<style scoped>
  .CatalogItem {
    padding: 12px 28px;
    display: grid;
    grid-template:
      'img name       minFreePrice' 1fr
      'img forward    minFreePrice' auto
      'img totalCount minFreePrice' 1fr / auto 1fr auto;
    align-items: center;

    &:nth-child(even) {
      @apply bg-slate-100;
    }

    &.selected {
      @apply bg-sky-900 text-white;

      .CatalogItem-totalCount {
        @apply text-white;
      }
    }
  }

  .CatalogItem img {
    grid-area: img;

    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }

  .CatalogItem-name {
    grid-area: name;

    font-weight: 600;
  }

  .CatalogItem-totalCount {
    grid-area: totalCount;

    @apply text-xs text-gray-500;
  }

  .CatalogItem-forward {
    grid-area: forward;

    @apply text-xs;
  }

  .CatalogItem-minFreePrice {
    grid-area: minFreePrice;
  }
</style>
