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

    <NuxtFormGroup label="Email">
      <NuxtInput v-model="formData.email" color="gray" />
    </NuxtFormGroup>

    <NuxtFormGroup label="Пароль">
      <NuxtInput v-model="formData.password" type="password" color="gray" />
    </NuxtFormGroup>

    <NuxtFormGroup label="Подтвердите пароль">
      <NuxtInput v-model="formData.confirmPassword" type="password" color="gray" />
    </NuxtFormGroup>

    <NuxtButton type="submit" block size="lg" class="mt-[10px]">
      Создать аккаунт
    </NuxtButton>

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
