<template>
  <div class="DefaultLayout">
    <DefaultLayoutHeader />

    <div class="DefaultLayout-center">
      <aside class="DefaultLayout-aside">
        <Catalog />
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
    align-items: start;
    padding-right: 24px;
    column-gap: 16px;
  }

  .DefaultLayout-aside {
    position: sticky;
    top: 60px;
  }
</style>
