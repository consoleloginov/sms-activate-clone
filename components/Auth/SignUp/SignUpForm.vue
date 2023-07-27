<script setup lang="ts">
  import {useSignUpFormStore} from './SignUpFormStore'

  const store = useSignUpFormStore()
  const {
    data,
    schema,
    submit,
    formRef,
  } = $(store)
</script>

<template>
  <NuxtForm class="SignUpForm"
    ref="formRef"
    v-bind:state="data"
    v-bind:schema="schema"
    v-on:submit.prevent="submit"
  >
    <h1>
      Зарегистрироваться
    </h1>

    <NuxtFormGroup name="email" label="Email">
      <NuxtInput v-model="data.email" color="gray" />
    </NuxtFormGroup>

    <NuxtFormGroup name="password" label="Пароль">
      <NuxtInput v-model="data.password" type="password" color="gray" />
    </NuxtFormGroup>

    <NuxtFormGroup name="passwordConfirm" label="Подтвердите пароль">
      <NuxtInput v-model="data.passwordConfirm" type="password" color="gray" />
    </NuxtFormGroup>

    <NuxtButton type="submit" block size="lg" class="mt-[10px]">
      Создать аккаунт
    </NuxtButton>

    <div>
      Есть аккаунт?
      <NuxtLink to="/auth/sign-in">Войти</NuxtLink>
    </div>
  </NuxtForm>
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
