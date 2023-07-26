<script setup lang="ts">
  import {useSignUpFormStore} from './SignUpFormStore'

  const store = useSignUpFormStore()
  const {
    formData,
    submit,
  } = $(store)
</script>

<template>
  <form class="SignUpForm" v-on:submit.prevent="submit">
    <h1>
      Зарегистрироваться
    </h1>

    <UFormGroup label="Email">
      <UInput v-model="formData.email" color="gray" />
    </UFormGroup>

    <UFormGroup label="Пароль">
      <UInput v-model="formData.password" type="password" color="gray" />
    </UFormGroup>

    <UFormGroup label="Подтвердите пароль">
      <UInput v-model="formData.confirmPassword" type="password" color="gray" />
    </UFormGroup>

    <UButton type="submit" block size="lg" class="mt-[10px]">
      Создать аккаунт
    </UButton>

    <div>
      Есть аккаунт?
      <NuxtLink to="/auth/sign-in">Войти</NuxtLink>
    </div>
  </form>
</template>

<style scoped>
  .SignUpForm {
    width: 460px;
    padding: 40px 80px;
    display: grid;
    gap: 20px;
    border-radius: 8px;

    @apply bg-white shadow;
  }

  .SignUpForm h1 {
    font-weight: 600;

    @apply text-2xl;
  }

  .SignUpForm a {
    @apply text-blue-600;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
