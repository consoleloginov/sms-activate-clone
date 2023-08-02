<script setup lang="ts">
  const supabase = useSupabaseClient()
  const user = $(useSupabaseUser())

  const signOut = async () => {
    console.log('signOut')
    const {error} = await supabase.auth.signOut()
    if (error) console.log(error)
  }
</script>

<template>
  <header class="DefaultLayoutHeader">
    <div class="flex items-center text-2xl font-600">
      <img class="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo" />

      Flowbite
    </div>

    <!-- <div class="flex gap-x-[16px]">
      <div v-for="_ of 4"
        class="w-[150px] h-[24px] bg-slate-100"
      />
    </div> -->

    <template v-if="user">
      <NuxtPopover>
        <div v-if="user" class="DefaultLayoutHeader-user">
          <div class="DefaultLayoutHeader-user-avatar">
            <Icon name="mdi:user" />
          </div>
          <div>
            <div>{{ user.email }}</div>
            <div class="font-600 text-orange-500">10 000.99 ₽</div>
          </div>
        </div>

        <template v-slot:panel>
          <div class="w-[200px]">
            <div class="flex flex-col p-2 gap-2 border-b border-gray-200">
              <div v-for="_ of 3" class="w-full h-5 bg-slate-200">
              </div>
            </div>
          </div>
          <div class="p-2">
            <NuxtButton
              block
              color="red"
              variant="soft"
              v-on:click="signOut()"
            >
              Выйти из аккаунта
            </NuxtButton>
          </div>
        </template>
      </NuxtPopover>
    </template>

    <div v-else class="flex gap-x-2">
      <NuxtButton to="/sign-in" color="gray">
        Войти
      </NuxtButton>

      <NuxtButton to="/sign-up">
        Регистрация
      </NuxtButton>
    </div>
  </header>
</template>

<style scoped>
  .DefaultLayoutHeader {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 32px;
    column-gap: 32px;

    @apply border-b border-gray-200 bg-white;
  }

  .DefaultLayoutHeader-user {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }


  .DefaultLayoutHeader-user-avatar {
    width: 36px;
    height: 36px;

    display: grid;
    place-content: center;

    @apply rounded-lg border border-orange-500;
  }

  .DefaultLayoutHeader-user-avatar .icon {
    width: 24px;
    height: 24px;
    color: theme('colors.orange.500');
  }
</style>
