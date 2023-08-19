<script setup lang="ts">

</script>

<template>
  <button class="CatalogGobackButton">
    <Icon class="CatalogGobackButton-icon"
      name="carbon:arrow-left"
    />
  </button>
</template>

<style lang="scss">
  .CatalogGobackButton {
    width: 24px;
    height: 24px;
    display: grid;
    place-content: center;
    border-radius: 6px;

    @apply transition-colors;

    &:hover {
      background: theme('colors.gray.200');
    }
  }

  .CatalogGobackButton-icon {
    width: 18px;
    height: 18px;

    color: theme('colors.gray.700');
  }
</style>
