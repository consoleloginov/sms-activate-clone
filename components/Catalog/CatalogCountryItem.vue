<script setup lang="ts">
  import type {CountryItem} from '@/stores/CatalogStore'

  type Props = CountryItem

  const {
    id,
    name,
    price,
    quantity,
    flag_url,
  } = defineProps<Props>()
</script>

<template>
  <div class="CatalogCountryItem">
    <img v-bind:src="flag_url" />
    <div class="grid-area-[name] font-semibold">{{ name }}</div>
    <div class="grid-area-[quantity] text-xs">{{ quantity }} шт</div>
    <div class="grid-area-[price] font-semibold">
      {{ price }} ₽
    </div>
  </div>
</template>

<style scoped>
  .CatalogCountryItem {
    padding: 12px 28px;
    display: grid;
    grid-template:
      'img name     price'
      'img quantity price' / auto 1fr auto;
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
</style>
