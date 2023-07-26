<script setup lang="ts"></script>

<template>
  <form class="SignUpForm">
    <h1>
      Зарегистрироваться
    </h1>

    <UFormGroup label="Email">
      <UInput color="gray" />
    </UFormGroup>

    <UFormGroup label="Пароль">
      <UInput type="password" color="gray" />
    </UFormGroup>

    <UFormGroup label="Подтвердите пароль">
      <UInput type="password" color="gray" />
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
