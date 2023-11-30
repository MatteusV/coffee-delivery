'use client'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Register() {
  const registerFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
    state: z
      .string()
      .min(2)
      .max(2)
      .transform((val) => val.toUpperCase()),
    city: z.string(),
  })

  type FormRegisterData = z.infer<typeof registerFormSchema>

  const { register, handleSubmit } = useForm<FormRegisterData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegisterUser(data: FormRegisterData) {
    const response = await api.post('/registerUser', data)
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form
          method="post"
          onSubmit={handleSubmit(handleRegisterUser)}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <div className="mb-4 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nome de Usuário
            </label>
            <input
              type="text"
              id="username"
              {...register('name')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              E-mail
            </label>
            <input
              type="email"
              {...register('email')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              Estado
            </label>
            <input
              type="text"
              {...register('state')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              Cidade
            </label>
            <input
              type="text"
              {...register('city')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="text-base-text font-baloo2 font-semibold py-2 px-8 rounded-md bg-yellow hover:text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
