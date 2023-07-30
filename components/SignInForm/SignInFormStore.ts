import {defineStore, acceptHMRUpdate} from 'pinia'

import z from 'zod'
import type {Form} from '@nuxthq/ui/dist/runtime/types'

export type SignInFormData = {
  email: string
  password: string
}

export const useSignInFormStore = defineStore('SignInForm', () => {
  const supabase = useSupabaseClient()

  const data = $ref<SignInFormData>({
    email: '',
    password: '',
  })

  const schema = z.object({
    email: z.string(),
    password: z.string(),
  })

  type Schema = z.output<typeof schema>

  const formRef = $ref<Form<Schema>>()

  let submitError = $ref<string>()

  const submit = async () => {
    console.log('submit')

    formRef?.validate()

    const response = await supabase.auth.signInWithPassword(data)

    if (response.error) {
      console.log(response.error)

      submitError = 'Пользователь не найден'
    }
  }

  return $$({
    data,
    schema,
    submit,
    submitError,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSignInFormStore, import.meta.hot))
}
