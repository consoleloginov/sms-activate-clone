export type SignUpFormData = {
  email: string
  password: string
  confirmPassword: string
}

export const useSignUpFormStore = defineStore('SignUpForm', () => {
  const supabase = useSupabaseClient()

  const formData = $ref<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const submit = async () => {
    const response = supabase.auth.signUp(formData)
  }

  return $$({
    formData,
    submit,
  })
})
