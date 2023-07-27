<script setup lang="ts">
  import {useSignInFormStore} from './SignInFormStore'

  const store = useSignInFormStore()
  const {
    data,
    schema,
    submit,
    submitError,
  } = $(store)
</script>

<template>
  <form class="SignInForm"
    ref="formRef"
    v-bind:state="data"
    v-bind:schema="schema"
    v-on:submit.prevent="submit"
  >
    <h1>
      Войти в аккаунт
    </h1>

    <NuxtFormGroup name="email" label="Email">
      <NuxtInput v-model="data.email" color="gray" />
    </NuxtFormGroup>

    <div>
      <NuxtFormGroup name="password" label="Пароль">
        <NuxtInput v-model="data.password" type="password" color="gray" />
      </NuxtFormGroup>

      <div class="mt-1 text-end">
        <NuxtLink>Забыли пароль?</NuxtLink>
      </div>
    </div>

    <NuxtButton type="submit" block size="lg" class="mt-[10px]">
      <span class="text-lg/5">&#129106;</span>
    </NuxtButton>

    <span v-if="submitError" class="text-red-500">{{submitError}}</span>

    <div>
      Еще нет аккаунта?
      <NuxtLink to="/auth/sign-in">Зарегистрироваться</NuxtLink>
    </div>
  </form>
</template>

<style scoped>
  .SignInForm {
    width: 460px;
    padding: 40px 80px;
    display: grid;
    gap: 20px;
    border-radius: 8px;

    @apply bg-white shadow;
  }

  .SignInForm h1 {
    font-weight: 600;

    @apply text-2xl;
  }

  .SignInForm a {
    @apply text-blue-600;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
