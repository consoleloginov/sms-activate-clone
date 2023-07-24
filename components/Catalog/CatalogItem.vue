<script setup lang="ts">
  type Props = {
    id: string
    name: string
    minPrice: number
    logo_url: string
  }

  const {
    id,
    name,
    minPrice,
    logo_url,
  } = defineProps<Props>()
</script>

<template>
  <div class="CatalogItem">
    <img v-bind:src="logo_url" />
    <div class="font-semibold">{{ name }}</div>
    <div>от
      <span class="font-semibold">{{ minPrice }} ₽</span>
    </div>
  </div>
</template>

<style scoped>
  .CatalogItem {
    padding: 12px 28px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    &:nth-child(even) {
      @apply bg-slate-100;
    }
  }

  .CatalogItem img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }
</style>
