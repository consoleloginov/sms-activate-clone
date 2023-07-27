import z from 'zod'
import type {Form} from '@nuxthq/ui/dist/runtime/types'

export type SignUpFormData = {
  email: string
  password: string
  passwordConfirm: string
}

export const useSignUpFormStore = defineStore('SignUpForm', () => {
  const supabase = useSupabaseClient()

  const data = $ref<SignUpFormData>({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const schema = z.object({
    email: z.string().email('Недопустимый формат эл. почты'),
    password: z.string().min(8, 'Пароль должен содержать не менее 8 символов'),
    passwordConfirm: z.string(),
  }).refine(({
    password,
    passwordConfirm
  }) => password === passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
  })

  type Schema = z.output<typeof schema>

  const formRef = $ref<Form<Schema>>()

  let submitError = $ref<string>()

  const submit = async () => {
    console.log('submit')

    try {
      await formRef?.validate()

      const response = await supabase.auth.signUp(data)

      if (response.error && response.error.message === 'User already registered') {
        submitError = 'Другой пользователь уже использовал эту эл. почту для создания аккаунта'
      }
    } catch (err) {
      console.log(err)
    }
  }

  return $$({
    data,
    schema,
    submit,
    formRef,
    submitError,
  })
})
