<script setup lang="ts"></script>

<template>
  <div class="AuthPage">
    <a class="AuthPage-logo" href="#">
      <img class="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo" />
      Flowbite
    </a>

    <NuxtPage />
  </div>
</template>

<style scoped>
  .AuthPage {
    min-height: 100vh;
    display: grid;
    place-content: center;
    justify-items: center;
    padding: 32px 24px;

    @apply bg-gray-50;
  }

  .AuthPage-logo {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    font-weight: 600;

    @apply text-2xl;
  }
</style>
