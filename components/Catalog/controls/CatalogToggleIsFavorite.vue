<script setup lang="ts">
  const {modelValue: isFavorite} = defineModels<{modelValue?: string}>()

  const toggleIsFavorite = useToggle(isFavorite)
</script>

<template>
  <button class="CatalogToggleIsFavorite"
    v-on:click.stop="toggleIsFavorite()"
  >
    <Icon
      class="CatalogToggleIsFavorite-icon fill"
      v-if="isFavorite"
      name="ri:heart-fill"
    />
    <Icon
      class="CatalogToggleIsFavorite-icon"
      v-else
      name="ri:heart-line"
    />
  </button>
</template>

<style lang="scss">
  .CatalogToggleIsFavorite {
    padding: 2px;
    border-radius: 6px;

    @apply transition-colors;

    &:hover {
      background: theme('colors.rose.200');

      .CatalogToggleIsFavorite-icon {
        color: theme('colors.rose.400');
      }
    }
  }

  .CatalogToggleIsFavorite-icon {
    width: 20px;
    height: 20px;

    color: theme('colors.gray.400');

    &.fill {
      color: theme('colors.rose.400');
    }
  }
</style>
