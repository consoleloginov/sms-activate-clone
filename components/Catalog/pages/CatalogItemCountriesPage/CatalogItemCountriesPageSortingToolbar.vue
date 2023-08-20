<script setup lang="ts">
  import {useCatalogItemCountriesPageStore} from './useCatalogItemCountriesPageStore'

  let {sortBy} = $(useCatalogItemCountriesPageStore())

  const sortingOptions = [
    {label: 'по умолчанию', value: 'default'},
    {label: 'по алфавиту', value: 'name'},
    {label: 'по цене', value: 'price'},
    {label: 'по количеству номеров', value: 'quantity'},
  ]

  const selectedOption = $computed(() => (
    sortingOptions.find((option) => option.value === sortBy)
  ))
</script>

<template>
  <div class="CatalogItemCountriesPageSortingToolbar">
    <CatalogUSelectMenu
      v-model="sortBy"
      v-bind:options="sortingOptions"
      valueAttribute="value"
    >
      <div class="CatalogItemCountriesPageToolbar">
        Сортировать
        <span class="text-blue-500 font-600">
          {{selectedOption?.label}}
        </span>
      </div>
    </CatalogUSelectMenu>
  </div>
</template>

<style lang="scss">
  .CatalogItemCountriesPageSortingToolbar {
    position: sticky;
    bottom: 0;
    padding: 4px 12px;
    background: white;
    border-top: 1px solid;
    border-color: theme('colors.gray.200');
  }
</style>
