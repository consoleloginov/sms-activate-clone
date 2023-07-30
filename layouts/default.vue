<template>
  <div class="DefaultLayout">
    <DefaultLayoutHeader />

    <div class="DefaultLayout-center">
      <aside class="w-[300px] py-[16px]">
        <div class="grid gap-y-[8px]">
          <div v-for="_ of 50" class="w-full h-[40px] bg-slate-100"></div>
        </div>
      </aside>

      <main class="py-[16px]">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style>
  .DefaultLayout {

  }

  .DefaultLayout-center {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-inline: 32px;
    column-gap: 16px;
  }
</style>
