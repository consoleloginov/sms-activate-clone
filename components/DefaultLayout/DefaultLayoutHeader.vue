<script setup lang="ts">

</script>

<template>
  <header class="DefaultLayoutHeader">
    <div class="flex items-center text-2xl font-600">
      <img class="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo" />

      Flowbite
    </div>

    <div class="flex gap-x-[16px]">
      <div v-for="_ of 4"
        class="w-[150px] h-[24px] bg-slate-100"
      />
    </div>
  </header>
</template>

<style scoped>
  .DefaultLayoutHeader {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    padding-inline: 32px;
    column-gap: 32px;

    @apply border-b border-gray-200 bg-white;
  }
</style>
