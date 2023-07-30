<script setup lang="ts"></script>

<template>
  <div class="AuthLayout">
    <a class="AuthLayout-logo" href="#">
      <img class="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo" />
      Flowbite
    </a>

    <slot></slot>
  </div>
</template>

<style scoped>
  .AuthLayout {
    min-height: 100vh;
    display: grid;
    place-content: center;
    justify-items: center;
    padding: 32px 24px;

    @apply bg-gray-50;
  }

  .AuthLayout-logo {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    font-weight: 600;

    @apply text-2xl;
  }
</style>
