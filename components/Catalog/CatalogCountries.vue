<script setup lang="ts">
  import CatalogCountryItem from './CatalogCountryItem.vue'

  type Props = {
    selectedItem: {
      shortName: string
      forward: number
      totalCount: number
      minFreePrice: number
      name: string
      nameSearch: string
    }
  }

  const {
    selectedItem,
  } = defineProps<Props>()

  const emit = defineEmits(['goback'])

  let countries = $ref(await $fetch('/api/catalog/countries'))

  let sortBy = $ref<'price' | 'count'>()

  watch($$(sortBy), async () => {
    countries = await $fetch('/api/catalog/countries', {
      query: {sortBy}
    })
  })

  const handleSortingButtons = (arg: 'price' | 'count') => {
    if (sortBy !== arg) sortBy = arg
    else sortBy = undefined
  }

  const loadMoreCountries = async (offset: number) => {
    const moreCountries = await $fetch('/api/catalog/countries', {
      query: {offset, sortBy}
    })

    countries.push(...moreCountries)
  }

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries(countries.length)
  })
</script>

<template>
  <div class="CatalogCountries">
    <div class="CatalogCountries-header">
      <div class="CatalogCountries-header-item">
        <img
          v-bind:src="`https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${selectedItem.shortName}0.webp`"
          v-on:click="emit('goback')"
        />
        <div class="CatalogCountries-header-item-name">{{ selectedItem.name }}</div>
        <div v-if="selectedItem.forward" class="CatalogCountries-header-item-forward">+переадресация</div>
      </div>
    </div>

    <div class="CatalogCountries-scrollContainer" ref="scrollContainer">
      <div class="CatalogCountries-sorting">
        <span class="font-semibold">Сортировать по:</span>

        <button
          v-bind:class="{active: sortBy === 'price'}"
          v-on:click="handleSortingButtons('price')"
        >Цене</button>
        <button
          v-bind:class="{active: sortBy === 'count'}"
          v-on:click="handleSortingButtons('count')"
        >Кол-ву</button>
      </div>

      <CatalogCountryItem
        v-for="country of countries"
        v-bind:key="country.country"
        v-bind="country"
      />
    </div>
  </div>
</template>

<style scoped>
  .CatalogCountries {
    @apply text-white bg-sky-900;
  }

  .CatalogCountries-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }

  .CatalogCountries-header {

  }

  .CatalogCountries-header-item {
    padding: 12px 28px;
    display: grid;
    grid-template:
      'img name' 1fr
      'img forward' auto / auto 1fr;
    /* align-content: center; */
    align-items: center;

    @apply bg-sky-900 text-white;
  }

  .CatalogCountries-header-item img {
    grid-area: img;

    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }

  .CatalogCountries-header-item-name {
    grid-area: name;

    font-weight: 600;
  }

  .CatalogCountries-header-item-forward {
    grid-area: forward;

    @apply text-xs;
  }

  .CatalogCountries-sorting {
    padding: 0 18px 12px 28px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto auto;
    gap: 8px;
  }

  .CatalogCountries-sorting button {
    padding: 4px 8px;
    line-height: 1;
    border-radius: 9999px;

    font-weight: 600;

    @apply border-2 border-orange-500;

    &:hover, &.active {
      @apply bg-orange-500;
    }
  }
</style>
