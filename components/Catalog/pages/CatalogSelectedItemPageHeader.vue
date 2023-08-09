<script setup lang="ts">
  import {useCatalogStore, useCatalogCountriesStore} from '../stores'

  let {selectedItem} = $(useCatalogStore())

  let {
    search,
    sortBy,
  } = $(useCatalogCountriesStore())

  const handleSortingControls = (arg: 'price' | 'quantity') => {
    if (sortBy !== arg) sortBy = arg
    else sortBy = undefined
  }
</script>

<template>
  <div class="CatalogSelectedItemPageHeader">
    <div class="flex items-center gap-2 mb-2.5">
      <div class="relative">
        <img
          class="CatalogSelectedItemPageHeader-logo"
          v-bind:src="selectedItem!.logo_url"
        />
        <button
          class="CatalogSelectedItemPageHeader-gobackButton"
          v-on:click="selectedItem = undefined"
        >
          <Icon
            class="CatalogSelectedItemPageHeader-gobackButton-icon"
            name="bx:left-arrow-alt"
            width="24px"
            height="24px"
          />
        </button>
      </div>

      <CatalogSearchInput v-model="search" />
    </div>

    <div class="CatalogSelectedItemPageHeader-sorting">
      <div class="CatalogSelectedItemPageHeader-sorting-label">Сортировать по:</div>
      <div class="flex gap-2">
        <button
          class="CatalogSelectedItemPageHeader-sorting-control"
          v-bind:class="{active: sortBy === 'price'}"
          v-on:click="handleSortingControls('price')"
        >
          Цене
        </button>
        <button
          class="CatalogSelectedItemPageHeader-sorting-control"
          v-bind:class="{active: sortBy === 'quantity'}"
          v-on:click="handleSortingControls('quantity')"
        >
          Кол-ву
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogSelectedItemPageHeader {
    padding: 16px 24px 10px 24px;
  }

  .CatalogSelectedItemPageHeader-logo {
    min-width: 36px;
    height: 36px;
    margin: 0 2px;
    border-radius: 9999px;
  }

  .CatalogSelectedItemPageHeader-gobackButton {
    position: absolute;
    top: 0;
    left: 2px;
    width: 36px;
    height: 36px;
    border-radius: 9999px;
    display: grid;
    place-content: center;

    @apply bg-black/40 opacity-0 hover:opacity-100 transition-opacity;
  }

  .CatalogSelectedItemPageHeader-gobackButton-icon {
    @apply text-white;
  }

  .CatalogSelectedItemPageHeader-sorting {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    white-space: nowrap;

    @apply text-xs;
  }

  .CatalogSelectedItemPageHeader-sorting-control {
    padding: 4px 6px;
    font-weight: 600;
    line-height: 12px;

    @apply rounded-full ring-inset ring-1 ring-gray-300 bg-gray-100;

    &:hover {
      @apply ring-orange-300 bg-orange-100;
    }

    &.active {
      @apply ring-orange-400 bg-orange-400 text-white;
    }
  }
</style>
