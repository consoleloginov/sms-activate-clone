<script setup lang="ts">
  const emit = defineEmits<{
    (event: 'click:icon'): void
  }>()

  let {modelValue} = defineModels<{modelValue?: string}>()
</script>

<template>
  <div class="relative">
    <input
      class="CatalogSearchInput"
      type="search"
      placeholder="..."
      v-model="modelValue"
    />

    <div class="absolute top-0 right-0 w-9 h-9 grid place-content-center cursor-text">
      <Icon
        v-if="modelValue ? modelValue?.length === 0 : true"
        name="bx:search"
        class="text-gray-500"
        width="18px"
        height="18px"
      />

      <button v-else v-on:click="modelValue = ''">
        <Icon
          name="bx:x"
          class="text-gray-500 hover:text-blue-500"
          width="22px"
          height="22px"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogSearchInput {
    width: 100%;
    height: 36px;
    padding-left: 12px;
    padding-right: 36px;
    border-radius: 10px;

    @apply ring-inset ring-1 ring-gray-300 bg-gray-100;

    &:focus {
      outline: none;

      @apply ring-2 ring-blue-500;
    }

    &::placeholder {
      @apply text-gray-500;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  .CatalogSearchInput-icon {
    @apply text-gray-500;
  }
</style>
